const inquirer = require("inquirer");

const keyName = "selected";

module.exports = function(
    message = "请选择下面其中一项:",
    options = []
) {
    return inquirer
        .prompt([
            {
                type: 'list',
                name: keyName,
                message: message,
                choices: options
            }
        ])
        .then(answers => {
            return answers[keyName];
        });
}