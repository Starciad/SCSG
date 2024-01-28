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

// Appearance
import { SkinToneCollection } from "../../collections/appearance/skin_tone_collection.js";

// Math
import { Random } from "../../math/random.js";
import { FaceShapesCollection } from "../../collections/appearance/face_shapes_collection.js";
import { IntensityCollection } from "../../collections/special/intensity_collection.js";
import { BeardCollection } from "../../collections/appearance/beard_collection.js";
import { IdeologiesAndBeliefsCollection } from "../../collections/background/ideologies_and_beliefs_collection.js";
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

    //#region Appearance
    let char_appearance_skin_tone = appearanceGenerator.getRandomSkinTone();
    let char_appearance_face_shape = appearanceGenerator.getRandomFaceShape();
    let char_appearance_face_freckles = appearanceGenerator.getRandomFrecklesIntensity();
    let char_appearance_face_dimples = appearanceGenerator.getRandomDimplesIntensity();
    let char_appearance_face_moles = appearanceGenerator.getRandomMolesIntensity();
    let char_appearance_face_wrinkles = appearanceGenerator.getRandomWrinklesIntensity();
    let char_appearance_beard_type = appearanceGenerator.getRandomBeardType();
    //#endregion

    //#region Background
    let char_background_ideologies_and_beliefs = backgroundGenerator.getRandomIdeologyAndBelief();
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

        // Appearance
        appearance: {
            body: {
                skin_tone: char_appearance_skin_tone,
            },

            face: {
                shape: char_appearance_face_shape,

                characteristics: {
                    freckles: char_appearance_face_freckles,
                    dimples: char_appearance_face_dimples,
                    moles: char_appearance_face_moles,
                    wrinkles: char_appearance_face_wrinkles,
                },
            },

            beard: {
                type: char_appearance_beard_type,
            }
        },

        // Background
        background: {
            ideologies_and_beliefs: {
                description: char_background_ideologies_and_beliefs.description,
                examples: char_background_ideologies_and_beliefs.examples,
            },
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

const appearanceGenerator = Object.freeze({
    getRandomSkinTone: function () {
        return SkinToneCollection.getRandomSkinTone();
    },

    getRandomFaceShape: function () {
        return FaceShapesCollection.getRandomFaceShape();
    },

    getRandomFrecklesIntensity: function () {
        return IntensityCollection.getRandomIntensity();
    },

    getRandomDimplesIntensity: function () {
        return IntensityCollection.getRandomIntensity();
    },

    getRandomMolesIntensity: function () {
        return IntensityCollection.getRandomIntensity();
    },

    getRandomWrinklesIntensity: function () {
        return IntensityCollection.getRandomIntensity();
    },

    getRandomBeardType: function () {
        return BeardCollection.getRandomBeardType();
    },
});

const backgroundGenerator = Object.freeze({
    getRandomIdeologyAndBelief: function () {
        return IdeologiesAndBeliefsCollection.getRandomIdeologyAndBelief();
    }
});
//#endregion
