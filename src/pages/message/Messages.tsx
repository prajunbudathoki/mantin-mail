import { useEffect, useState } from "react";
import Message from "./Message";
import type { FakeEmail } from "../../types/FakeEmail";
import { getEmails } from "../../utils/localStorage";

interface MessagesProps {
  label: string;
}

const Messages = ({ label }: MessagesProps) => {
  const [emails, setEmails] = useState<FakeEmail[]>([]);
  useEffect(() => {
    const storedEmails = getEmails();
    const filtered = storedEmails.filter((email) => email.label === label);
    setEmails(filtered);
  }, [label]);
  return (
    <div>
      {emails.map((email) => (
        <Message key={email.id} email={email} />
      ))}
    </div>
  );
};

export default Messages;
