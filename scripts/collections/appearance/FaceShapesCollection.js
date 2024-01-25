import { random } from "../../math/Random.js";

export const FaceShapesCollection = Object.freeze({
    faceShapes: [
        "Oval",
        "Round",
        "Oblong",
        "Square",
        "Triangle",
        "Diamond",
        "Heart"
    ],

    getRandomFaceShape: function () {
        return random.getRandomArrayElement(this.faceShapes);
    },
});