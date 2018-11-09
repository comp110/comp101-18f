import { print, csvToArray } from "introcs";

class Game {
    date: string = "";
    opponent: string = "";
    outcome: string = "";
    points: number = 0;
    fouls: number = 0;
}

export let main = async () => {
    /* ... more code to initialize values variable ... */
    let games: Game[] = await csvToArray("joel-berry-ii.csv", Game);
    
    print("Total Points:");
    // TODO #2: Call totalPoints and print its return value

    print("Average Points:");
    // TODO #4: Call averagePoints and print its return value

    print("Max Points: ");
    // TODO #6: Call maxPoints and print its return value

};

// TODO #1 - Setup a function skeleton for totalPoints

// TODO #3 - Setup a function skeleton for averagePoints

// TODO #5 - Setup a function skeleton for maxPoints
