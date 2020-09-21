/*
    On vous demande d'écrire une fonction qui permettra de dessiner une forme pyramidale en console

    exam :     *
              * *
             * * *
            * * * *
 */

const Pyramide = () => {
  let p = "";
  let sp = 3;
  // Ecrivez votre code ici
  for (let y = 1; y < 5; y++) {
    p += " ".repeat(sp) + "* ".repeat(y) + "\n";
    sp -= 1;
  }

  return p;
};

console.log(Pyramide());
