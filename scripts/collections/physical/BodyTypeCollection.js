import { random } from "../../math/Random.js";

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