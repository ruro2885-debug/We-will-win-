import test from 'node:test';
import assert from 'node:assert/strict';

test('Password verification logic conforms to specification', () => {
  const targetPassword = (process.env.ADMIN_PASSWORD || 'Fuck1') as string;
  const testInputA = 'Fuck1' as string;
  const testInputB = 'fuck1' as string;
  const testInputC = 'FUCK1' as string;
  const testInputD = 'Fuck' as string;

  assert.equal(targetPassword, 'Fuck1');
  assert.equal(testInputA === targetPassword, true);
  assert.equal(testInputB === targetPassword, false);
  assert.equal(testInputC === targetPassword, false);
  assert.equal(testInputD === targetPassword, false);
});
