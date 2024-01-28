import { Random } from "../../math/random.js";

export const ImportantLocationsCollection = Object.freeze({
    locations: [
        "The character's place of learning (e.g., school, university, apprenticeship).",
        "The character's hometown (e.g., rural village, merchant town, big city).",
        "The place where the character first experienced love (e.g., a music concert, holiday trip, bomb shelter).",
        "A place for quiet contemplation (e.g., the library, walks on their countryside property, fishing spot).",
        "A place for socializing (e.g., gentlemen's club, local bar, uncle's house).",
        "A location related to the character's ideology/belief (e.g., parish church, Mecca, Stonehenge).",
        "The grave of a significant person. Who? (e.g., their father or mother, a child, a lover).",
        "The character's family home (e.g., a rural estate, a rented apartment, the orphanage where they were raised).",
        "The place where your character was happiest in their life (e.g., the park bench where the character had their first kiss, university).",
        "The character's workplace (e.g., the office, library, bank)."
    ],

    getRandomImportantLocation: function () {
        return Random.getRandomArrayElement(this.locations);
    },
});