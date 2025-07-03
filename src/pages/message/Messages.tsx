import { useEffect, useState } from "react";
import Message from "./Message";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { db } from "../../firebase";

type Email = {
  id: string;
  [key: string]: any;
  message: string;
  createdAt: {
    seconds: number;
  };
};

const Messages = () => {
  const [emails, setEmails] = useState<Email[]>([]);
  useEffect(() => {
    const q = query(collection(db, "emails"), orderBy("createdAt", "desc"));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const allEmails = snapshot.docs
        .filter((doc) => doc.data().createdAt)
        .map((doc) => {
          const data = doc.data();
          return {
            id: doc.id,
            message: data.message ?? "",
            createdAt: data.createdAt,
          };
        });
      setEmails(allEmails);
    });
    return () => unsubscribe();
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
