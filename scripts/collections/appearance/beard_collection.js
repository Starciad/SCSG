import { Random } from "../../math/random.js";

export const BeardCollection = Object.freeze({
    beardTypes: [
        "Old Dutch",
        "Sideburns",
        "Jawline beard",
        "Chinstrap",
        "Chin curtain",
        "Brett",
        "Neckbeard",
        "Circle beard",
        "Designer stubble",
        "Sea captain",
        "Goatee",
        "Junco",
        "Meg",
        "Van Dyke",
        "Monkey tail",
        "Hollywoodian",
        "Reed",
        "Royale",
        "Verdi",
        "Muslim beard",
        "Soul patch",
        "Glitter beard",
        "Hulihee",
        "Friendly mutton chops",
        "Stashburns or the Lemmy",
        "Closed or Tied beard",
        "Oakley beard"
      ],

    getRandomBeardType: function () {
        return Random.getRandomArrayElement(this.beardTypes);
    },
});