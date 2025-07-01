import {
  MantineProvider,
  AppShell,
  Box,
  type MantineColorsTuple,
  createTheme,
  Button,
} from "@mantine/core";
import { Sidebar } from "./components/shared/sidebar/Sidebar";
import { ActionToggle } from "./components/theme/toggle";
import Inbox from "./components/inbox";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/layout";
import Mail from "./components/Mail";

const myColor: MantineColorsTuple = [
  "#ecf4ff",
  "#dce4f5",
  "#b9c7e2",
  "#94a8d0",
  "#748dc0",
  "#5f7cb7",
  "#5474b4",
  "#44639f",
  "#3a5890",
  "#2c4b80",
];

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Inbox />,
      },
      {
        path: "/mail/:id",
        element: <Mail />,
      },
    ],
  },
]);

const theme = createTheme({
  primaryColor: "myColor",
  colors: {
    myColor,
  },
});
function App() {
  return (
    <MantineProvider theme={theme}>
      <Box>
        <RouterProvider router={router} />
        {/* <Box component="main" style={{ flex: 1, padding: "1rem" }}>
          <ActionToggle />
        </Box> */}
        {/* <Inbox /> */}
      </Box>
    </MantineProvider>
  );
}

export default App;
