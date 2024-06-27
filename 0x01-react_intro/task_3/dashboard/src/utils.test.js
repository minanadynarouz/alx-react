import { getFullYear, getFooterCopy, getLatestNotification } from "./utils";

test("returns current year", () => {
  expect(getFullYear()).toBe(2024);
})

test("Footer Copy Data", () => {
  expect(getFooterCopy(true)).toBe("Holberton School");
  expect(getFooterCopy(false)).toBe("Holberton School main dashboard");
})

test("Return a string", () => {
  expect(typeof getLatestNotification()).toBe('string');
})