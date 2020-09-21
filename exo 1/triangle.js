/*
    On vous demande d'écrire une fonction qui permettra de dessiner une forme Triangulaire en console

    exam : *
           * *
           * * *
           * * * *
           * * * * *
           * * * * * *
 */

const Triangle = () => {
  // Ecrivez votre code ici
  let t = "";
  for (let i = 1; i < 7; i++) {
    t += "* ".repeat(i) + "\n";
  }

  return t;
};

console.log(Triangle());
