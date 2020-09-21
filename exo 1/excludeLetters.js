/*
    yao veut éliminez tous les lettres de l'alaphabet qui ont une position impaire dans une chaine de caractère
     Ecrivez la fonction qui permetra à yao d'effectuer cette action
    la fonction prend en paramètre une chaine de caractère et retourne une chaine de caractère
*/

const excludeLetters = (chaine) => {
  let tab = [];

  for (let i = 0; i < chaine.length; i++) {
    if (i % 2 === 0) {
      tab.push(chaine[i]);
    }
  }

  return tab.join("");
  // Ecrivez votre code ici
};
