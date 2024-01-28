import { Random } from "../../math/random.js";

export const BelovedBelongingsCollection = Object.freeze({
    belovedBelongings: [
        "An item connected to the character's highest skill (e.g., expensive suit, fake identity, brass knuckles).",
        "An item essential to their occupation (e.g., doctor's bag, car, lockpicks).",
        "A childhood memento (e.g., comics, pocketknife, lucky coin).",
        "A keepsake from someone who has passed away (e.g., jewelry, a photograph in their wallet, a letter).",
        "Something given to your character by the Significant Person (e.g., a ring, a diary, a map).",
        "The character's collection. What is it? (e.g., bus tickets, stuffed animals, music records).",
        "Something the character found but doesn't know what it is – they seek answers (e.g., a letter written in an unknown language found in a cabinet, a curious tube of unknown origin found among the belongings of the deceased father, a peculiar silver ball the character unearthed in their garden).",
        "A sports item (e.g., a cricket bat, autographed baseball, fishing rod).",
        "A weapon (e.g., service revolver, the character's old hunting rifle, the knife hidden in the boot).",
        "A pet (e.g., a dog, a cat, a turtle)."
    ],
  
    getRandomDarlingBelonging: function () {
        return Random.getRandomArrayElement(this.belovedBelongings);
    },
});