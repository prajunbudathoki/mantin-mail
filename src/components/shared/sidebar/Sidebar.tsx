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
import { Link, useLocation } from "react-router-dom";
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
    href: "/",
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
    label: "Trash",
    icon: <IconTrash className="h-5 w-5" />,
    href: "/trash",
  },
];

export function Sidebar({ onComposeClick }: SidebarProps) {
  const location = useLocation();
  console.log("loc", location);
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

  const sidebarLinks = sidebarItems.map((sidebar) => {
    const isActive = location.pathname === sidebar.href;
    return (
      <Link
        to={sidebar.href}
        key={sidebar.label}
        className={`${classes.collectionLink} ${
          isActive ? classes.activeLink : ""
        }`}
        style={isActive ? { backgroundColor: "#2c2c2c", fontWeight: 600 } : {}}
      >
        <Box component="span" mr={12} fz={20}>
          {sidebar.icon}
        </Box>
        {sidebar.label}
      </Link>
    );
  });

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
