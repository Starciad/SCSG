export const CivilStatusCollection = Object.freeze({
    civilStatus: [
        "Single",
        "Married",
        "Divorced",
        "Widowed",
        "Separated"
    ],

    getRandomCivilStatus: function () {
        const randomIndex = Math.floor(Math.random() * this.civilStatus.length);
        return this.civilStatus[randomIndex];
    },
});