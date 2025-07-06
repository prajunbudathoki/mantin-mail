import {
  IconArchive,
  IconArrowLeft,
  IconDotsVertical,
  IconMessageReport,
  IconTrash,
} from "@tabler/icons-react";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getEmailById } from "../utils/localStorage";

const Mail = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [email, setEmail] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;
    const result = getEmailById(id);
    setEmail(result);
    setLoading(false);
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
            <IconTrash size={"20px"} />{" "}
          </div>
          <div className="p-2 rounded-full hover:bg-gray-100 cursor-pointer">
            <IconDotsVertical size={"20px"} />
          </div>
        </div>
      </div>
      <div className="h-[90vh]  overflow-y-auto p-4">
        <div className="flex justify-between items-center gap-1">
          <div className="flex items-center gap-2">
            <h1 className="text-xl font-medium">
              {email.subject ?? "No subject"}
            </h1>
            <span className="text-sm bg-gray-200 rounded-md px-2">inbox</span>
          </div>
          <div className="flex-none text-gray-400 my-5 text-sm">
            <p>{date}</p>
          </div>
        </div>
        <div className="text-gray-500 text-sm">
          <h1>{email.to ?? "No to"}</h1>
          <span>to me</span>
        </div>
        <div className="my-10 w-2xl">
          <p>{email.message ?? "no message"}</p>
        </div>
      </div>
    </div>
  );
};

export default Mail;
