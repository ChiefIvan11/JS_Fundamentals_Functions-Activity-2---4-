function scramble(string) {
    var array = string.split("");
    Word = array.sort().join("");
    return Word;
  }
  console.log(scramble('webmaster'));