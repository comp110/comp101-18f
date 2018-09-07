import { print, promptNumber } from "introcs";

export let main = async () => {
    print("I'm thinking of a number...");

    let guess = await promptNumber("Guess:");

    print("Your guess was...");

    // TODO: Add an if-then statement

    print("Game over!");

};

main();