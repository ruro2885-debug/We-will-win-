import test from 'node:test';
import assert from 'node:assert/strict';
import {
  parseConsentRecord,
  buildAcceptAllRecord,
  buildRejectAllRecord,
  buildCustomRecord,
  CURRENT_CONSENT_VERSION
} from './consentManager.ts';

test('parseConsentRecord returns null for invalid or null input', () => {
  assert.equal(parseConsentRecord(null), null);
  assert.equal(parseConsentRecord(''), null);
  assert.equal(parseConsentRecord('not-json'), null);
  assert.equal(parseConsentRecord('{}'), null);
});

test('buildAcceptAllRecord enables all categories with current version', () => {
  const record = buildAcceptAllRecord();
  assert.equal(record.version, CURRENT_CONSENT_VERSION);
  assert.equal(record.hasConsented, true);
  assert.equal(record.categories.necessary, true);
  assert.equal(record.categories.analytics, true);
  assert.equal(record.categories.marketing, true);
});

test('buildRejectAllRecord only keeps necessary cookies active', () => {
  const record = buildRejectAllRecord();
  assert.equal(record.hasConsented, true);
  assert.equal(record.categories.necessary, true);
  assert.equal(record.categories.analytics, false);
  assert.equal(record.categories.marketing, false);
});

test('buildCustomRecord respects selective choices but enforces necessary=true', () => {
  const record = buildCustomRecord({ analytics: true, marketing: false });
  assert.equal(record.categories.necessary, true);
  assert.equal(record.categories.analytics, true);
  assert.equal(record.categories.marketing, false);

  const serialized = JSON.stringify(record);
  const parsed = parseConsentRecord(serialized);
  assert.notEqual(parsed, null);
  assert.equal(parsed?.categories.analytics, true);
  assert.equal(parsed?.categories.marketing, false);
  assert.equal(parsed?.categories.necessary, true);
});
