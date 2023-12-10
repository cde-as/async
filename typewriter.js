const sentence = "hello there from lighthouse labs";

// USING TRADITIONAL FOR LOOP

/* for (let i = 0; i < sentence.length; i++) {
  setTimeout(() => {
    process.stdout.write(sentence[i]);

    if (i === sentence.length - 1) {
      console.log("\n");
    }

  }, i * 50);
} */

// USING FOR OF LOOP

let delay = 0;

for (const char of sentence) {
  setTimeout(() => {
    process.stdout.write(char);

    if (sentence.indexOf(char) === sentence.length - 1) {
      process.stdout.write('\n');
    }

  }, delay += 50);
}