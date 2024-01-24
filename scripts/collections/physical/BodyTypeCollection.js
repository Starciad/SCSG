import { random } from "../../math/random.js";

export const BodyTypeCollection = Object.freeze({
    bodyTypes: [
        "Ectomorph",
        "Mesomorph",
        "Endomorph"
    ],

    getRandomBodyType: function () {
        return random.getRandomArrayElement(this.bodyTypes);
    },
});