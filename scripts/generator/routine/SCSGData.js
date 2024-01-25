//#region IMPORTS
// Names
import { EUANamesCollection } from "../../collections/names/EUANamesCollection.js";

// General
import { OccupationsCollection } from "../../collections/general/OccupationsCollection.js";
import { CivilStatusCollection } from "../../collections/general/CivilStatusCollection.js";
import { CountriesCollection } from "../../collections/general/CountriesCollection.js";

// Physical
import { BloodTypeCollection } from "../../collections/physical/BloodTypeCollection.js";
import { HeightCollection } from "../../collections/physical/HeightCollection.js";
import { WeightCollection } from "../../collections/physical/WeightCollection.js";
import { BodyTypeCollection } from "../../collections/physical/BodyTypeCollection.js";

// Appearance
import { SkinToneCollection } from "../../collections/appearance/SkinToneCollection.js";

// Math
import { random } from "../../math/random.js";
import { FaceShapesCollection } from "../../collections/appearance/FaceShapesCollection.js";
import { IntensityCollection } from "../../collections/special/IntensityCollection.js";
//#endregion

export function SCSGData(settings) {
    // General
    let char_general_sex = generalGenerator.getRandomSex(settings.general.sexType);
    let char_general_fullname = generalGenerator.getRandomName(settings.general.nameStyleType, char_general_sex);
    let char_general_age = generalGenerator.getRandomAge(settings.general.ageRangeType);
    let char_general_occupation = generalGenerator.getRandomOccupation();
    let char_general_residence_country = generalGenerator.getRandomCountry();
    let char_general_birth_country = generalGenerator.getRandomCountry();
    let char_general_civil_status = generalGenerator.getRandomCivilStatus();
    let char_general_birth_date = generalGenerator.getRandomBirthDate(char_general_age);

    // Physical
    let char_physical_height = physicalGenerator.getRandomHeight(char_general_age);
    let char_physical_weight = physicalGenerator.getRandomWeight(char_general_age);
    let char_physical_blood_type = physicalGenerator.getRandomBloodType();
    let char_physical_rh_factor = physicalGenerator.getRandomRhFactor();
    let char_physical_body_type = physicalGenerator.getRandomBodyType();

    // Appearance
    let char_appearance_skin_tone = appearanceGenerator.getRandomSkinTone();
    let char_appearance_face_shape = appearanceGenerator.getRandomFaceShape();
    let char_appearance_face_freckles = appearanceGenerator.getRandomFrecklesIntensity();
    let char_appearance_face_dimples = appearanceGenerator.getRandomDimplesIntensity();
    let char_appearance_face_moles = appearanceGenerator.getRandomMolesIntensity();
    let char_appearance_face_wrinkles = appearanceGenerator.getRandomWrinklesIntensity();

    return {
        // General
        general: {
            first_name: char_general_fullname.first_name,
            surname: char_general_fullname.surname,
            age: char_general_age,
            occupation: char_general_occupation,
            sex: char_general_sex.charAt(0).toUpperCase() + char_general_sex.slice(1),
            residence_country: char_general_residence_country,
            birth_country: char_general_birth_country,
            civil_status: char_general_civil_status,
            birth_date: char_general_birth_date,
        },

        // Physical
        physical: {
            height: char_physical_height,
            weight: char_physical_weight,
            blood_type: char_physical_blood_type,
            rh_factor: char_physical_rh_factor,
            body_type: char_physical_body_type,
        },

        // Appearance
        appearance: {
            skin_tone: char_appearance_skin_tone,

            face: {
                shape: char_appearance_face_shape,
                freckles: char_appearance_face_freckles,
                dimples: char_appearance_face_dimples,
                moles: char_appearance_face_moles,
                wrinkles: char_appearance_face_wrinkles,
            }
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
                return random.getRandomNumber(0, 100);

            case "child":
                return random.getRandomNumber(0, 12);

            case "teenager":
                return random.getRandomNumber(13, 19);

            case "youngAdult":
                return random.getRandomNumber(20, 29);

            case "adult":
                return random.getRandomNumber(30, 59);

            case "elderly":
                return random.getRandomNumber(60, 100);

            default:
                return random.getRandomNumber(0, 100);
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

    getRandomBirthDate: function (currentAge) {
        const currentYear = new Date().getFullYear();
        const birthYear = currentYear - currentAge;

        const birthMonth = random.getRandomNumber(1, 12);
        const maxDaysInMonth = new Date(birthYear, birthMonth, 0).getDate();
        const birthDay = random.getRandomNumber(1, maxDaysInMonth);

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
});
//#endregion
