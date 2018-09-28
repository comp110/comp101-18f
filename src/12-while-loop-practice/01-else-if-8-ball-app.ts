import { print, random, promptString } from "introcs";

export let main = async () => {

    let isPlaying = true;

    while (isPlaying) {
        let question = await promptString("Ask a Yes/No Question");
        let responseCode = random(0, 4);
        let response: string = "";
        if (responseCode === 0) {
            response = "Most definitely not.";
        } else {
            if (responseCode === 1) {
                response = "Don't count on it.";
            } else {
                if (responseCode === 2) {
                    response = "Reply hazy, try again.";
                } else {
                    if (responseCode === 3) {
                        response = "Without a doubt.";
                    } else {
                        response = "It is certain.";
                    }
                }
            }
        }
        print(response);
        isPlaying = await promptString("Keep playing?") === "yes";
    }

    print("Have a nice day!");


};

main();