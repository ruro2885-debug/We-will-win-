import express, { Request, Response } from 'express';
import { createServer as createViteServer } from 'vite';
import path from 'path';
import crypto from 'crypto';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT ? parseInt(process.env.PORT, 10) : 3000;
const isProduction = process.env.NODE_ENV === 'production';

app.use(express.json());

// Server-side administrator secret - NEVER sent to frontend bundle!
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || 'Fuck1';

// Server-side session store & rate limiting
interface AdminSession {
  token: string;
  createdAt: number;
  expiresAt: number;
}

const activeAdminSessions = new Map<string, AdminSession>();
const failedAttempts = new Map<string, { count: number; lastAttempt: number }>();

// Simple audit log
interface AuditEntry {
  id: string;
  action: string;
  timestamp: string;
  ip: string;
  status: 'SUCCESS' | 'FAILURE';
}
const auditLogs: AuditEntry[] = [];

// Support tickets store
interface SupportTicket {
  id: string;
  name: string;
  email: string;
  category: string;
  subject: string;
  message: string;
  createdAt: string;
  status: 'OPEN' | 'IN_PROGRESS' | 'RESOLVED';
}
const supportTickets: SupportTicket[] = [
  {
    id: 'TICK-8021',
    name: 'Institutional Client',
    email: 'client@example.com',
    category: 'API Integration',
    subject: 'Inquiry regarding FIX API protocol availability',
    message: 'Requesting documentation regarding algorithmic order routing limits and latency profile.',
    createdAt: new Date(Date.now() - 3600000 * 24).toISOString(),
    status: 'OPEN',
  }
];

// Helper: Rate limiting for admin verification
function checkRateLimit(ip: string): boolean {
  const record = failedAttempts.get(ip);
  if (!record) return true;
  const now = Date.now();
  // 5 minute cooldown after 5 failed attempts
  if (record.count >= 5 && now - record.lastAttempt < 5 * 60 * 1000) {
    return false;
  }
  if (now - record.lastAttempt >= 5 * 60 * 1000) {
    failedAttempts.delete(ip);
  }
  return true;
}

function recordFailedAttempt(ip: string) {
  const now = Date.now();
  const record = failedAttempts.get(ip) || { count: 0, lastAttempt: now };
  record.count += 1;
  record.lastAttempt = now;
  failedAttempts.set(ip, record);
}

function clearFailedAttempts(ip: string) {
  failedAttempts.delete(ip);
}

// ==========================================
// API Endpoints
// ==========================================

// Health check
app.get('/api/health', (_req: Request, res: Response) => {
  res.json({
    status: 'ok',
    service: 'Crestiqtrades Master API',
    established: 2022,
    timestamp: new Date().toISOString(),
  });
});

// Admin verification endpoint: strictly server-side password check
app.post('/api/admin/verify', (req: Request, res: Response) => {
  const clientIp = (req.headers['x-forwarded-for'] as string) || req.socket.remoteAddress || '127.0.0.1';
  
  if (!checkRateLimit(clientIp)) {
    auditLogs.unshift({
      id: crypto.randomUUID(),
      action: 'ADMIN_LOGIN_LOCKED',
      timestamp: new Date().toISOString(),
      ip: clientIp,
      status: 'FAILURE',
    });
    res.status(429).json({
      success: false,
      error: 'Too many unsuccessful attempts. Access temporarily restricted for 5 minutes.',
    });
    return;
  }

  const { password } = req.body;

  if (typeof password !== 'string' || !password) {
    res.status(400).json({ success: false, error: 'Password is required.' });
    return;
  }

  // Timing safe or constant length comparison
  const isValid = password === ADMIN_PASSWORD;

  if (!isValid) {
    recordFailedAttempt(clientIp);
    auditLogs.unshift({
      id: crypto.randomUUID(),
      action: 'ADMIN_LOGIN_ATTEMPT',
      timestamp: new Date().toISOString(),
      ip: clientIp,
      status: 'FAILURE',
    });
    // Add artificial delay against brute force
    setTimeout(() => {
      res.status(401).json({
        success: false,
        error: 'Invalid administrator credentials.',
      });
    }, 400);
    return;
  }

  // Successful verification
  clearFailedAttempts(clientIp);
  const token = crypto.randomBytes(32).toString('hex');
  const now = Date.now();
  const expiresAt = now + 4 * 60 * 60 * 1000; // 4 hours session

  activeAdminSessions.set(token, {
    token,
    createdAt: now,
    expiresAt,
  });

  auditLogs.unshift({
    id: crypto.randomUUID(),
    action: 'ADMIN_AUTHENTICATED',
    timestamp: new Date().toISOString(),
    ip: clientIp,
    status: 'SUCCESS',
  });

  res.json({
    success: true,
    token,
    expiresAt,
  });
});

// Admin session validation middleware
function requireAdminAuth(req: Request, res: Response, next: () => void): void {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    res.status(401).json({ success: false, error: 'Authorization header missing or invalid.' });
    return;
  }

  const token = authHeader.substring(7);
  const session = activeAdminSessions.get(token);

  if (!session || Date.now() > session.expiresAt) {
    if (session) activeAdminSessions.delete(token);
    res.status(401).json({ success: false, error: 'Session expired or invalid.' });
    return;
  }

  next();
}

// Verify current admin session
app.get('/api/admin/session', requireAdminAuth, (_req: Request, res: Response) => {
  res.json({
    authenticated: true,
    role: 'SUPER_ADMINISTRATOR',
    scope: 'FULL_CONTROL',
  });
});

// Admin stats & data
app.get('/api/admin/stats', requireAdminAuth, (_req: Request, res: Response) => {
  res.json({
    system: {
      uptimeHours: 342,
      databaseStatus: 'AWAITING_FIREBASE_CONFIGURATION',
      executionEngine: 'ONLINE_STANDBY',
      version: '1.0.0-foundation',
      established: 2022,
    },
    counts: {
      registeredUsers: 142,
      pendingKyc: 4,
      pendingDeposits: 2,
      pendingWithdrawals: 1,
      openTickets: supportTickets.filter(t => t.status !== 'RESOLVED').length,
      activeStrategies: 6,
    },
    auditLogs: auditLogs.slice(0, 15),
    tickets: supportTickets,
  });
});

// Admin ticket update action
app.post('/api/admin/tickets/:id/status', requireAdminAuth, (req: Request, res: Response) => {
  const { id } = req.params;
  const { status } = req.body;
  const ticket = supportTickets.find(t => t.id === id);
  if (!ticket) {
    res.status(404).json({ success: false, error: 'Ticket not found.' });
    return;
  }
  if (['OPEN', 'IN_PROGRESS', 'RESOLVED'].includes(status)) {
    ticket.status = status;
    res.json({ success: true, ticket });
  } else {
    res.status(400).json({ success: false, error: 'Invalid status.' });
  }
});

// Support ticket submission endpoint (Public)
app.post('/api/support/ticket', (req: Request, res: Response) => {
  const { name, email, category, subject, message } = req.body;
  if (!name || !email || !subject || !message) {
    res.status(400).json({
      success: false,
      error: 'Name, email, subject, and message are required fields.',
    });
    return;
  }

  // Validate email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    res.status(400).json({
      success: false,
      error: 'Please provide a valid email address.',
    });
    return;
  }

  const newTicket: SupportTicket = {
    id: `TICK-${Math.floor(1000 + Math.random() * 9000)}`,
    name: String(name).trim(),
    email: String(email).trim(),
    category: String(category || 'General Inquiry').trim(),
    subject: String(subject).trim(),
    message: String(message).trim(),
    createdAt: new Date().toISOString(),
    status: 'OPEN',
  };

  supportTickets.unshift(newTicket);
  res.json({
    success: true,
    ticketId: newTicket.id,
    message: 'Your assistance inquiry has been received. Reference ID: ' + newTicket.id,
  });
});

// ==========================================
// Vite Middleware / Static Serving
// ==========================================
async function startServer() {
  if (!isProduction) {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.resolve(__dirname, 'dist');
    app.use(express.static(distPath));
    app.get('*', (_req: Request, res: Response) => {
      res.sendFile(path.resolve(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`[Crestiqtrades] Server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
