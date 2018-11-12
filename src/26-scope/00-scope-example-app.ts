import { print } from "introcs";

export let main = async () => {
   
    let localVarA = 1;
    let localVarB = 2;

    if (localVarB > 0) {
        // let localVarA = 10;
        print(localVarB);
    } else {
        print(localVarA);
    }

};

let f = (param: number): number => {
    // print(localVarA);
    return param + 1;
};
  
main();