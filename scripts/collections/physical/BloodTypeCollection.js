import { Random } from "../../math/Random.js";

export const BloodTypeCollection = Object.freeze({
    bloodTypes: ["A", "B", "AB", "O"],
    rhFactors: ["Positive", "Negative"],

    getRandomBloodType: function () {
        return Random.getRandomArrayElement(this.bloodTypes);
    },

    getRandomRhFactor: function () {
        return Random.getRandomArrayElement(this.rhFactors);
    },
});