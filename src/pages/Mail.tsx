import {
  IconArrowLeft,
  IconArchive,
  IconMessageReport,
  IconTrash,
  IconDotsVertical,
} from "@tabler/icons-react";
import { useNavigate } from "react-router-dom";

const Mail = () => {
  const navigate = useNavigate();
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
        <div className="flex justify-between bg-white items-center gap-1">
          <div className="flex items-center gap-2">
            <h1 className="text-xl font-medium">Subject</h1>
            <span className="text-sm bg-gray-200 rounded-md px-2">inbox</span>
          </div>
          <div className="flex-none text-gray-400 my-5 text-sm">
            <p>10-2020-15</p>
          </div>
        </div>
        <div className="text-gray-500 text-sm">
          <h1>prajunbudathoki1@gmail.com</h1>
          <span>to me</span>
        </div>
        <div className="my-10">
          <p>message</p>
        </div>
      </div>
    </div>
  );
};

export default Mail;
