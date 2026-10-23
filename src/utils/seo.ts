/**
 * SEO & Meta Tag Management for Crestiqtrades
 * Accurately updates document title, description, and canonical link per route.
 */

export interface PageMeta {
  title: string;
  description: string;
  canonicalPath: string;
  noIndex?: boolean;
}

export const ROUTE_METADATA: Record<string, PageMeta> = {
  '/': {
    title: 'Crestiqtrades – AI-Powered Trading Platform & Market Intelligence',
    description: 'AI-powered trading platform with algorithmic market intelligence, copy trading, and multi-asset portfolio analytics. Established in 2022.',
    canonicalPath: '/',
  },
  '/about': {
    title: 'About Crestiqtrades – Platform Philosophy & Quantitative Architecture',
    description: 'Learn about Crestiqtrades, established in 2022 to engineer disciplined, AI-assisted execution infrastructure and risk intelligence for traders.',
    canonicalPath: '/about',
  },
  '/markets': {
    title: 'Supported Markets & Asset Classes | Crestiqtrades',
    description: 'Explore multi-asset execution capabilities across Forex, Digital Assets, Global Indices, and Commodities with institutional risk controls.',
    canonicalPath: '/markets',
  },
  '/ai-trading': {
    title: 'AI Trading Engine & Algorithmic Models | Crestiqtrades',
    description: 'Discover how Crestiqtrades combines statistical pattern detection, predictive risk limits, and quantitative execution workflows.',
    canonicalPath: '/ai-trading',
  },
  '/copy-trading': {
    title: 'Strategy Copy Trading & Allocator Infrastructure | Crestiqtrades',
    description: 'Replicate vetted quantitative trading strategies with proportional lot sizing, custom draw-down guardrails, and real-time execution synchronization.',
    canonicalPath: '/copy-trading',
  },
  '/support': {
    title: 'Support & Assistance Desk | Crestiqtrades',
    description: 'Contact the Crestiqtrades support desk. Dedicated client assistance, ticket status monitoring, and platform operational guidelines.',
    canonicalPath: '/support',
  },
  '/privacy': {
    title: 'Privacy Policy | Crestiqtrades Legal',
    description: 'Comprehensive Privacy Policy detailing personal information handling, technical session cookies, data protection rights, and storage practices.',
    canonicalPath: '/privacy',
  },
  '/terms': {
    title: 'Terms and Conditions | Crestiqtrades Legal',
    description: 'Standard terms of service, account responsibilities, authorized access rules, service availability, and intellectual property provisions.',
    canonicalPath: '/terms',
  },
  '/risk-disclosure': {
    title: 'Risk Disclosure Notice | Crestiqtrades Financial Compliance',
    description: 'Important financial risk statement outlining capital risk, leverage hazards, market volatility, and operational limitations of AI tools.',
    canonicalPath: '/risk-disclosure',
  },
  '/cookies': {
    title: 'Cookie Policy | Crestiqtrades Legal & Compliance',
    description: 'Detailed explanation of necessary technologies, optional analytics, and user preference controls on Crestiqtrades.',
    canonicalPath: '/cookies',
  },
  '/login': {
    title: 'Client Sign In | Crestiqtrades Secure Portal',
    description: 'Access your Crestiqtrades client portfolio, live risk metrics, and strategy configurations.',
    canonicalPath: '/login',
  },
  '/register': {
    title: 'Create an Account | Crestiqtrades Registration',
    description: 'Register for a new Crestiqtrades account. Multi-asset market execution and algorithmic analysis.',
    canonicalPath: '/register',
  },
  '/dashboard': {
    title: 'Client Trading Overview | Crestiqtrades Workspace',
    description: 'Monitor live algorithmic execution telemetry, equity balances, and risk utilization.',
    canonicalPath: '/dashboard',
    noIndex: true,
  },
  '/portfolio': {
    title: 'Portfolio Holdings & Allocation | Crestiqtrades',
    description: 'Multi-asset mark-to-market positions, portfolio beta, and risk factor breakdown.',
    canonicalPath: '/portfolio',
    noIndex: true,
  },
  '/wallet': {
    title: 'Treasury & Settlement Gateway | Crestiqtrades',
    description: 'Deposit digital assets or fiat wire capital, manage disbursements, and view transaction audits.',
    canonicalPath: '/wallet',
    noIndex: true,
  },
  '/admin': {
    title: '404 - Page Not Found | Crestiqtrades',
    description: 'The requested resource could not be found.',
    canonicalPath: '/admin',
    noIndex: true, // Concealed admin entry point should not be indexed by search engines
  },
};

export function updateDocumentMeta(pathname: string): void {
  const meta = ROUTE_METADATA[pathname] || {
    title: 'Crestiqtrades – AI-Powered Trading Platform',
    description: 'AI-powered trading platform with algorithmic market intelligence.',
    canonicalPath: pathname,
  };

  document.title = meta.title;

  let descEl = document.querySelector('meta[name="description"]');
  if (!descEl) {
    descEl = document.createElement('meta');
    descEl.setAttribute('name', 'description');
    document.head.appendChild(descEl);
  }
  descEl.setAttribute('content', meta.description);

  let ogTitle = document.querySelector('meta[property="og:title"]');
  if (ogTitle) ogTitle.setAttribute('content', meta.title);

  let ogDesc = document.querySelector('meta[property="og:description"]');
  if (ogDesc) ogDesc.setAttribute('content', meta.description);

  // Manage robots noindex for admin / private pages
  let robotsEl = document.querySelector('meta[name="robots"]');
  if (meta.noIndex) {
    if (!robotsEl) {
      robotsEl = document.createElement('meta');
      robotsEl.setAttribute('name', 'robots');
      document.head.appendChild(robotsEl);
    }
    robotsEl.setAttribute('content', 'noindex, nofollow');
  } else if (robotsEl) {
    robotsEl.setAttribute('content', 'index, follow');
  }
}
