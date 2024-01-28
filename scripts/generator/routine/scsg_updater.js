export function SCSGUpdater(characterInfos) {
    updateGeneral(characterInfos);
    updatePhysical(characterInfos);
    updateAppearance(characterInfos);
    updateBackground(characterInfos);
}

function updateGeneral(characterInfos) {
    // Name
    document.querySelector("#cs-general-name-first").innerHTML = characterInfos.general.name.first;
    document.querySelector("#cs-general-name-surname").innerHTML = characterInfos.general.name.surname;

    // Personal
    document.querySelector("#cs-general-personal-age").innerHTML = characterInfos.general.personal.age;
    document.querySelector("#cs-general-personal-birthday").innerHTML = getFormattedDate(characterInfos.general.personal.birthday);
    document.querySelector("#cs-general-personal-sex").innerHTML = characterInfos.general.personal.sex;
    document.querySelector("#cs-general-personal-civil-status").innerHTML = characterInfos.general.personal.civil_status;

    // Professional
    document.querySelector("#cs-general-professional-occupation").innerHTML = characterInfos.general.professional.occupation;

    // Location
    document.querySelector("#cs-general-location-residence-country").innerHTML = characterInfos.general.location.residence_country.name;
    document.querySelector("#cs-general-location-birth-country").innerHTML = characterInfos.general.location.birth_country.name;
}

function updatePhysical(characterInfos) {
    // Characteristics
    document.querySelector("#cs-physical-characteristics-height").innerHTML = characterInfos.physical.characteristics.height;
    document.querySelector("#cs-physical-characteristics-weight").innerHTML = characterInfos.physical.characteristics.weight;

    // Blood
    document.querySelector("#cs-physical-blood-type").innerHTML = characterInfos.physical.blood.type;
    document.querySelector("#cs-physical-blood-rh-factor").innerHTML = characterInfos.physical.blood.rh_factor;

    // Body
    document.querySelector("#cs-physical-body-type").innerHTML = characterInfos.physical.body.type;
}

function updateAppearance(characterInfos) {
    // Body
    document.querySelector("#cs-appearance-body-skin-tone").innerHTML = characterInfos.appearance.body.skin_tone;

    // Face
    document.querySelector("#cs-appearance-face-shape").innerHTML = characterInfos.appearance.face.shape;
    document.querySelector("#cs-appearance-face-characteristics-freckles").innerHTML = characterInfos.appearance.face.characteristics.freckles;
    document.querySelector("#cs-appearance-face-characteristics-dimples").innerHTML = characterInfos.appearance.face.characteristics.dimples;
    document.querySelector("#cs-appearance-face-characteristics-moles").innerHTML = characterInfos.appearance.face.characteristics.moles;
    document.querySelector("#cs-appearance-face-characteristics-wrinkles").innerHTML = characterInfos.appearance.face.characteristics.wrinkles;
}

function updateBackground(characterInfos) {
    // Ideologies and Beliefs
    document.querySelector("#cs-background-ideologies-beliefs-description").innerHTML = characterInfos.background.ideologies_and_beliefs.description;
    let examplesList = document.querySelector("#cs-background-ideologies-beliefs-examples");
    examplesList.innerHTML = "";

    characterInfos.background.ideologies_and_beliefs.examples.forEach(example => {
        let listElement = document.createElement("li");
        listElement.innerHTML = example;

        examplesList.appendChild(listElement);
    });

    // Significant People
    document.querySelector("#cs-background-significant-people-target").innerHTML = characterInfos.background.significant_people.target;
    document.querySelector("#cs-background-significant-people-reason").innerHTML = characterInfos.background.significant_people.reason;
    
    // Important Locations
    document.querySelector("#cs-background-important-location").innerHTML = characterInfos.background.important_locations.target;
    
    // Dear Belongings
    document.querySelector("#cs-background-dear-belongings").innerHTML = characterInfos.background.dear_belongings.target;
}

// ================================ //
// Utilities

function getFormattedDate(date) {
    return date.day.toString().padStart(2, '0') + "/" +
        date.month.toString().padStart(2, '0') + "/" +
        date.year + " (day/month/year)";
}