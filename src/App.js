import logo from "./logo.svg";
import "./App.css";
import { ChakraProvider } from "@chakra-ui/react";
import Portfolio from "./Portfolio";

function App() {
  return (
    <ChakraProvider>
      <div className="App">
        <Portfolio />
      </div>
    </ChakraProvider>
  );
}

export default App;
