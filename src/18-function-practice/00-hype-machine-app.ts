import { print, random } from "introcs";

export let main = async () => {
    // TODO:
    // #1) Call the hypePhrases function and store its result
    // #2) Call the randomElementIn function to pick a phrase at random
    // #3) Print the result

};

let randomElementIn = (a: string[]): string => {
    let index = random(0, a.length - 1);
    return a[index];
};

let hypePhrases = (): string[] => {
    let result = [
        "You're the best around!",
        "You deserve a raise!",
        "ilysm!"
    ];
    return result;
};

main();