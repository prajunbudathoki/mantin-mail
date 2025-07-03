import { ActionIcon, Divider } from "@mantine/core";
import {
  IconAdjustments,
  IconCrop11,
  IconDotsVertical,
  IconReload,
} from "@tabler/icons-react";
import { ActionToggle } from "./theme/toggle";

export function MailOptions() {
  return (
    <>
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
        <div className="p-2 flex gap-2">
          <ActionIcon radius={"md"} size={"lg"}>
            <IconAdjustments />
          </ActionIcon>
          <ActionToggle />
        </div>
      </div>
      <Divider />
    </>
  );
}
