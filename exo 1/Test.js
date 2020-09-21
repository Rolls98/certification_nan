/*
    Ecrivez une fonction qui retourne true si et seulement si la troisième lettre d'une chaine de caractère est une consomme, qu"elle a une position pair dans l'alphabet
    et qu'elle est unique sur la chaine de caractère , sinon vous retourner false
 */

const Test = (chaine) => {
  // Ecrivez votre code ici
  let alph = "abcdefghijklmnopqrstuvwxyz".split("");
  let cons = "bcdfghjklmnpqrstvwxz";
  let tl = chaine[2];
  let tab = [...chaine];
  tab.splice(2, 1);
  console.log(tl);
  console.log(tab);
  return (alph.indexOf(tl) + 1) % 2 === 0 &&
    !tab.includes(tl) &&
    cons.includes(tl)
    ? true
    : false;
};
