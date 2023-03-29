import { Box } from "@chakra-ui/react";
import Navbar from "./Components/Navbar";
import AllRoutes from "./Pages/AllRoutes";
import './App.css';
import Footer from "./Components/Footer";

function App() {
  return (
    <Box>
      <Navbar />
      <Box w={{ base: "1192px", sm: "900px", lg: "1192px" }} m="auto" color='#D9D8D6'><hr /></Box>
      <AllRoutes />
      <Box w={{ base: "1192px", sm: "900px", lg: "1192px" }} color="#D9D8D6" m={"auto"}>
        <hr />
      </Box>
      <Footer />
    </Box>
  );
}

export default App;
