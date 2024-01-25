import { random } from "../../math/Random.js";

export const HeightCollection = Object.freeze({
    ageBasedHeightRange: [
        { minAge: 0, maxAge: 12, minHeight: 100, maxHeight: 160 },
        { minAge: 13, maxAge: 18, minHeight: 150, maxHeight: 190 },
        { minAge: 19, maxAge: 30, minHeight: 160, maxHeight: 200 },
        { minAge: 31, maxAge: 50, minHeight: 150, maxHeight: 190 },
        { minAge: 51, maxAge: 100, minHeight: 140, maxHeight: 180 }
    ],

    getRandomHeight: function (age) {
        const currentRange = this.ageBasedHeightRange.find(range => age >= range.minAge && age <= range.maxAge);
        const randomHeight = random.getRandomNumber(currentRange.minHeight, currentRange.maxHeight);
    
        return randomHeight;
    },
});