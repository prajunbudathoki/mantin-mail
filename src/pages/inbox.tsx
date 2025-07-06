import { IconMail, IconTagFilled, IconUsers } from "@tabler/icons-react";
import { useEffect, useState } from "react";
import { MailOptions } from "../components/mail-options";
import { ensureFakeEmails, getEmails } from "../utils/localStorage";
import Messages from "./message/Messages";

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
  const labelMap = ["primary", "promotions", "social"];
  const selectedLabel = labelMap[mailTypeSelected];
  useEffect(() => {
    // const fakeEmails: FakeEmail[] = generateFakeEmails(3);
    // saveEmails(fakeEmails);
    ensureFakeEmails(20);
  }, []);
  return (
    <div className="flex-1 rounded-xl mx-5">
      <MailOptions />
      <div className="h-[90vh]">
        <div className="flex items-center gap-1">
          {MailType.map((item, index) => (
            <button
              key={index}
              className={`flex items-center gap-5 p-4 ${
                mailTypeSelected === index
                  ? "border-b-2 border-b-[#0b57d0] text-blue-600"
                  : "border-b-2 border-b-transparent"
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
        <Messages label={selectedLabel} />
      </div>
    </div>
  );
}
