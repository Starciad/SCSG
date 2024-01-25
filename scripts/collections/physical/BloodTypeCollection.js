import { random } from "../../math/random.js";

export const BloodTypeCollection = Object.freeze({
    bloodTypes: ["A", "B", "AB", "O"],
    rhFactors: ["+", "-"],

    getRandomBloodType: function () {
        return random.getRandomArrayElement(this.bloodTypes);
    },

    getRandomRhFactor: function () {
        return random.getRandomArrayElement(this.rhFactors);
    },
});