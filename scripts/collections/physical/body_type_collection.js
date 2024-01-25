import { Random } from "../../math/random.js";

export const BodyTypeCollection = Object.freeze({
    bodyTypes: [
        "Ectomorph",
        "Mesomorph",
        "Endomorph"
    ],

    getRandomBodyType: function () {
        return Random.getRandomArrayElement(this.bodyTypes);
    },
});