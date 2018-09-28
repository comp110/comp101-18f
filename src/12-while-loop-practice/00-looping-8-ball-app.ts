import { print, random, promptString } from "introcs";

export let main = async () => {


    // TODO #0: start a while (true) loop here...

    // TODO #2: ensure all of the following code inside the repeat block
    // and indent it by selecting all lines and pressing Tab.
    let question = await promptString("Ask a Yes/No Question");
    let responseCode = random(0, 2);
    let response: string = "";
    if (responseCode === 0) {
        response = "Most definitely not.";
    } else {
        if (responseCode === 1) {
            response = "Ask again later.";
        } else {
            response = "It is certain.";
        }
    }
    print(response);

    // TODO #1: end the while loop here with a closing curly brace

};

main();