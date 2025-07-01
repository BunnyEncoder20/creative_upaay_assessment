import { createContext, useContext, useState } from "react";

export const GameContext = createContext({
  players: [
    {
      id: 0,
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
    },
  ],
  addPlayerData: (player) => {},
  checkGuess: (player, guess) => {},
  winner: false,
});

export const useGame = () => {
  return useContext(GameContext);
};
export const GameProvider = GameContext.Provider;
