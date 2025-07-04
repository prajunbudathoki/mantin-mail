import type { FakeEmail } from "../types/FakeEmail";

export function saveEmails(emails: FakeEmail[]): void {
  localStorage.setItem("fakeEmails", JSON.stringify(emails));
}

export function getEmails(): FakeEmail[] {
  const emails = localStorage.getItem("fakeEmails");
  return emails ? JSON.parse(emails) : [];
}
