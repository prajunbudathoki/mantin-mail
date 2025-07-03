import {
  ActionIcon,
  Box,
  createTheme,
  MantineProvider,
  type MantineColorsTuple,
} from "@mantine/core";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/layout";
import Inbox from "./pages/inbox";
import Mail from "./pages/Mail";

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
  components: {
    ActionIcon: {
      defaultProps: {
        variant: "default",
      },
    },
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
