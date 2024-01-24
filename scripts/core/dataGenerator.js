import { BloodTypeCollection } from "../collections/BloodTypeCollection.js";
import { CivilStatusCollection } from "../collections/CivilStatusCollection.js";
import { CountriesCollection } from "../collections/CountriesCollection.js";
import { HeightCollection } from "../collections/HeightCollection.js";
import { EUANamesCollection } from "../collections/names/EUANamesCollection.js";
import { OccupationsCollection } from "../collections/OccupationsCollection.js";
import { WeightCollection } from "../collections/WeightCollection.js";
import { random } from "../math/random.js";
import { updateCharacterSheetTable } from "./pageUpdater.js";

export function SCSGenerator(nameStyleType, sexType, ageRangeType) {
    // General
    let char_sex = getRandomSex(sexType);
    let char_fullname = getRandomName(nameStyleType, char_sex);
    let char_age = getRandomAge(ageRangeType);
    let char_occupation = getRandomOccupation();
    let char_residence_country = getRandomCountry();
    let char_birth_country = getRandomCountry();
    let char_civil_status = getRandomCivilStatus();
    let char_birth_date = getRandomBirthDate(char_age);

    // Physical
    let char_height = getRandomHeight(char_age);
    let char_weight = getRandomWeight(char_age);
    let char_blood_type = getRandomBloodType();
    let char_rh_factor = getRandomRhFactor();

    updateCharacterSheetTable({
        // General
        firstName: char_fullname.firstName,
        lastName: char_fullname.lastName,
        age: char_age,
        occupation: char_occupation,
        sex: char_sex.charAt(0).toUpperCase() + char_sex.slice(1),
        residenceCountry: char_residence_country,
        birthCountry: char_birth_country,
        civilStatus: char_civil_status,
        birthDate: char_birth_date,

        // Physical
        height: char_height,
        weight: char_weight,
        bloodType: char_blood_type,
        rhFactor: char_rh_factor
    });
}

//#region General
function getRandomName(nameStyleType, sexType) {
    let firstName;
    let lastName;

    switch (nameStyleType) {
        case "USA":
            if (sexType === "masculine") {
                firstName = EUANamesCollection.getRandomMaleName();
            } else if (sexType === "feminine") {
                firstName = EUANamesCollection.getRandomFemaleName();
            }
            break;

        default:
            break;
    }

    lastName = EUANamesCollection.getRandomLastName();

    return {
        firstName,
        lastName
    }
}

function getRandomAge(ageRangeType) {
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
}

function getRandomOccupation() {
    return OccupationsCollection.getRandomOccupation();
}

function getRandomSex(sexType) {
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
}

function getRandomCountry() {
    return CountriesCollection.getRandomCountry();
}

function getRandomCivilStatus() {
    return CivilStatusCollection.getRandomCivilStatus();
}

function getRandomBirthDate(currentAge) {
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
//#endregion

//#region Physical
function getRandomHeight(age) {
    return HeightCollection.getRandomHeight(age);
}

function getRandomWeight(age) {
    return WeightCollection.getRandomWeight(age);
}

function getRandomBloodType() {
    return BloodTypeCollection.getRandomBloodType();
}

function getRandomRhFactor() {
    return BloodTypeCollection.getRandomRhFactor();
}
//#endregion