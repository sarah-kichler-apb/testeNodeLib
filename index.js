import chalk from 'chalk';
console.log(chalk.green('Hello world!'));

//desencadear métodos de texto, cor de fundo, negrito
console.log(chalk.yellow.bold("CAFÉ"));
//receber múltiplos argumentos
console.log(chalk.yellow.bgBlue('É ', 'BOM ', 'DEMAIS.'));
//Métodos aninhados
console.log(chalk.red("vermelho", chalk.underline.blue('azul')));
//Uso de templates e strings
console.log(`
CPU: ${chalk.red('90%')}
RAM: ${chalk.green('40%')}
DISK: ${chalk.yellow('70%')}
`);
