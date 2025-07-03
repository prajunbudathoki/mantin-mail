import { IconCrop11, IconStar } from "@tabler/icons-react";
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
      className="flex items-start justify-between border-b border-gray-200 px-4 py-3 text-sm hover:cursor-pointer hover:shadow-md"
    >
      <div className="flex items-center gap-3">
        <div className="flex-none text-gray-300">
          <IconCrop11 className="w-5 h-5" />
        </div>
        <div className="flex-none text-gray-300">
          <IconStar className="w-5 h-5" />
        </div>
        <div className="flex-1">
          <p className="text-gray-600 max-w-full">{email.message}</p>
        </div>
      </div>
      <div className="flex-none text-gray-600">
        <p>{new Date(email?.createdAt?.seconds * 1000).toUTCString()}</p>
      </div>
    </div>
  );
};

export default Message;
