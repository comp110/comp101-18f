import { print, promptNumber } from "introcs";

export let main = async () => {

    let a = await promptNumber("a");
    let b = await promptNumber("b");

    // TODO: call the max function and store its result in a variable
    
    // TODO: print the result

};

let max = (x: number, y: number): number => {
    if (x > y) {
        return x;
    } else {
        return y;
    }
};

main();