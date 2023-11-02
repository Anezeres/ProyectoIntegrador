import { createContext, useContext, useState } from "react";

export const xanderContext = createContext();

export const useXander = () => {
  const context = useContext(xanderContext);
  if (!context) {
    console.error("Error creating xander context");
  }
  return context;
};

export function XanderProvider({ children }) {
  const [xander, setXander] = useState({
    ref: null,
    body: null,
  });

  return (
    <xanderContext.Provider value={{ xander, setXander }}>
      {children}
    </xanderContext.Provider>
  );
}