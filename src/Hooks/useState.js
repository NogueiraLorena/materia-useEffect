// //EXEMPLO 1

//import React, { useState } from "react";

// export default function Hooksusestate() {
//   //sintáxe de um hook useState
//   // const [ , ] = useState ()

//   // Primeiro criamos uma variável const' que guarda o estado em sí (Nesse caso, chamamos de nome).
//   // recebe uma array [ ] onde o primeiro valor é a coisa que queremos guardar, e o segundo valor é a habilidade que vamos mudar essa coisa.
//   //Terceira coisa, é o hook useState.
//   // ( ) é o que vai receber o nosso valor inicial

//   //o setNome é basicamente o this.setState({})

//   const [nome, setNome] = useState("Karynne");

//   const [animal, setAnimal] = useState("Pato");

//   //Criando uma função para que toda vez que eu clicar naquele botão o nome mude
//   const AlterarNome = () => {
//     //ternário
//     // setNome(nome === "Karynne" ? "Brendon" : "Karynne")
//     //   }

//     //condição if e else

//     if (nome === "Karynne") {
//       setNome("Brendon");
//     } else {
//       setNome("Karynne");
//     }
//   };

//   const mudarAnimal = () => {
//     setAnimal(animal === "Pato" ? "Galo" : "Pato");
//   };

//   return (
//     <>
//       <h2> Meu nome é: {nome} </h2>
//       <button
//         onClick={() => {
//           AlterarNome();
//         }}
//       >
//         {" "}
//         Mudar o nome{" "}
//       </button>

//       {/* <h1> Hook useState </h1>
//       <h2> O hook useState permite a criação de estados dentro de um componente de função. </h2> */}

//       <h2> Eu tenho um {animal} </h2>
//       <button
//         onClick={() => {
//           mudarAnimal();
//         }}
//       >
//         {" "}
//         Mudar Animal{" "}
//       </button>
//     </>
//   );
// }

// ---- EXEMPLO 2

import React, { useState, useEffect } from "react";

export default function Contador() {
  const [par, setPar] = useState(0); //números pares
  const [impar, setImpar] = useState(1); //números ímpares

  const [count, setCount] = useState(0);
  const [open, setOpen] = useState(false);
  //números ímpares
  // useEffect(ação, array de dependencia)

  // useEffect(() => {
  //   // document.body.style.backgroundColor === 'white' ?
  //   // document.body.style.backgroundColor = "darkred":
  //   // document.body.style.backgroundColor = 'white'

  //   if (document.body.style.backgroundColor === "white") {
  //     document.body.style.backgroundColor = "darkred";
  //   } else {
  //     document.body.style.backgroundColor = "white";
  //   }
  // }, [par]);

  useEffect(() => {
    if (open === true) {
      setTimeout(() => {
        setCount(count + 1);
      }, 1000);
    }
  }, [count, open]);

  return (
    <>
      <h2> Números Pares </h2>
      <h2> {par} </h2>
      <button
        onClick={() => {
          setPar(par + 2);
        }}
      >
        Somar de 2 em 2
      </button>
      <button
        onClick={() => {
          setPar(par - 2);
        }}
      >
        Diminuir de 2 em 2
      </button>
      <button
        onClick={() => {
          setPar(par === 0);
        }}
      >
        ZERAR
      </button>

      {/* DEVER DE CASA, FAZER PARA O BOTÃO ÍMPAR */}

      <h2>{count}</h2>
      <button
        onClick={() => {
          setOpen(!open);
        }}
      >
        true/false
      </button>
    </>
  );
}
// https://react.dev/reference/react/useEffect
