
import inquirer from "inquirer";
import chalk from "chalk";
import {exit} from 'process';

let timer: number = 10;
const countDown = () => {
    setTimeout(() =>{
        if(timer >0){
            console.log(chalk.red(`Time remainig: "${timer} seconds"`));
            timer--;
            countDown();
        }else{
            console.log(chalk.green('Time is up!'));
            exit();
        }
    },1000);
};
const askUser = () => {
    inquirer.prompt({
        type: 'confirm',
        name: 'exit',
        message: 'Do you want to exit the timer?',
    })
    .then((answer) =>{
        if(answer.exit){
            exit();
        }else{
            countDown();
        }
    });
};


askUser();

