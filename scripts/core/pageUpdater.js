export function updateCharacterSheetTable(characterInfos) {
    // General
    document.querySelector("#cs-general-first-name").innerHTML = characterInfos.firstName;
    document.querySelector("#cs-general-last-name").innerHTML = characterInfos.lastName;
    document.querySelector("#cs-general-age").innerHTML = characterInfos.age;
}