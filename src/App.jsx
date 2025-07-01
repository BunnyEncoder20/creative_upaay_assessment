import "@/App.css";
import { Routes, Route } from "react-router-dom";

// pages
import { LandingPage, QuestionPage, AcknowledgmentPage } from "@/pages";

// Context provider
import { GameProvider } from "@/context/GameContex";

function App() {
  return (
    <GameProvider>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/questions/:id" element={<QuestionPage />} />
        <Route path="/ack" element={<AcknowledgmentPage />} />
      </Routes>
    </GameProvider>
  );
}

export default App;
