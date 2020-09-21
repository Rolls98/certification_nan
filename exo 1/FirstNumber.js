/*
    Dans cet exercice, on vous donne un interval de nombres et vous devrez retourner la liste des nombres premiers compris dans cet interval

    example: FirstNumber(5,18) => [5,7,11,13,17]
 */

const FirstNumber = (numb1, numb2) => {
  let nbp = [];
  // Ecrivez votre code ici
  for (let i = numb1; i < numb2; i++) {
    if (NumberPremier(i)) {
      nbp.push(i);
    }
  }

  return nbp;
};

const NumberPremier = (nb) => {
  if (nb <= 0) return false;
  let p = true;
  for (let i = 2; i < nb; i++) {
    if (nb % i === 0) {
      p = false;
      break;
    }
  }

  return p;
};

console.log(FirstNumber(5, 18));
