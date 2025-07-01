import React from "react";
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
    </div>
  );
};

export default Mail;
