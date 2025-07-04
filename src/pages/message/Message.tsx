import {
  IconCrop11,
  IconStar,
  IconArchive,
  IconTrash,
  IconAlarmSnooze,
} from "@tabler/icons-react";
import { useNavigate } from "react-router";
import { Card, Text } from "@mantine/core";
import { useState } from "react";
import { formatEmailDate } from "../../utils/formatEmailDate";

interface MessageProps {
  email: {
    message: string;
    id: string;
    subject?: string;
    to?: string;
    createdAt: {
      seconds: number;
    };
  };
}

const Message = ({ email }: MessageProps) => {
  const navigate = useNavigate();
  const [showCard, setShowCard] = useState(false);
  const openMail = () => {
    navigate(`mail/${email.id}`);
  };
  return (
    <div
      onClick={openMail}
      className="group relative flex items-start justify-between border-b border-gray-200 px-4 py-3 text-sm hover:cursor-pointer hover:shadow-md"
      onMouseEnter={() => setShowCard(true)}
      onMouseLeave={() => setShowCard(false)}
    >
      <div className="flex items-center gap-3">
        <div className="flex-none  text-gray-300 group-hover:text-[#202020]">
          <IconCrop11 className="w-5 h-5" />
        </div>
        <div className="flex-none text-gray-300 group-hover:text-[#202020]">
          <IconStar className="w-5 h-5" />
        </div>
        <div className="flex-1">
          <p className="text-gray-600 max-w-full">
            {email.message.slice(0, 150) + "...."}
          </p>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <p className="text-gray-600 group-hover:hidden">
          {formatEmailDate(email?.createdAt?.seconds)}
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
      {showCard && (
        <div
          style={{
            position: "absolute",
            top: "100%",
            left: 0,
            zIndex: 10,
            minWidth: 300,
            maxWidth: 450,
          }}
        >
          <Card shadow="md" padding={"md"} radius={"md"}>
            <Text fw={700} mb={4}>
              {email.subject || "No Subject"}
            </Text>
            <Text size="sm" c="dimmed" mb={4}>
              To: {email.to || "Unknown"}
            </Text>
            <Text size="xs" c="gray" mb={8}>
              {formatEmailDate(email?.createdAt?.seconds)}
            </Text>
            <Text>{email.message}</Text>
          </Card>
        </div>
      )}
    </div>
  );
};

export default Message;
