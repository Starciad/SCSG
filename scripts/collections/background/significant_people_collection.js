import { Random } from "../../math/random.js";

export const SignificantPeopleCollection = Object.freeze({
  significantPeople: [
    "Parents (e.g., mother, father, stepmother).",
    "Grandparents (e.g., maternal grandmother, paternal grandfather).",
    "Sibling (e.g., brother, half-brother, stepsister).",
    "Son or daughter.",
    "Life partner (e.g., spouse, fiancé, lover).",
    "Childhood friend (e.g., classmate, neighbor, imaginary friend).",
    "A famous person. The character's idol or hero. They may have never even met (e.g., movie star, politician, musician)."
  ],

  significantPeopleReason: [
    "The character is indebted to them. How did they help? (e.g., financially, protected them in tough times, got them their first job).",
    "They taught something to the character. What? (e.g., love, courage, honesty).",
    "They give meaning to the character's life. How? (e.g., aspire to be like them, seek to be with them, want to make them happy).",
    "Your character harmed them in some way and seeks reconciliation. What did they do? (e.g., stole money from them, reported them to the police, refused to help when they were desperate).",
    "Shared experience. What? (e.g., went through tough times together, grew up together, served together in the war).",
    "Your character seeks to prove themselves to them. How? (e.g., getting a good job, finding a good spouse, entering a good university).",
    "Your character idolizes them (e.g., for their fame, for their beauty, for their work).",
    "A feeling of regret (e.g., your character should have died in their place, regretted something they said, didn't offer help when they had the chance).",
    "Your character wants to prove that they are better than them. What is their flaw? (e.g., lazy, drunkard, unloving).",
    "They betrayed and the character seeks revenge. What does the character blame them for? (e.g., death of a loved one, financial ruin of the character, marital breakup)."
  ],

  getRandomSignificantPeople: function () {
    return Random.getRandomArrayElement(this.significantPeople);
  },

  getRandomSignificantPeopleReason: function () {
    return Random.getRandomArrayElement(this.significantPeopleReason);
  },
});