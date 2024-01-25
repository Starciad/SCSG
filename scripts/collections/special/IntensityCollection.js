import { random } from "../../math/Random.js";

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
        return random.getRandomArrayElement(this.intensities);
    },
});