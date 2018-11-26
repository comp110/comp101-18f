import {
    Group,
    Rectangle,
    Line,
    Circle,
    Stroke,
    Color
} from "introcs/graphics";

export let scene = (): Group => {
    let shapes = new Group();

    // TODO #1: Add a Rectangle to be the "sky"

    // TODO #2: Add a sun
    
    // TODO #3: Assign fill colors to the sky and sun objects

    // TODO #4: Add a cloud

    return shapes;
};

export let cloud = (x: number, y: number): Group => {
    let shapes = new Group();

    let base = new Rectangle(30, 10, x, y);
    shapes.add(base);

    let left = new Circle(7, x, y + 3);
    shapes.add(left);

    let right = new Circle(5, x + 30, y + 5);
    shapes.add(right);

    let center = new Circle(12, x + 13, y - 2);
    shapes.add(center);

    let topRight = new Circle(5, x + 26, y - 2);
    shapes.add(topRight);

    // TODO #5: Change the Stroke of each shape

    return shapes;
};