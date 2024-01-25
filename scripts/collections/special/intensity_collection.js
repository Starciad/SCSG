import { Random } from "../../math/random.js";

export const IntensityCollection = Object.freeze({
    intensities: [
        "None",
        "Light",
        "Low",
        "Moderate",
        "Significant",
        "High",
        "Extreme",
        "Exaggerated"
    ],

    getRandomIntensity: function () {
        return Random.getRandomArrayElement(this.intensities);
    },
});