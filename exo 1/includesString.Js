// on vous donne deux chaines de caractéres .
// et l'on vous demande de retounnez dans un tableau la liste des lettres qui se retrouve dans les deux chaines de caractères

// exemple: includesString('salut','bonjour') => ['u'], includesString('maman','moniqua') => ['m','a','n']

const includesString = (chaineA, cchaineB) => {
  let lst = [];
  for (let l of chaineA) {
    if (cchaineB.includes(l) && !lst.includes(l)) lst.push(l);
  }

  return lst;
  // écrivez votre code ici
};

console.log(includesString("maman", "moniqua"));
