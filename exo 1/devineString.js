/*
     Jean veut deviner le nombre de mot que l'on peut former si l'on se base sur les positions respective des lettres de l'alphabet

     exemple: abc => 1+2+3 = 6, nous avons aussi f = 6, nous avons aussi bd = 2+4 = 6, donc abc = f = bd = ae; etc ..

     pour cet fonction , il vous est demandé de donner que deux égalité de chaque chaine de caractère donné

    exm: devineString("abc") => ["f","bd"];

 */

const devineString = (chaine) => {
  let alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
  let dstr = [];
  let som = 0;
  for (let i = 0; i < chaine.length; i++) {
    som += parseInt(alphabet.indexOf(chaine[i])) + 1;
  }
  //premiere verification
  if (som > 0 && som < 26) {
    if (!chaine.includes(alphabet[som])) {
      dstr.push(alphabet[som - 1]);
    }
  }

  for (let al of alphabet) {
    let rst = som - (alphabet.indexOf(al) + 1);
    if (rst > 0 && som > rst) {
      dstr.push(al + alphabet[rst - 1]);
    }
  }

  return dstr.slice(0, 2);

  // Ecrivez votre code ici
};

console.log(devineString("ab"));
