import { getFullYear, getFooterCopy, getLatestNotification } from "./utils";

test('getFullYear return Current year', () => {
  const currentYear = new Date().getFullYear();
  expect(getFullYear()).toBe(currentYear);
});

test('getFooterCopy return correct args based on bool val', () => {
  expect(getFooterCopy(true)).toBe('Holberton School');
  expect(getFooterCopy(false)).toBe('Holberton School main dashboard');
});

test('getLastestNotification return specific text', () => {
  expect(getLatestNotification()).toBe("<strong>Urgent requirement</strong> - complete by EOD")
})