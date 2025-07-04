import { generateFakeEmails } from "../hooks/useFakeEmail";
import type { FakeEmail } from "../types/FakeEmail";

export function saveEmails(emails: FakeEmail[]): void {
  localStorage.setItem("fakeEmails", JSON.stringify(emails));
}

export function getEmails(): FakeEmail[] {
  const emails = localStorage.getItem("fakeEmails");
  return emails ? JSON.parse(emails) : [];
}

export function getEmailById(id: string): FakeEmail | undefined {
  const emails = getEmails();
  return emails.find((email) => email.id === id);
}

export function ensureFakeEmails(count: number): void {
  const existingEmails = getEmails();
  if (existingEmails.length === 0) {
    generateFakeEmails(count);
  }
}
