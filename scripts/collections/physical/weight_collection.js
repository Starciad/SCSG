import { Random } from "../../math/random.js";

export const WeightCollection = Object.freeze({
    weightRangeBasedOnAge: [
        { minAge: 0, maxAge: 12, minWeight: 20, maxWeight: 40 },
        { minAge: 13, maxAge: 18, minWeight: 45, maxWeight: 70 },
        { minAge: 19, maxAge: 30, minWeight: 50, maxWeight: 80 },
        { minAge: 31, maxAge: 50, minWeight: 45, maxWeight: 75 },
        { minAge: 51, maxAge: 100, minWeight: 40, maxWeight: 70 }
    ],

    getRandomWeight: function (age) {
        const currentRange = this.weightRangeBasedOnAge.find(range => age >= range.minAge && age <= range.maxAge);
        const randomWeight = Random.getRandomNumber(currentRange.minWeight, currentRange.maxWeight);
        
        return randomWeight;
    },
});