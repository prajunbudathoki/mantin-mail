import {
  IconCrop11,
  IconStar,
  IconArchive,
  IconTrash,
  IconAlarmSnooze,
} from "@tabler/icons-react";
import { useNavigate } from "react-router";

interface MessageProps {
  email: {
    message: string;
    id: string;
    createdAt: {
      seconds: number;
    };
  };
}

const Message = ({ email }: MessageProps) => {
  const navigate = useNavigate();
  const openMail = () => {
    navigate(`mail/${email.id}`, { state: { email } });
  };
  return (
    <div
      onClick={openMail}
      className="group flex items-start justify-between border-b border-gray-200 px-4 py-3 text-sm hover:cursor-pointer hover:shadow-md"
    >
      <div className="flex items-center gap-3">
        <div className="flex-none  text-gray-300 group-hover:text-[#202020]">
          <IconCrop11 className="w-5 h-5" />
        </div>
        <div className="flex-none text-gray-300 group-hover:text-[#202020]">
          <IconStar className="w-5 h-5" />
        </div>
        <div className="flex-1">
          <p className="text-gray-600 max-w-full">{email.message}</p>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <p className="text-gray-600 group-hover:hidden">
          {new Date(email?.createdAt?.seconds * 1000).toUTCString()}
        </p>
        <div className="hidden group-hover:flex gap-2 text-gray-500">
          <div className="rounded-full hover:bg-gray-100 cursor-pointer">
            <IconArchive stroke={1.5} aria-label="archieve" size={"20px"} />
          </div>
          <div className="rounded-full hover:bg-gray-100 cursor-pointer">
            <IconTrash
              stroke={1.5}
              size={"20px"}
              className="rounded-full hover:bg-gray-100"
            />
          </div>
          <div className="rounded-full hover:bg-gray-100 cursor-pointer">
            <IconAlarmSnooze
              stroke={1.5}
              size={"20"}
              className="rounded-full hover:bg-gray-100"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Message;
