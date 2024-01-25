import { Random } from "../../math/random.js";

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
        return Random.getRandomArrayElement(this.skinTones);
    },
});