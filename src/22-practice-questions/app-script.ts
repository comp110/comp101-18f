import { print } from "introcs";

import {
    SVG,
    Group,
    Rectangle,
    Line,
    Circle,
    Stroke,
    Color
} from "introcs/graphics";

/** Global Variables */
let artboard = new SVG("artboard");
artboard.autoScale = true;

/** Begin main program */
export let main = async () => {
    let group = new Group();


    artboard.render(group);
};

main();