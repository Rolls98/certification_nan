/*
    On vous demande d'écrire une fonction qui permettra de dessiner une forme rectangulaire en console

    exam : ------------------
          |                  |
          |                  |
          |                  |
          --------------------
 */

const Rectangle = () => {
  // Ecrivez votre code ici
  let h = "-".repeat(16);
  let t = h + "\n";

  for (let x = 0; x < 4; x++) {
    t += "|" + " ".repeat(14) + "|" + "\n";
  }

  t += h;

  return t;
};

console.log(Rectangle());
