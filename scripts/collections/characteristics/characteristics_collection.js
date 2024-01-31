export const CharacteristicsCollection = Object.freeze({
    strength: [
        {
            title: "Feeble",
            description: "The character lacks physical prowess, struggling with even basic physical tasks. Lifts light objects with difficulty, tires quickly during manual labor.",
            level: 1,
        },

        {
            title: "Average",
            description: "Possesses an average level of strength, able to handle everyday activities without much strain. Competent in basic physical tasks and manual labor.",
            level: 2,
        },

        {
            title: "Strong",
            description: "Above-average strength enables the character to handle heavy lifting and strenuous physical activities effortlessly. Well-suited for physically demanding tasks.",
            level: 3,
        },

        {
            title: "Mighty",
            description: "Exceptional strength surpasses the norm. Capable of feats of strength that impress others. Easily excels in physically demanding challenges.",
            level: 4,
        },

        {
            title: "Titanic",
            description: "Strength on a superhuman level. Capable of performing extraordinary feats of strength, bending metal, or lifting objects of immense weight. Commands attention and respect based on physical prowess.",
            level: 5,
        },
    ],

    constitution: [
        {
            title: "Frail",
            description: "The character has a weak constitution, prone to illness and fatigue. Endurance is limited, and recovery from injuries is slow.",
            level: 1,
        },

        {
            title: "Average",
            description: "Possesses a standard level of health and endurance. Tolerates physical strain reasonably well, but not particularly resilient to illnesses.",
            level: 2,
        },

        {
            title: "Robust",
            description: "Above-average constitution provides resistance to illnesses and a quicker recovery from injuries. Endurance allows for sustained physical activities.",
            level: 3,
        },

        {
            title: "Vigorous",
            description: "Exceptional health and stamina. Rarely falls ill, and injuries heal rapidly. Can endure prolonged physical activities without exhaustion.",
            level: 4,
        },

        {
            title: "Indomitable",
            description: "Remarkable constitution bordering on superhuman. Almost immune to illnesses, recovers rapidly from injuries, and displays exceptional endurance even in the face of extreme conditions.",
            level: 5,
        },
    ],

    dexterity: [
        {
            title: "Clumsy",
            description: "The character struggles with coordination, often tripping or fumbling with objects. Precision tasks are challenging, and agility is limited.",
            level: 1,
        },

        {
            title: "Average",
            description: "Possesses standard dexterity, able to perform everyday tasks without major issues. Coordination is satisfactory, but not exceptional.",
            level: 2,
        },

        {
            title: "Agile",
            description: "Above-average dexterity enables the character to perform precise tasks with ease. Graceful movements and quick reflexes characterize their actions.",
            level: 3,
        },

        {
            title: "Nimble",
            description: "Exceptional agility and coordination. Can execute complex maneuvers effortlessly. Quick reflexes allow for swift responses in challenging situations.",
            level: 4,
        },

        {
            title: "Ethereal",
            description: "Dexterity bordering on supernatural. Capable of performing awe-inspiring acrobatics and precise actions. Movements are fluid, and reflexes are almost preternatural.",
            level: 5,
        },
    ],

    appearance: [
        {
            title: "Unattractive",
            description: "The character's appearance is off-putting, with features that may repel others. Struggles to make a positive impression based on looks.",
            level: 1,
        },

        {
            title: "Average",
            description: "Possesses a standard, unremarkable appearance. Blends into crowds without attracting much attention based on looks alone.",
            level: 2,
        },

        {
            title: "Attractive",
            description: "Above-average attractiveness makes the character stand out positively. Draws attention and may receive compliments on their appearance.",
            level: 3,
        },

        {
            title: "Stunning",
            description: "Exceptional beauty or handsomeness turns heads wherever the character goes. Easily captivates with their looks, creating a memorable presence.",
            level: 4,
        },

        {
            title: "Enchanting",
            description: "Beauty or charm on a supernatural level. Mesmerizes those who behold them, leaving a lasting impression. Has the potential to be considered legendary in their allure.",
            level: 5,
        },
    ],

    intelligence: [
        {
            title: "Dim-witted",
            description: "The character struggles with understanding complex concepts and often requires explanations for simple matters. Intellectual challenges are daunting.",
            level: 1,
        },

        {
            title: "Average",
            description: "Possesses standard intelligence, capable of understanding and solving everyday problems. Learns at a moderate pace and grasps concepts adequately.",
            level: 2,
        },

        {
            title: "Smart",
            description: "Above-average intelligence allows the character to excel in intellectual pursuits. Quick learner and adept problem solver.",
            level: 3,
        },

        {
            title: "Genius",
            description: "Exceptional intelligence distinguishes the character as a prodigy. Grasps complex concepts effortlessly and excels in academic or intellectual endeavors.",
            level: 4,
        },

        {
            title: "Einsteinian",
            description: "Intellectual prowess on a superhuman level. Possesses a mind that operates at extraordinary speeds, solving intricate problems with ease. Contributions to academia or science may be groundbreaking.",
            level: 5,
        },
    ],

    getRandomStrengthCharacteristic: function (value) { return this.getRandomCharacteristic(this.strength, value); },
    getRandomConstitutionCharacteristic: function (value) { return this.getRandomCharacteristic(this.constitution, value); },
    getRandomDexterityCharacteristic: function (value) { return this.getRandomCharacteristic(this.dexterity, value); },
    getRandomAppearanceCharacteristic: function (value) { return this.getRandomCharacteristic(this.appearance, value); },
    getRandomIntelligenceCharacteristic: function (value) { return this.getRandomCharacteristic(this.intelligence, value); },

    getRandomCharacteristic: function (collection, value) {
        const thresholds = [20, 40, 60, 80];

        for (let i = 0; i < thresholds.length; i++) {
            if (value < thresholds[i]) {
                return collection[i];
            }
        }

        return collection[collection.length - 1];
    },
});