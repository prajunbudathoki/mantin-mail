import { useEffect, useState } from "react";
import Message from "./Message";
import {
  collection,
  onSnapshot,
  orderBy,
  query,
  where,
} from "firebase/firestore";
import { db } from "../../firebase";
import type { FakeEmail } from "../../types/FakeEmail";

const Messages = () => {
  const [emails, setEmails] = useState<FakeEmail[]>([]);
  // useEffect(() => {
  //   const q = query(
  //     collection(db, "emails"),
  //     where("trashed", "==", false),
  //     orderBy("createdAt", "asc")
  //   );
  //   console.log(q);
  //   const unsubscribe = onSnapshot(q, (snapshot) => {
  //     const allEmails = snapshot.docs
  //       .filter((doc) => doc.data().createdAt)
  //       .map((doc) => {
  //         const data = doc.data();
  //         return {
  //           id: doc.id,
  //           message: data.message ?? "",
  //           subject: data.subject,
  //           to: data.to,
  //           createdAt: data.createdAt,
  //         };
  //       });
  //     setEmails(allEmails);
  //   });
  //   return () => unsubscribe();
  // }, []);
  return (
    <div>
      {emails.map((email) => (
        <Message key={email.id} email={email} />
      ))}
    </div>
  );
};

export default Messages;
