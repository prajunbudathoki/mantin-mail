import "./App.css";
import "@mantine/core/styles.css";
import { MantineProvider, AppShell, Box } from "@mantine/core";
import { Sidebar } from "./components/sidebar/Sidebar";

function App() {
  return (
    <MantineProvider>
      <Box style={{ display: "flex", height: "100vh" }}>
        <Sidebar />
        <Box component="main" style={{ flex: 1, padding: "1rem" }}>
          <h1>Hello from main content</h1>
        </Box>
      </Box>
    </MantineProvider>
  );
}

export default App;
