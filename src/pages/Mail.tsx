import {
  IconArrowLeft,
  IconArchive,
  IconMessageReport,
  IconTrash,
  IconDotsVertical,
} from "@tabler/icons-react";
import { doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { db } from "../firebase";

const Mail = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [email, setEmail] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEmail = async () => {
      if (!id) return;
      const docRef = doc(db, "emails", id);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setEmail({ id: docSnap.id, ...docSnap.data() });
      }
      setLoading(false);
    };
    fetchEmail();
  }, [id]);

  if (loading) {
    return (
      <div className="flex-1 rounded-xl mx-5 flex items-center justify-center">
        Loading...
      </div>
    );
  }

  const date = email?.createdAt.seconds
    ? new Date(email.createdAt.seconds * 1000).toLocaleDateString()
    : "";
  return (
    <div className="flex-1 rounded-xl mx-5">
      <div className="flex items-center justify-between px-4">
        <div className="flex items-center gap-2 text-gray-700 py-2">
          <div
            onClick={() => navigate("/")}
            className="p-2 rounded-full hover:bg-gray-100 cursor-pointer"
          >
            <IconArrowLeft size={"20px"} />
          </div>
          <div className="p-2 rounded-full hover:bg-gray-100 cursor-pointer">
            <IconArchive size={"20px"} />
          </div>
          <div className="p-2 rounded-full hover:bg-gray-100 cursor-pointer">
            <IconMessageReport size={"20px"} />
          </div>
          <div className="p-2 rounded-full hover:bg-gray-100 cursor-pointer">
            <IconTrash size={"20px"} />
          </div>
          <div className="p-2 rounded-full hover:bg-gray-100 cursor-pointer">
            <IconDotsVertical size={"20px"} />
          </div>
        </div>
      </div>
      <div className="h-[90vh] overflow-y-auto p-4">
        <div className="flex justify-between items-center gap-1">
          <div className="flex items-center gap-2">
            <h1 className="text-xl font-medium">{email.subject}</h1>
            <span className="text-sm bg-gray-200 rounded-md px-2">inbox</span>
          </div>
          <div className="flex-none text-gray-400 my-5 text-sm">
            <p>{date}</p>
          </div>
        </div>
        <div className="text-gray-500 text-sm">
          <h1>{email.to}</h1>
          <span>to me</span>
        </div>
        <div className="my-10">
          <p>{email.message}</p>
        </div>
      </div>
    </div>
  );
};

export default Mail;
