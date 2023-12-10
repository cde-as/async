// print 4311o th3r3 w0r1d after 3s.
//print each word 1s apart.

/* ß */
let sentence = "4311o th3r3 w0r1d";
let eachWord = sentence.split(" ");

for (let i = 0; i < eachWord.length; i++) {
  setTimeout(() => {
    console.log(eachWord[i]);
  }, i * 1000);
}
