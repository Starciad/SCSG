import { Random } from "../../math/random.js";

export const BackgroundCharacteristicsCollection = Object.freeze({
    characteristics: [
        "Generous (e.g., generous with tips, always helps those in need, philanthropist).",
        "Good with Animals (e.g., loves cats, grew up on a farm, good with horses).",
        "Dreamer (e.g., travels to the moon, visionary, highly creative).",
        "Hedonist (e.g., life of the party, fun drunk, 'live fast, die young').",
        "Gambler and thrill-seeker (e.g., poker player, tries everything, lives on the edge).",
        "Good Cook (e.g., bakes wonderful cakes, can make a meal with almost nothing, refined palate).",
        "Charming (e.g., charming voice, enchanting eyes).",
        "Loyal (e.g., stands by friends, never breaks a promise, would die for what they believe in).",
        "Good Reputation (e.g., the best speaker at country galas, the most pious of men, fears no danger).",
        "Ambitious (e.g., achieving a goal, becoming the boss, having it all).",
    ],    

    getRandomCharacteristic: function () {
        return Random.getRandomArrayElement(this.characteristics);
    },
});