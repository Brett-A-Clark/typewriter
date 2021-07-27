const sentence = "hello there from lighthouse labs";

let i = 0;

const returnValue = setInterval(() => {
  // console.log(sentence[i]);
  if ( i < sentence.length) {
    process.stdout.write(sentence[i]);
    i++;
    // console.log(returnValue);
  } else {
    clearInterval(returnValue)
    console.log("");
  }
}, 50);