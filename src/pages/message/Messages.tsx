import { useEffect, useState } from "react";
import Message from "./Message";
import type { FakeEmail } from "../../types/FakeEmail";
import { getEmails } from "../../utils/localStorage";

const Messages = () => {
  const [emails, setEmails] = useState<FakeEmail[]>([]);
  useEffect(() => {
    const storedEmails = getEmails();
    setEmails(storedEmails);
  }, []);
  return (
    <div>
      {emails.map((email) => (
        <Message key={email.id} email={email} />
      ))}
    </div>
  );
};

export default Messages;
