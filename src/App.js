import React from "react";
import UseState from "./Hooks/useState.js";

function App() {
  return (
    <>
      <h1> Sextou!</h1>
      {/* <h2> 1- Hooks é utilizado em componente de função. </h2>
      <h2>
        {" "}
        2 - Hooks permitem o uso de vários recursos de forma mais simples
        através de função. E também ajudam a organizar a lógica utilizada dentro
        dos componentes.{" "}
      </h2> */}
      <UseState />
    </>
  );
}

export default App;
