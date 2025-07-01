import { Button } from "@mantine/core";
import {
  IconCrop11,
  IconDotsVertical,
  IconMail,
  IconReload,
  IconTagFilled,
  IconUsers,
} from "@tabler/icons-react";
import { useState } from "react";

const MailType = [
  {
    icon: <IconMail size={"20px"} />,
    text: "Primary",
  },
  {
    icon: <IconTagFilled size={"20px"} />,
    text: "Promotions",
  },
  {
    icon: <IconUsers size={"20px"} />,
    text: "Social",
  },
];

export default function Inbox() {
  const [mailTypeSelected, setMailTypeSelected] = useState(0);
  return (
    <div className="flex-1 rounded-xl mx-5">
      <div className="flex items-center justify-between px-4">
        <div className="flex items-center gap-2 text-gray-700 py-2">
          <div className="flex items-center gap-1">
            <IconCrop11 size={"20px"} />
          </div>
          <div className="p-2 rounded-full hover:bg-gray-100 cursor-pointer">
            <IconReload size={"20px"} />
          </div>
          <div className="p-2 rounded-full hover:bg-gray-100 cursor-pointer">
            <IconDotsVertical size={"20px"} />
          </div>
        </div>
      </div>
      <div className="h-[90vh]">
        <div className="flex items-center gap-1">
          {MailType.map((item, index) => (
            <button
              key={index}
              className={`flex items-center gap-5 p-4 ${
                mailTypeSelected === index
                  ? "border-b-4 border-b-[#0b57d0] text-blue-600"
                  : "border-b-4 border-b-transparent"
              } w-52 hover:bg-gray-100`}
              onClick={() => {
                setMailTypeSelected(index);
              }}
            >
              {item.icon}
              <span>{item.text}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
