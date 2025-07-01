import React from "react";
import { Sidebar } from "./shared/sidebar/Sidebar";
import { Outlet } from "react-router-dom";
import { useDisclosure } from "@mantine/hooks";
import CustomizeDialog from "./customize-dialog";

export default function Layout() {
  const [opened, { open, close }] = useDisclosure(false); 

  return (
    <div className="flex">
      <Sidebar onComposeClick={open} /> 
      <Outlet />
      <CustomizeDialog opened={opened} onClose={close} />{" "}
    </div>
  );
}
