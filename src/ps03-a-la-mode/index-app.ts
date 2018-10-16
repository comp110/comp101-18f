/*
* 
* Author: 
* 
* ONYEN: 
* 
* UNC Honor Pledge: I certify that no unauthorized assistance has been received 
* or given in the completion of this work. I certify that I understand and 
* could now rewrite on my own, without assistance from course staff, 
* the problem set code I am submitting. 
*/

import { print } from "introcs";

export let main = async () => {

    let input = [1, 0, 1, 1, 2, 1];
    print("The input array is: ");
    print(input);

    print("The min value is: " + min(input));
    print("The maxIndex is: " + maxIndex(input));
    print("The max value is: " + max(input));
    print("The mode is: " + mode(input));

};

/**
 * min - Given an array of numbers, returns the smallest
 * element in the array. Empty arrays return 0.
 */
export let min = (a: number[]): number => {
    return 0;
};

/**
 * maxIndex - Given an array of numbers, returns the 
 * _index of_ the largest element in the array. When there
 * are multiple indices with the largest element, returns
 * the first index with it. Empty arrays return -1.
 */
export let maxIndex = (a: number[]): number => {
    return 0;
};

/**
 * max - Given an array of numbers, returns the largest
 * element in the array. Empty arrays return 0.
 */
export let max = (a: number[]): number => {
    return 0;
};

/**
 * mode - Given an array of numbers, returns the number
 * which occurs most frequently in the array. When multiple
 * numbers occur the same amount, returns the smallest.
 */
export let mode = (a: number[]): number => {
    return 0;
};

main();