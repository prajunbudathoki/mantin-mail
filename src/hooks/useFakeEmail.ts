import type { FakeEmail, LabelType } from "../types/FakeEmail";
import { faker } from "@faker-js/faker";
import { saveEmails } from "../utils/localStorage";

export function generateFakeEmails(count: number): FakeEmail[] {
  const labels: LabelType[] = ["primary", "social", "promotions"];
  const emails = Array.from({ length: count }, () => {
    const createdAt = new Date(faker.date.recent());
    return {
      id: faker.string.uuid(),
      subject: faker.lorem.sentence(),
      message: faker.lorem.paragraphs(2),
      to: "me@gmail.com",
      from: faker.internet.email(),
      createdAt: {
        seconds: Math.floor(createdAt.getTime() / 1000),
      },
      read: faker.datatype.boolean(),
      trashed: false,
      starred: false,
      archived: false,
      label: faker.helpers.arrayElement(labels),
    };
  });
  saveEmails(emails);
  return emails;
}
