import test from 'node:test';
import assert from 'node:assert/strict';
import { TapCounter } from './tapCounter.ts';

test('TapCounter starts at 0 and is not unlocked', () => {
  const counter = new TapCounter(9);
  assert.equal(counter.getCount(), 0);
  assert.equal(counter.isUnlocked(), false);
});

test('TapCounter increments on deliberate taps', () => {
  const counter = new TapCounter(9, 100);
  let now = 1000;
  
  const res1 = counter.registerTap(now);
  assert.equal(res1.count, 1);
  assert.equal(res1.unlocked, false);
  assert.equal(res1.didIncrement, true);

  now += 200;
  const res2 = counter.registerTap(now);
  assert.equal(res2.count, 2);
  assert.equal(res2.didIncrement, true);
});

test('TapCounter debounces rapid duplicate events within threshold', () => {
  const counter = new TapCounter(9, 120);
  const now = 1000;
  
  const res1 = counter.registerTap(now);
  assert.equal(res1.count, 1);
  assert.equal(res1.didIncrement, true);

  // Rapid event 30ms later (e.g. click right after touchstart)
  const res2 = counter.registerTap(now + 30);
  assert.equal(res2.count, 1);
  assert.equal(res2.didIncrement, false);

  // Subsequent event 150ms later passes
  const res3 = counter.registerTap(now + 150);
  assert.equal(res3.count, 2);
  assert.equal(res3.didIncrement, true);
});

test('TapCounter unlocks exactly at 9 deliberate taps', () => {
  const counter = new TapCounter(9, 100);
  let time = 1000;

  for (let i = 1; i <= 8; i++) {
    time += 150;
    const res = counter.registerTap(time);
    assert.equal(res.count, i);
    assert.equal(res.unlocked, false);
  }

  // 9th tap
  time += 150;
  const res9 = counter.registerTap(time);
  assert.equal(res9.count, 9);
  assert.equal(res9.unlocked, true);
  assert.equal(counter.isUnlocked(), true);
});

test('TapCounter resets cleanly', () => {
  const counter = new TapCounter(9, 100);
  counter.registerTap(1000);
  counter.registerTap(1200);
  assert.equal(counter.getCount(), 2);

  counter.reset();
  assert.equal(counter.getCount(), 0);
  assert.equal(counter.isUnlocked(), false);
});
