import {
  MantineProvider,
  AppShell,
  Box,
  type MantineColorsTuple,
  createTheme,
  Button,
} from "@mantine/core";
import { Sidebar } from "./components/sidebar/Sidebar";
import { ActionToggle } from "./components/theme/toggle";
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
  "#2c4b80"
]

const theme = createTheme({
  primaryColor: "myColor",
  colors: {
    myColor,
  },
});
function App() {
  return (
    <MantineProvider theme={theme}>
      <Box style={{ display: "flex", height: "100vh" }}>
        <Sidebar />
        <Box component="main" style={{ flex: 1, padding: "1rem" }}>
          <ActionToggle />
        </Box>
      </Box>
    </MantineProvider>
  );
}

export default App;
