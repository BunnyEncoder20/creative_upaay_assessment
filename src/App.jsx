import "@/App.css";
import LandingPage from "./components/LandingPage";

// Context provider
import { GameProvider } from "@/context/GameContex";

function App() {
  return (
    <GameProvider>
      <LandingPage />
    </GameProvider>
  );
}

export default App;
