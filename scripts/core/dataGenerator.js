import { CivilStatusCollection } from "../collections/CivilStatusCollection.js";
import { CountriesCollection } from "../collections/CountriesCollection.js";
import { EUANamesCollection } from "../collections/names/EUANamesCollection.js";
import { OccupationsCollection } from "../collections/OccupationsCollection.js";
import { random } from "../math/random.js";
import { updateCharacterSheetTable } from "./pageUpdater.js";

const ageBasedHeightRange = [
    { minAge: 0, maxAge: 12, minHeight: 100, maxHeight: 160 },
    { minAge: 13, maxAge: 18, minHeight: 150, maxHeight: 190 },
    { minAge: 19, maxAge: 30, minHeight: 160, maxHeight: 200 },
    { minAge: 31, maxAge: 50, minHeight: 150, maxHeight: 190 },
    { minAge: 51, maxAge: 100, minHeight: 140, maxHeight: 180 }
];

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
    const currentRange = ageBasedHeightRange.find(range => age >= range.minAge && age <= range.maxAge);
    const randomHeight = random.getRandomNumber(currentRange.minHeight, currentRange.maxHeight);

    return randomHeight;
}
//#endregion