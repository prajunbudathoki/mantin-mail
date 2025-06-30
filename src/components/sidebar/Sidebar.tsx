import {
  IconMail,
  IconBrandLine,
  IconTagsFilled,
  IconStar,
  IconSend,
  IconExclamationCircle,
  IconTrash,
  IconSearch,
  IconPlus,
} from "@tabler/icons-react";
import {
  ActionIcon,
  Badge,
  Box,
  Code,
  Group,
  Text,
  TextInput,
  Tooltip,
  UnstyledButton,
} from "@mantine/core";
import classes from "./Sidebar.module.css";

interface SideBarItem {
  href: string;
  icon: React.ReactNode;
  label: string;
}

const sidebarItems: SideBarItem[] = [
  {
    label: "Inbox",
    href: "/mail/inbox",
    icon: <IconMail className="w-5 h-5" />,
  },
  {
    label: "Drafts",
    href: "/social",
    icon: <IconBrandLine className="w-5 h-5" />,
  },
  {
    label: "Sent Mail",
    href: "/sent",
    icon: <IconSend className="w-5 h-5" />,
  },
  {
    label: "Spam",
    href: "/spam",
    icon: <IconExclamationCircle className="w-5 h-5" />,
  },
  {
    label: "Labels",
    href: "/labels",
    icon: <IconTagsFilled className="w-5 h-5" />,
  },
  {
    label: "Trash",
    href: "/trash",
    icon: <IconTrash className="w-5 h-5" />,
  },
  {
    label: "Starred",
    href: "/starred",
    icon: <IconStar className="w-5 h-5" />,
  },
];

export function Sidebar() {
  const sidebarLinks = sidebarItems.map((sidebar) => (
    <a
      href="#"
      onClick={(event) => event.preventDefault()}
      key={sidebar.label}
      className={classes.collectionLink}
    >
      <Box component="span" mr={9} fz={16}>
        {sidebar.icon}
      </Box>{" "}
      {sidebar.label}
    </a>
  ));
  return (
    <nav className={classes.navbar}>
      {/* <div className={classes.section}>
        <UserButton />
      </div> */}

      <TextInput
        placeholder="Search"
        size="xs"
        leftSection={<IconSearch size={12} />}
        rightSectionWidth={70}
        rightSection={<Code className={classes.searchCode}>Ctrl + K</Code>}
        styles={{ section: { pointerEvents: "none" } }}
        mb="sm"
      />

      {/* <div className={classes.section}>
        <div className={classes.mainLinks}>{mainLinks}</div>
      </div> */}

      <div className={classes.section}>
        <Group className={classes.collectionsHeader} justify="space-between">
          <Text size="xs" fw={500} c="dimmed">
            Collections
          </Text>
          <Tooltip label="Create collection" withArrow position="right">
            <ActionIcon variant="default" size={18}>
              <IconPlus size={12} />
            </ActionIcon>
          </Tooltip>
        </Group>
        <div className={classes.collections}>{sidebarLinks}</div>
      </div>
    </nav>
  );
}
