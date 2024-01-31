//#region IMPORTS
// Names
import { EUANamesCollection } from "../../collections/names/eua_names_collection.js";

// General
import { OccupationsCollection } from "../../collections/general/occupations_collection.js";
import { CivilStatusCollection } from "../../collections/general/civil_status_collection.js";
import { CountriesCollection } from "../../collections/general/countries_collection.js";

// Physical
import { BloodTypeCollection } from "../../collections/physical/blood_type_collection.js";
import { HeightCollection } from "../../collections/physical/height_collection.js";
import { WeightCollection } from "../../collections/physical/weight_collection.js";
import { BodyTypeCollection } from "../../collections/physical/body_type_collection.js";

// Background
import { IdeologiesAndBeliefsCollection } from "../../collections/background/ideologies_and_beliefs_collection.js";
import { SignificantPeopleCollection } from "../../collections/background/significant_people_collection.js";
import { ImportantLocationsCollection } from "../../collections/background/important_locations_collection.js";
import { PhobiasCollection } from "../../collections/background/phobias_collection.js";
import { ManiasCollection } from "../../collections/background/manias_collection.js";
import { BackgroundCharacteristicsCollection } from "../../collections/background/characteristics_collection.js";
import { BelovedBelongingsCollection } from "../../collections/background/beloved_belongings_collection.js";

// Characteristics
import { CharacteristicsCollection } from "../../collections/characteristics/characteristics_collection.js";

// Special
import { IntensityCollection } from "../../collections/special/intensity_collection.js";

// Math
import { Random } from "../../math/random.js";

//#endregion

export function SCSGData(settings) {
    //#region General
    let char_general_personal_sex = generalGenerator.getRandomSex(settings.general.sexType);
    let char_general_name_fullname = generalGenerator.getRandomName(settings.general.nameStyleType, char_general_personal_sex);
    let char_general_personal_age = generalGenerator.getRandomAge(settings.general.ageRangeType);
    let char_general_personal_birthday = generalGenerator.getRandomBirthday(char_general_personal_age);
    let char_general_personal_civil_status = generalGenerator.getRandomCivilStatus();
    let char_general_professional_occupation = generalGenerator.getRandomOccupation();
    let char_general_location_residence_country = generalGenerator.getRandomCountry();
    let char_general_location_birth_country = generalGenerator.getRandomCountry();
    //#endregion

    //#region Physical
    let char_physical_characteristics_height = physicalGenerator.getRandomHeight(char_general_personal_age);
    let char_physical_characteristics_weight = physicalGenerator.getRandomWeight(char_general_personal_age);
    let char_physical_blood_type = physicalGenerator.getRandomBloodType();
    let char_physical_blood_rh_factor = physicalGenerator.getRandomRhFactor();
    let char_physical_body_type = physicalGenerator.getRandomBodyType();
    //#endregion

    //#region Background
    let char_background_ideologies_and_beliefs = backgroundGenerator.getRandomIdeologyAndBelief();
    let char_background_significant_people = backgroundGenerator.getRandomSignificantPeople();
    let char_background_important_location = backgroundGenerator.getRandomImportantLocation();
    let char_background_dear_belongings = backgroundGenerator.getRandomDarlingBelonging();
    let char_background_characteristic = backgroundGenerator.getRandomCharacteristic();
    let char_background_phobias = backgroundGenerator.getRandomPhobias();
    let char_background_manias = backgroundGenerator.getRandomManias();
    //#endregion

    //#region Characteristics
    let char_characteristics_strength = characteristicsGenerator.getRandomStrengthCharacteristic();
    let char_characteristics_constitution = characteristicsGenerator.getRandomConstitutionCharacteristic();
    let char_characteristics_dexterity = characteristicsGenerator.getRandomDexterityCharacteristic();
    let char_characteristics_appearance = characteristicsGenerator.getRandomAppearanceCharacteristic();
    let char_characteristics_intelligence = characteristicsGenerator.getRandomIntelligenceCharacteristic();
    //#endregion

    return {
        // General
        general: {
            name: {
                first: char_general_name_fullname.first_name,
                surname: char_general_name_fullname.surname,
            },
            
            personal: {
                age: char_general_personal_age,
                birthday: char_general_personal_birthday,
                sex: char_general_personal_sex.charAt(0).toUpperCase() + char_general_personal_sex.slice(1),
                civil_status: char_general_personal_civil_status,
            },
            
            professional: {
                occupation: char_general_professional_occupation,
            },
            
            location: {
                residence_country: char_general_location_residence_country,
                birth_country: char_general_location_birth_country,
            },
        },

        // Physical
        physical: {
            characteristics: {
                height: char_physical_characteristics_height,
                weight: char_physical_characteristics_weight,
            },

            blood: {
                type: char_physical_blood_type,
                rh_factor: char_physical_blood_rh_factor,
            },

            body: {
                type: char_physical_body_type,
            },
        },

        // Background
        background: {
            ideologies_and_beliefs: {
                description: char_background_ideologies_and_beliefs.description,
                examples: char_background_ideologies_and_beliefs.examples,
            },

            significant_people: {
                target: char_background_significant_people.target,
                reason: char_background_significant_people.reason
            },

            important_locations: {
                target: char_background_important_location
            },

            dear_belongings: {
                target: char_background_dear_belongings
            },

            characteristics: {
                target: char_background_characteristic
            },

            phobias: char_background_phobias,
            manias: char_background_manias,
        },

        // Characteristics
        characteristics: {
            strength: char_characteristics_strength,
            constitution: char_characteristics_constitution,
            dexterity: char_characteristics_dexterity,
            appearance: char_characteristics_appearance,
            intelligence: char_characteristics_intelligence,
        },
    };
}


//#region Generators
const generalGenerator = Object.freeze({

    getRandomName: function (nameStyleType, sexType) {
        let first_name = "";
        let surname = "";

        switch (nameStyleType) {
            case "USA":
                if (sexType === "masculine") {
                    first_name = EUANamesCollection.getRandomMasculineName();
                } else if (sexType === "feminine") {
                    first_name = EUANamesCollection.getRandomFeminineName();
                }
                break;

            default:
                break;
        }

        surname = EUANamesCollection.getRandomSurname();

        return {
            first_name,
            surname
        }
    },

    getRandomAge: function (ageRangeType) {
        switch (ageRangeType) {
            case "random":
                return Random.getRandomNumber(0, 100);

            case "child":
                return Random.getRandomNumber(0, 12);

            case "teenager":
                return Random.getRandomNumber(13, 19);

            case "youngAdult":
                return Random.getRandomNumber(20, 29);

            case "adult":
                return Random.getRandomNumber(30, 59);

            case "elderly":
                return Random.getRandomNumber(60, 100);

            default:
                return Random.getRandomNumber(0, 100);
        }
    },

    getRandomOccupation: function () {
        return OccupationsCollection.getRandomOccupation();
    },

    getRandomSex: function (sexType) {
        if (sexType === "random") {
            if (Math.random() < 0.5) {
                return "masculine";
            }
            else {
                return "feminine";
            }
        }
        else {
            return sexType;
        }
    },

    getRandomCountry: function () {
        return CountriesCollection.getRandomCountry();
    },

    getRandomCivilStatus: function () {
        return CivilStatusCollection.getRandomCivilStatus();
    },

    getRandomBirthday: function (currentAge) {
        const currentYear = new Date().getFullYear();
        const birthYear = currentYear - currentAge;

        const birthMonth = Random.getRandomNumber(1, 12);
        const maxDaysInMonth = new Date(birthYear, birthMonth, 0).getDate();
        const birthDay = Random.getRandomNumber(1, maxDaysInMonth);

        return {
            year: birthYear,
            month: birthMonth,
            day: birthDay
        };
    }
});

const physicalGenerator = Object.freeze({
    getRandomHeight: function (age) {
        return HeightCollection.getRandomHeight(age);
    },

    getRandomWeight: function (age) {
        return WeightCollection.getRandomWeight(age);
    },

    getRandomBloodType: function () {
        return BloodTypeCollection.getRandomBloodType();
    },

    getRandomRhFactor: function () {
        return BloodTypeCollection.getRandomRhFactor();
    },

    getRandomBodyType: function () {
        return BodyTypeCollection.getRandomBodyType();
    }
});

const backgroundGenerator = Object.freeze({
    getRandomIdeologyAndBelief: function () {
        return IdeologiesAndBeliefsCollection.getRandomIdeologyAndBelief();
    },

    getRandomSignificantPeople: function () {
        return {
            target: SignificantPeopleCollection.getRandomSignificantPeople(),
            reason: SignificantPeopleCollection.getRandomSignificantPeopleReason(),
        };
    },

    getRandomImportantLocation: function () {
        return ImportantLocationsCollection.getRandomImportantLocation();
    },

    getRandomDarlingBelonging: function () {
        return BelovedBelongingsCollection.getRandomDarlingBelonging();
    },

    getRandomCharacteristic: function () {
        return BackgroundCharacteristicsCollection.getRandomCharacteristic();
    },

    getRandomPhobias: function () {
        return this.getRandomItems(PhobiasCollection.phobias, Random.getRandomNumber(0, 5));
    },
    
    getRandomManias: function () {
        return this.getRandomItems(ManiasCollection.manias, Random.getRandomNumber(0, 5));
    },

    // Utilities
    getRandomItems: function(collection, count) {
        let items = new Set();
    
        while (items.size < count) {
            let selectedItem = Random.getRandomArrayElement(collection);
            items.add(selectedItem);
        }
    
        return Array.from(items).map(item => {
            let intensitySelected;
    
            do {
                intensitySelected = IntensityCollection.getRandomIntensity();
            } while (intensitySelected === "None");
    
            return {
                name: item.name,
                description: item.description,
                intensity: intensitySelected
            };
        });
    }
});

const characteristicsGenerator = Object.freeze({
    getRandomStrengthCharacteristic: function () {
        return CharacteristicsCollection.getRandomStrengthCharacteristic(this.getRandomPoints());
    },

    getRandomConstitutionCharacteristic: function () {
        return CharacteristicsCollection.getRandomConstitutionCharacteristic(this.getRandomPoints());
    },

    getRandomDexterityCharacteristic: function () {
        return CharacteristicsCollection.getRandomDexterityCharacteristic(this.getRandomPoints());
    },

    getRandomAppearanceCharacteristic: function () {
        return CharacteristicsCollection.getRandomAppearanceCharacteristic(this.getRandomPoints());
    },

    getRandomIntelligenceCharacteristic: function () {
        return CharacteristicsCollection.getRandomIntelligenceCharacteristic(this.getRandomPoints());
    },

    getRandomPoints: function () {
        return (Random.getRandomNumber(1, 6) + Random.getRandomNumber(1, 6) + Random.getRandomNumber(1, 6)) * 5;
    }
});
//#endregion
