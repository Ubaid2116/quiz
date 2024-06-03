#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

console.log(
  chalk.bold.italic.bgMagentaBright(
    "\n\t🚀 Welcome to Muhammad Ubaid - TypeScript Quiz 💻..\t\n"
  )
);

const quiz: {
  question_1: string;
  question_2: string;
  question_3: string;
  question_4: string;
  question_5: string;
} = await inquirer.prompt([
  {
    type: "list",
    name: "question_1",
    message: "Q1. What is TypeScript?",
    choices: [
      "A superset of JavaScript",
      "A CSS preprocessor",
      "A version of Java",
      "A database query language",
    ],
  },
  {
    type: "list",
    name: "question_2",
    message: "Q2. Which file extension is used for TypeScript files?",
    choices: [".js", ".ts", ".jsx", ".tsx"],
  },
  {
    type: "list",
    name: "question_3",
    message:
      "Q3. What command is used to compile a TypeScript file to JavaScript?",
    choices: ["ts-compile", "tsc", "compile-ts", "js-compile"],
  },
  {
    type: "list",
    name: "question_4",
    message: "Q4. Which of the following is not a valid TypeScript data type?",
    choices: ["number", "boolean", "string", "object"],
  },
  {
    type: "list",
    name: "question_5",
    message:
      "Q5. Which feature of TypeScript allows you to define the shape of an object?",
    choices: ["interfaces", "classes", "enums", "functions"],
  },
]);

let score: number = 0;

switch (quiz.question_1) {
  case "A superset of JavaScript":
    console.log(chalk.green("1. Correct! 😊"));
    ++score;
    break;
  default:
    console.log(chalk.red("1. Incorrect! 🙁"));
}
switch (quiz.question_2) {
  case ".ts":
    console.log(chalk.green("2. Correct! 😊"));
    ++score;
    break;
  default:
    console.log(chalk.red("2. Incorrect! 🙁"));
}
switch (quiz.question_3) {
  case "tsc":
    console.log(chalk.green("3. Correct! 😊"));
    ++score;
    break;
  default:
    console.log(chalk.red("3. Incorrect! 🙁"));
}
switch (quiz.question_4) {
  case "object":
    console.log(chalk.green("4. Correct! 😊"));
    ++score;
    break;
  default:
    console.log(chalk.red("4. Incorrect! 🙁"));
}
switch (quiz.question_5) {
  case "interfaces":
    console.log(chalk.green("5. Correct! 😊"));
    ++score;
    break;
  default:
    console.log(chalk.red("5. Incorrect!"));
}
console.log(chalk.bgYellow.bold.italic(`\n\tYour score is ${score}/5 🎈.\t`));
