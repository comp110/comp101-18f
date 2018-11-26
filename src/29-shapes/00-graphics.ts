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

    // TODO: Add a Rectangle to be the "background"
    let background = new Rectangle(100, 100);
    let skyBlue = new Color(0.529, 0.809, 0.922);
    background.fill = skyBlue;
    shapes.add(background);

    // TODO: Add a sun
    let sun = new Circle(15, 35, 45);
    sun.fill = new Color(0.99, 0.83, 0.25);
    sun.stroke = Stroke.NONE;
    shapes.add(sun);

    // TODO: Add a cloud
    shapes.add(cloud(35, 55));

    return shapes;
};

let cloud = (x: number, y: number): Group => {
    let shapes = new Group();

    let width = 30;
    let height = 10;

    let base = new Rectangle(width, height, x, y);
    shapes.add(base);

    let left = new Circle(7, x, y + 3);
    shapes.add(left);

    let right = new Circle(5, x + width, y + height / 2);
    shapes.add(right);

    let center = new Circle(12, x + width / 2 - 2, y - 2);
    shapes.add(center);

    let topRight = new Circle(5, x + width - 4, y - 2);
    shapes.add(topRight);

    // TODO: Reset the Stroke
    let none = new Stroke(Color.WHITE, 4);
    topRight.stroke = none;
    center.stroke = none;
    right.stroke = none;
    left.stroke = none;
    base.stroke = none;

    return shapes;
};