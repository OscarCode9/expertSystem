const readline = require('readline')
const util = require('util');
const colors = require('colors');

const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

rl.question[util.promisify.custom] = (arg) => {
  return new Promise((resolve) => {
    rl.question(arg, resolve);
  });
};

const questionPromise = util.promisify(rl.question);


async function main() {

  let programmingVar = false;
  let v1 = false;

  do {
    const answer = await questionPromise('¿Sabe programación? \nA)Si \nB)No \nR= '.green);
    if (answer.toLowerCase() === 'a') {
      programmingVar = true;
      v1 = false;
    } else if (answer.toLowerCase() === 'b') {
      programmingVar = false;
      v1 = false;
    } else {

      console.log('Escribe una respuesta correcta'.rainbow);
      v1 = true;
    }

  } while (v1);

  let algorithmVar = false;
  let p2 = false;

  do {
    const answer2 = await questionPromise('¿Sabes sobre Algoritmos? \nA)Si \nB)No \nR= '.yellow);

    if (answer2.toLowerCase() === 'a') {
      algorithmVar = true;
      p2 = false;
    } else if (answer2.toLowerCase() === 'b') {
      algorithmVar = false;
      p2 = false;
    } else {

      console.log('Escribe una respuesta correcta'.rainbow);
      p2 = true;
    }

  } while (p2);

  const rule1 = (programmingVar && algorithmVar);

  let htmlVar = false;
  let cssVar = false;

  let p3 = false;

  do {

    const answer3 = await questionPromise('¿Haz usado html5 y css? \nA)Si \nB)No \nR= '.green);

    if (answer3.toLowerCase() === 'a') {
      htmlVar = true;
      cssVar = true;
      p3 = false;
    } else if (answer3.toLowerCase() === 'b') {
      htmlVar = false;
      cssVar = false;
      p3 = false;
    } else {
      console.log('Escribe una respuesta correcta'.rainbow);
      p3 = true;
    }

  } while (p3);


  let reponsiveVar = false;
  let p4 = false;


  do {

    const answer4 = await questionPromise('¿Haz hecho diseño reponsivo con css? \nA)Si \nB)No \nR= '.yellow);

    if (answer4.toLowerCase() === 'a') {

      reponsiveVar = true;
      p4 = false;

    } else if (answer4.toLowerCase() === 'b') {

      reponsiveVar = false;
      p4 = false;

    } else {
      console.log('Escribe una respuesta correcta'.rainbow);
      p4 = true;
    }
  } while (p4);


  const rule2 = (htmlVar && cssVar && reponsiveVar);

  let javascriptVar = false;
  let p5 = false;


  do {

    const answer5 = await questionPromise('¿Haz escrito programas con javascripr? \nA)Si \nB)No \nR= '.red);

    if (answer5.toLowerCase() === 'a') {

      javascriptVar = true;
      p5 = false;

    } else if (answer5.toLowerCase() === 'b') {

      javascriptVar = false;
      p5 = false;

    } else {
      console.log('Escribe una respuesta correcta'.rainbow);
      p5 = true;
    }
  } while (p5);

  let domVar = false;
  let p6 = false;

  do {

    const answer6 = await questionPromise('¿Haz manipulado el DOM de html desde javascript? \nA)Si \nB)No \nR= '.red);

    if (answer6.toLowerCase() === 'a') {

      domVar = true;
      p6 = false;

    } else if (answer6.toLowerCase() === 'b') {

      domVar = false;
      p6 = false;

    } else {

      console.log('Escribe una respuesta correcta'.rainbow);
      p6 = true;

    }

  } while (p6);

  const rule3 = (javascriptVar && domVar);

  let emacscript6 = false;
  let p7 = false;

  do {
    const answer7 = await questionPromise('¿Conoces  emacscript 6? \nA)Si \nB)No \nR= '.red);

    if (answer7.toLowerCase() === 'a') {

      emacscript6 = true;
      p7 = false;

    } else if (answer7.toLowerCase() === 'b') {

      emacscript6 = false;
      p7 = false;

    } else {

      console.log('Escribe una respuesta correcta'.rainbow);
      p7 = true;

    }
  } while (p7);

  const rule4 = (emacscript6);

  let npmVar = false;
  let p8 = false;

  do {
    const answer8 = await questionPromise('¿Conoces  instalado modulos o librerias desde npm ? \nA)Si \nB)No \nR= '.green);

    if (answer8.toLowerCase() === 'a') {

      npmVar = true;
      p8 = false;

    } else if (answer8.toLowerCase() === 'b') {

      npmVar = false;
      p8 = false;

    } else {

      console.log('Escribe una respuesta correcta'.rainbow);
      p8 = true;

    }

  } while (p8);

  const rule5 = (npmVar);

  let boostrapVar = false;
  let p9 = false;

  do {

    const answer9 = await questionPromise('¿haz implementado boostrap? \nA)Si \nB)No \nR= '.green);

    if (answer9.toLowerCase() === 'a') {

      boostrapVar = true;
      p9 = false;

    } else if (answer9.toLowerCase() === 'b') {

      boostrapVar = false;
      p9 = false;

    } else {

      console.log('Escribe una respuesta correcta'.rainbow);
      p9 = true;

    }

  } while (p9);

  const rule6 = (boostrapVar);

  let frameworksWeb = false;
  let p10 = false;

  do {

    const answer10 = await questionPromise('¿haz trabajado con React o Vue o Angular? \nA)Si \nB)No \nR= '.green);

    if (answer10.toLowerCase() === 'a') {

      frameworksWeb = true;
      p10 = false;

    } else if (answer10.toLowerCase() === 'b') {

      frameworksWeb = false;
      p10 = false;

    } else {

      console.log('Escribe una respuesta correcta'.rainbow);
      p10 = true;

    }

  } while (p10);

  const rule7 = (frameworksWeb);

  if (rule1 && rule2 && rule3 && rule4 && rule5 && rule6 && rule7) {
    console.log('Este candidado  tiene todas las habilidades frontend necesarias'.blue)
  } else {
    console.log('Este candidado no  tiene todas las habilidades frontend necesarias'.bgRed)

  }

  rl.close();

}




(async () => {
  await main();
})()
