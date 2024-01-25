import { random } from "../../math/Random.js";

export const CivilStatusCollection = Object.freeze({
    civilStatus: [
        "Single",
        "Married",
        "Divorced",
        "Widowed",
        "Separated"
    ],

    getRandomCivilStatus: function () {
        return random.getRandomArrayElement(this.civilStatus);
    },
});