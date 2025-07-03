import { useEffect } from "react";
import Message from "./Message";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../../firebase";

const Messages = () => {
  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, "emails"), (snapshot) => {
      const allEmails = snapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      console.log(allEmails);
    });
    return () => unsubscribe();
  }, []);
  return (
    <div>
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
    </div>
  );
};

export default Messages;
