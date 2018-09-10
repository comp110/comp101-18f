import { print, promptString, random } from "introcs";

export let main = async () => {

    print("Welcome to the Magic 8 Ball");

    let question = await promptString("What is your question?");

    let choice = random(0, 2);

    // TODO #1: Implement an if-else

};

main();