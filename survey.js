const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What\'s your name? Nicknames are also acceptable: ', (name) => {

  rl.question('What\'s an activity you like doing? ', (activity) => {

    rl.question('What do you listen to while doing that? ', (music) => {

      rl.question('Which meal is your favourite (eg: dinner, brunch, etc.) ', (meal) => {

        rl.question('What\'s your favourite thing to eat for that meal? ', (food) => {

          rl.question('Which sport is your absolute favourite? ', (sport) => {

            rl.question('What is your superpower? In a few words, tell us what you are amazing at! ', (superpower) => {

              console.log(`My name is ${name}, I enjoy ${activity} while listening to ${music}. My favourite meal is ${meal}, and my favourite food for that meal is ${food}. My favourite sport is ${sport}, and my secret superpower is ${superpower}.`);
              rl.close();

            });
          });
        });
      });
    });
  });
});




