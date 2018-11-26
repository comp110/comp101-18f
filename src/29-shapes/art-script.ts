import { SVG } from "introcs/graphics";

import { scene } from "./00-graphics";

/** Begin main program */
export let main = async () => {
    let canvas = new SVG("canvas");
    canvas.render(scene());
};

main();