import {
  IconMail,
  IconBrandLine,
  IconTagFilled,
  IconSend,
  IconExclamationCircle,
  IconTrash,
  IconBulb,
  IconCheckbox,
  IconUser,
  IconSearch,
  IconPlus,
  IconPencil,
} from "@tabler/icons-react";
import {
  ActionIcon,
  Badge,
  Box,
  Button,
  Code,
  Group,
  Text,
  TextInput,
  Tooltip,
  UnstyledButton,
} from "@mantine/core";
import { UserButton } from "./user-button";
import classes from "./Sidebar.module.css";
import type React from "react";

interface SidebarProps {
  onComposeClick: () => void;
}

interface SidebarItems {
  label: string;
  icon: React.ReactNode;
  href: string;
}

const links = [
  { icon: IconBulb, label: "Activity", notifications: 3 },
  { icon: IconCheckbox, label: "Tasks", notifications: 4 },
  { icon: IconUser, label: "Contacts" },
];

const sidebarItems: SidebarItems[] = [
  {
    label: "Inbox",
    icon: <IconMail className="h-5 w-5" />,
    href: "/inbox",
  },
  {
    label: "Social",
    icon: <IconBrandLine className="h-5 w-5" />,
    href: "/social",
  },
  {
    label: "Labels",
    icon: <IconTagFilled className="h-5 w-5" />,
    href: "/labels",
  },
  {
    label: "Sent",
    icon: <IconSend className="h-5 w-5" />,
    href: "/sent",
  },
  {
    label: "Inbox1",
    icon: <IconMail className="h-5 w-5" />,
    href: "/inbox1",
  },
  {
    label: "Inbox2",
    icon: <IconMail className="h-5 w-5" />,
    href: "/inbox2",
  },
];

export function Sidebar({ onComposeClick }: SidebarProps) {
  const mainLinks = links.map((link) => (
    <UnstyledButton key={link.label} className={classes.mainLink}>
      <div className={classes.mainLinkInner}>
        <link.icon size={20} className={classes.mainLinkIcon} stroke={1.5} />
        <span>{link.label}</span>
      </div>
      {link.notifications && (
        <Badge size="sm" variant="filled" className={classes.mainLinkBadge}>
          {link.notifications}
        </Badge>
      )}
    </UnstyledButton>
  ));

  const sidebarLinks = sidebarItems.map((sidebar) => (
    <a
      href={sidebar.href}
      onClick={(event) => event.preventDefault()}
      key={sidebar.label}
      className={classes.collectionLink}
    >
      <Box component="span" mr={12} fz={20}>
        {sidebar.icon}
      </Box>{" "}
      {sidebar.label}
    </a>
  ));

  return (
    <nav className={classes.navbar}>
      <div className={classes.section}>
        <UserButton />
      </div>
      <Button
        className="bg-green-400"
        variant="gradient"
        onClick={onComposeClick}
      >
        <IconPencil size={"20px"} />
        Compose mail
      </Button>
      {/* <TextInput
        placeholder="Search"
        size="xs"
        leftSection={<IconSearch size={12} stroke={1.5} />}
        rightSectionWidth={70}
        rightSection={<Code className={classes.searchCode}>Ctrl + K</Code>}
        styles={{ section: { pointerEvents: "none" } }}
        mb="sm"
      /> */}
      <div className={classes.section}>
        <div className={classes.mainLinks}>{mainLinks}</div>
      </div>
      <div className={classes.section}>
        <Group className={classes.collectionsHeader} justify="space-between">
          <Text size="xs" fw={500} c="dimmed">
            Collections
          </Text>
          <Tooltip label="Create collection" withArrow position="right">
            <ActionIcon variant="default" size={18}>
              <IconPlus size={12} stroke={1.5} />
            </ActionIcon>
          </Tooltip>
        </Group>
        <div className={classes.collections}>{sidebarLinks}</div>
      </div>
    </nav>
  );
}
