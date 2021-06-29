const sentence = "hello there from lighthouse labs";

const print = (str) => {
  let time = 0;
  for (let char of str) {
    setTimeout(() => {
      process.stdout.write(char);
    }, time);
    time += 50;
  }
  setTimeout(() => {
    console.log('');
  }, time);
};
print(sentence);