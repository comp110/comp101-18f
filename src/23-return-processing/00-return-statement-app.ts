import { print, promptNumber } from "introcs";

export let main = async () => {
    let a = await promptNumber("a");
    let b = await promptNumber("b");
    print("The max is...");
    print(max(a, b));
};

let max = (a: number, b: number): number => {
    return 0;
};

main();