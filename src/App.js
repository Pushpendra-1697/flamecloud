import { Box } from "@chakra-ui/react";
import Navbar from "./Components/Navbar";
import AllRoutes from "./Pages/AllRoutes";

function App() {
  return (
    <Box>
      <Navbar />
      <Box w={{base: "1192px", sm: "900px", lg: "1192px"}} m="auto"><hr style={{ color: '#D9D8D6' , margin: "auto"}} /></Box>
      <AllRoutes />
    </Box>
  );
}

export default App;
