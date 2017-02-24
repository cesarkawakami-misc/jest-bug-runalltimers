const timers = require('./timers');

beforeEach(() => {
  jest.useFakeTimers();
});

it('timeoutOnly should work', () => {
  const state = { ok: false };
  timers.timeoutOnly(state);
  expect(state.ok).toBe(false);
  jest.runAllTimers();
  expect(state.ok).toBe(true);
});

it('tickOnly should work', () => {
  const state = { ok: false };
  timers.tickOnly(state);
  expect(state.ok).toBe(false);
  jest.runAllTimers();
  expect(state.ok).toBe(true);
});

it('tickThenTimeout should work', () => {
  const state = { ok: false };
  timers.tickThenTimeout(state);
  expect(state.ok).toBe(false);
  jest.runAllTimers();
  expect(state.ok).toBe(true);
});

it('timeoutThenTick should work?', () => {
  const state = { ok: false };
  timers.timeoutThenTick(state);
  expect(state.ok).toBe(false);
  jest.runAllTimers();
  expect(state.ok).toBe(true);
});
