import { EUANamesCollection } from "../collections/names/EUANamesCollection.js";
import { random } from "../math/random.js";

export function SCSGenerator(nameStyleType, sexType, ageRangeType) {
    let char_fullname = getRandomName(nameStyleType, sexType);
    let char_age = getRandomAge(ageRangeType);
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
            return random.getRandomNumber(1, 12);

        case "teenager":
            return random.getRandomNumber(13, 19);

        case "youngAdult":
            return random.getRandomNumber(20, 35);

        case "adult":
            return random.getRandomNumber(36, 60);

        case "elderly":
            return random.getRandomNumber(61, 100);

        default:
            return random.getRandomNumber(0, 100);
    }
}
