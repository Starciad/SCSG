export const Random = Object.freeze({
    getRandomNumber: function (min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    },

    getRandomArrayElement: function (array) {
        return array[this.getRandomNumber(0, array.length - 1)];
    },
});