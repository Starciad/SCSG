export function updateCharacterSheetTable(characterInfos) {
    // General
    document.querySelector("#cs-general-first-name").innerHTML = characterInfos.firstName;
    document.querySelector("#cs-general-last-name").innerHTML = characterInfos.lastName;
    document.querySelector("#cs-general-age").innerHTML = characterInfos.age;
    document.querySelector("#cs-general-occupation").innerHTML = characterInfos.occupation;
    document.querySelector("#cs-general-sex").innerHTML = characterInfos.sex;
    document.querySelector("#cs-general-residence-country").innerHTML = characterInfos.residenceCountry.name;
    document.querySelector("#cs-general-birth-country").innerHTML = characterInfos.birthCountry.name;
    document.querySelector("#cs-general-civil-status").innerHTML = characterInfos.civilStatus;
    document.querySelector("#cs-general-birth-date").innerHTML = getFormattedDate(characterInfos.birthDate);
    
    // Physical
    document.querySelector("#cs-physical-height").innerHTML = characterInfos.height;
}

function getFormattedDate(date) {
    return date.day.toString().padStart(2, '0') + "/" +
        date.month.toString().padStart(2, '0') + "/" +
        date.year + " (day/month/year)";
}