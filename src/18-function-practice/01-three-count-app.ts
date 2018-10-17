import { print } from "introcs";

export let main = async () => {

    let input = [0, 1, 2, 3, 3, 3, 4];
    print("Input:");
    print(input);

    print("Number of threes: " + countThrees(input));

};

/**
 * TODO: Correct the countThrees function. It should
 * return the total number of elements that are 3
 * in its array parameter.
 */
let countThrees = (numbers: number[]): number => {
    
    for (let i = 0; i < numbers.length; i++) {
        print(numbers[i]);
    }
    
    return 0;
};

main();