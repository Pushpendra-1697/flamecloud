import { Box } from "@chakra-ui/react";
import Navbar from "./Components/Navbar";
import AllRoutes from "./Pages/AllRoutes";

function App() {
  return (
    <Box>
      <Navbar />
      <hr style={{width: "1192px", color: '#D9D8D6' , margin: "auto"}} />
      <AllRoutes />
    </Box>
  );
}

export default App;
