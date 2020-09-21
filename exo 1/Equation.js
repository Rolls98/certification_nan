/*
    Matthieu  est élève en classe de 3ème,et il veut savoir comment résoudre une équation du second dégré. il sollicite votre aide

    Ecrivez  une fonction permettant de résoudre une équation du second dégré

 */

const Equation = (a, b, c) => {
  let dis = b * b - 4 * a * c;
  if (dis > 0) {
    let x1 = ((-b + Math.sqrt(dis)) / 2) * a;
    let x2 = ((-b - Math.sqrt(dis)) / 2) * a;
    console.log("L'équation possède 2 solutions");
    return { x1, x2 };
  } else if (dis === 0) {
    let x1 = -b / (2 * a);

    console.log("L'équation possède une solution unique");
    return { x1 };
  } else {
    console.log("L'équation n'a pas de solution");
    return null;
  }
  // Ecrivez votre code ici
};

console.log(Equation(-1, 6, -9));
