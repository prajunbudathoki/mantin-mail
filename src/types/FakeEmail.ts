export type LabelType = "primary" | "social" | "promotions";

export type FakeEmail = {
  id: string;
  subject: string;
  message: string;
  to: string;
  from: string;
  createdAt: {
    seconds: number;
  };
  read: boolean;
  trashed?: boolean;
  starred?: boolean;
  archieved?: boolean;
  label: LabelType;
};
