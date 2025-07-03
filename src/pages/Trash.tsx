import { useEffect, useState } from "react";
import { collection, query, where, onSnapshot } from "firebase/firestore";
import { db } from "../../src/firebase";
import Message from "./message/Message";
import { MailOptions } from "../components/mail-options";

type Email = {
  id: string;
  [key: string]: any;
};

const Trash = () => {
  const [emails, setEmails] = useState<Email[]>([]);

  useEffect(() => {
    const q = query(collection(db, "emails"), where("trashed", "==", true));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      setEmails(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
    });
    return () => unsubscribe();
  }, []);

  return (
    <div className="w-full">
        <MailOptions />
      <h2 className="text-lg font-bold mb-4">Trash</h2>
      {emails.length === 0 && <div>No emails in trash.</div>}
      {emails.map((email) => (
        <Message key={email.id} email={email} />
      ))}
    </div>
  );
};

export default Trash;
