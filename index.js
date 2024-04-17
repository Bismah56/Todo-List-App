#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
let todoList = [];
let condition = true;
console.log(chalk.bold.magentaBright("\n \t Welcome to CodeWithBismah - Todo-List Application\n"));
while (condition) {
    let Options = await inquirer.prompt([
        {
            type: "list",
            name: "choice",
            message: "Choose an option:",
            choices: ["Add Task", "Update Task", "Delete Task", "View Todo-List", chalk.red("Exit")]
        }
    ]);
    if (Options.choice === "Add Task") {
        let todoAns = await inquirer.prompt([
            {
                type: "input",
                name: "Todo",
                message: chalk.greenBright("Enter your New Task: ")
            }
        ]);
        todoList.push(todoAns.Todo);
        console.log(chalk.rgb(160, 32, 240)(`\n'${todoAns.Todo}' added in Todo-List successfully.\n`));
    }
    else if (Options.choice === "Update Task") {
        console.log(chalk.bold.underline.rgb(245, 85, 74)("\nYour Todo-List is:\n"));
        todoList.forEach((val, idx) => {
            console.log(chalk.yellow(`${idx += 1}: ${val}`));
        });
        console.log("\n");
        let update = await inquirer.prompt([
            {
                type: "number",
                name: "index",
                message: "Enter the 'Index no.' of the task to be updated: "
            },
            {
                type: "input",
                name: "value",
                message: "Now enter the updated task: "
            }
        ]);
        todoList.splice(update.index - 1, 1, update.value);
        console.log(chalk.rgb(160, 32, 240)(`\nSuccessfully updated task at index ${update.index} to "${update.value}".[Check 'View Todo-List' for updated list]\n`));
    }
    else if (Options.choice === "Delete Task") {
        console.log(chalk.bold.underline.rgb(245, 85, 74)("\nYour Todo-List is:\n"));
        todoList.forEach((val, idx) => {
            console.log(chalk.yellow(`${idx += 1}: ${val}`));
        });
        console.log("\n");
        let Delete = await inquirer.prompt({
            type: "number",
            name: "index",
            message: "Enter the 'Index no.' of the task to be deleted: "
        });
        console.log(chalk.rgb(160, 32, 240)(`\n"${todoList[Delete.index - 1]}" task successfully deleted from Todo-List.[Check 'View Todo-List']\n`));
        todoList.splice(Delete.index - 1, 1);
    }
    else if (Options.choice === "View Todo-List") {
        console.log(chalk.magenta(("\n<<------------------>>\n")));
        console.log(chalk.bold.underline.rgb(245, 85, 74)("Your Todo-List is:\n"));
        todoList.forEach((val, idx) => {
            console.log(chalk.yellow(`${idx += 1}: ${val}`));
        });
        console.log(chalk.magenta("\n<<------------------>>\n"));
    }
    else if (Options.choice === chalk.red("Exit")) {
        condition = false;
    }
    ;
}
;
