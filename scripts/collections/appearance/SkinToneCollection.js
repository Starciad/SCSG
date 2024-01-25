import { random } from "../../math/Random.js";

export const SkinToneCollection = Object.freeze({
    skinTones: [
        "Light",
        "Fair",
        "Medium",
        "Olive",
        "Tan",
        "Black"
    ],

    getRandomSkinTone: function () {
        return random.getRandomArrayElement(this.skinTones);
    },
});