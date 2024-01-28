import { Random } from "../../math/random.js";

export const IdeologiesAndBeliefsCollection = Object.freeze({
    ideologies_and_beliefs: [
        {
            description: "The character believes in the existence of a higher power to which they devote themselves and pray.",
            examples: [
                "Vishnu",
                "Jesus Christ",
                "Haile Selassie I",
            ]
        },
        {
            description: "The character holds the conviction that humanity can thrive without the influence of religions.",
            examples: [
                "Convicted Atheist",
                "Humanist",
                "Secularist"
            ],
        },
        {
            description: "The character's faith lies in the belief that science has all the answers. Choose a specific field of interest!",
            examples: [
                "Evolution",
                "Cryogenics",
                "Space Exploration"
            ],
        },
        {
            description: "The character places their faith in the concept of destiny.",
            examples: [
                "Karma",
                "Class System",
                "Superstitious"
            ],
        },
        {
            description: "The character is a member of a society or secret organization.",
            examples: [
                "Mason",
                "Women's Institute",
                "Anonymous"
            ],
        },
        {
            description: "The character believes in the existence of a societal evil that must be eradicated. What is this evil?",
            examples: [
                "Drugs",
                "Violence",
                "Racism"
            ],
        },
        {
            description: "The character believes in or follows something hidden or mystical.",
            examples: [
                "Astrology",
                "Spiritualism",
                "Tarot"
            ],
        },
        {
            description: "The character adheres to a political belief or ideology.",
            examples: [
                "Conservative",
                "Socialist",
                "Liberal"
            ],
        },
        {
            description: "The character adopts the motto 'Money is power, and I'll get as much as I can' as their own.",
            examples: [
                "Greedy",
                "Entrepreneur",
                "Ruthless"
            ],
        },
        {
            description: "The character is a dedicated activist or militant.",
            examples: [
                "Feminism",
                "Equal Rights",
                "Labor Power"
            ],
        },
        {
            description: "The character is passionate about preserving the environment and promoting sustainable practices.",
            examples: [
                "Eco-activist",
                "Nature Advocate",
                "Recycling Enthusiast"
            ],
        },
        {
            description: "The character embraces the philosophy of promoting diversity and inclusion in all aspects of life.",
            examples: [
                "Diversity Advocate",
                "Inclusion Promoter",
                "LGBTQ+ Ally"
            ],
        },
        {
            description: "The character is a champion of social justice and fights against inequality in all its forms.",
            examples: [
                "Vigilante",
                "Antiracist Activist",
                "Human Rights Defender"
            ],
        },
    ],

    getRandomIdeologyAndBelief: function () {
        return Random.getRandomArrayElement(this.ideologies_and_beliefs);
    },
});