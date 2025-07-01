import { createContext, useContext, useState } from "react";

const GameContext = createContext();

export const GameProvider = ({ children }) => {
  const [playerInfo, setPlayerInfo] = useState({
    firstName: "",
    lastName: "",
    birthCity: "",
    passion: "",
    everydayJoy: "",
    favFood: "",
    favApp: "",
    hiddenTalent: "",
    presentMotto: "",
    score: 0,
    people_who_know_you: 0,
    people_you_know: 0,
  });

  return (
    <GameContext.Provider value={{ playerInfo, setPlayerInfo }}>
      {children}
    </GameContext.Provider>
  );
};

export const useGame = () => useContext(GameContext);
