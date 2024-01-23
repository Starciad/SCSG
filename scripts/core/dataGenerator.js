import { EUANamesCollection } from "../collections/names/EUANamesCollection.js";
import { SCSGOccupationsCollection } from "../collections/occupations/SCSGOccupationsCollection.js";
import { random } from "../math/random.js";
import { updateCharacterSheetTable } from "./pageUpdater.js";

export function SCSGenerator(nameStyleType, sexType, ageRangeType) {
    let char_fullname = getRandomName(nameStyleType, sexType);
    let char_age = getRandomAge(ageRangeType);
    let char_occupation = getRandomOccupation();

    updateCharacterSheetTable({
        firstName: char_fullname.firstName,
        lastName: char_fullname.lastName,
        age: char_age,
        occupation: char_occupation
    });
}

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
    return SCSGOccupationsCollection.getRandomOccupation();
}