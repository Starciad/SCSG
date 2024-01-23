export function updateCharacterSheetTable(characterInfos) {
    // General
    document.querySelector("#cs-general-first-name").innerHTML = characterInfos.firstName;
    document.querySelector("#cs-general-last-name").innerHTML = characterInfos.lastName;
    document.querySelector("#cs-general-age").innerHTML = characterInfos.age;
    document.querySelector("#cs-general-occupation").innerHTML = characterInfos.occupation;
    document.querySelector("#cs-general-sex").innerHTML = characterInfos.sex;
}