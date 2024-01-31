// Vars
// General
let cs_general_name_first;
let cs_general_name_surname;
let cs_general_personal_age;
let cs_general_personal_birthday;
let cs_general_personal_sex;
let cs_general_personal_civil_status;
let cs_general_professional_occupation;
let cs_general_location_residence_country;
let cs_general_location_birth_country;

// Physical
let cs_physical_characteristics_height;
let cs_physical_characteristics_weight;
let cs_physical_blood_type;
let cs_physical_blood_rh_factor;
let cs_physical_body_type;

// Background
let cs_background_ideologies_beliefs_description;
let cs_background_ideologies_beliefs_examples;
let cs_background_significant_people_target;
let cs_background_significant_people_reason;
let cs_background_important_location;
let cs_background_dear_belongings;
let cs_background_characteristic;
let cs_background_phobias_collection;
let cs_background_manias_collection;

// Characteristics
let cs_characteristics_strength_title;
let cs_characteristics_constitution_title;
let cs_characteristics_dexterity_title;
let cs_characteristics_appearance_title;
let cs_characteristics_intelligence_title;

let cs_characteristics_strength_description;
let cs_characteristics_constitution_description;
let cs_characteristics_dexterity_description;
let cs_characteristics_appearance_description;
let cs_characteristics_intelligence_description;

// ======================================== //
// Main

export function SCSGQueryElements() {
    // General
    cs_general_name_first = document.querySelector("#cs-general-name-first");
    cs_general_name_surname = document.querySelector("#cs-general-name-surname");
    cs_general_personal_age = document.querySelector("#cs-general-personal-age");
    cs_general_personal_birthday = document.querySelector("#cs-general-personal-birthday");
    cs_general_personal_sex = document.querySelector("#cs-general-personal-sex");
    cs_general_personal_civil_status = document.querySelector("#cs-general-personal-civil-status");
    cs_general_professional_occupation = document.querySelector("#cs-general-professional-occupation");
    cs_general_location_residence_country = document.querySelector("#cs-general-location-residence-country");
    cs_general_location_birth_country = document.querySelector("#cs-general-location-birth-country");

    // Physical
    cs_physical_characteristics_height = document.querySelector("#cs-physical-characteristics-height");
    cs_physical_characteristics_weight = document.querySelector("#cs-physical-characteristics-weight");
    cs_physical_blood_type = document.querySelector("#cs-physical-blood-type");
    cs_physical_blood_rh_factor = document.querySelector("#cs-physical-blood-rh-factor");
    cs_physical_body_type = document.querySelector("#cs-physical-body-type");

    // Background
    cs_background_ideologies_beliefs_description = document.querySelector("#cs-background-ideologies-beliefs-description");
    cs_background_ideologies_beliefs_examples = document.querySelector("#cs-background-ideologies-beliefs-examples");
    cs_background_significant_people_target = document.querySelector("#cs-background-significant-people-target");
    cs_background_significant_people_reason = document.querySelector("#cs-background-significant-people-reason");
    cs_background_important_location = document.querySelector("#cs-background-important-location");
    cs_background_dear_belongings = document.querySelector("#cs-background-dear-belongings");
    cs_background_characteristic = document.querySelector("#cs-background-characteristic");
    cs_background_phobias_collection = document.querySelector("#cs-background-phobias-collection");
    cs_background_manias_collection = document.querySelector("#cs-background-manias-collection");

    // Characteristics
    cs_characteristics_strength_title = document.querySelector("#cs-characteristics-strength-title");
    cs_characteristics_constitution_title = document.querySelector("#cs-characteristics-constitution-title");
    cs_characteristics_dexterity_title = document.querySelector("#cs-characteristics-dexterity-title");
    cs_characteristics_appearance_title = document.querySelector("#cs-characteristics-appearance-title");
    cs_characteristics_intelligence_title = document.querySelector("#cs-characteristics-intelligence-title");

    cs_characteristics_strength_description = document.querySelector("#cs-characteristics-strength-description");
    cs_characteristics_constitution_description = document.querySelector("#cs-characteristics-constitution-description");
    cs_characteristics_dexterity_description = document.querySelector("#cs-characteristics-dexterity-description");
    cs_characteristics_appearance_description = document.querySelector("#cs-characteristics-appearance-description");
    cs_characteristics_intelligence_description = document.querySelector("#cs-characteristics-intelligence-description");
}

export function SCSGUpdater(characterInfos) {
    updateGeneral(characterInfos);
    updatePhysical(characterInfos);
    updateBackground(characterInfos);
    updateCharacteristics(characterInfos);
}

// ======================================== //
// Updates

function updateGeneral(characterInfos) {
    // Name
    cs_general_name_first.textContent = characterInfos.general.name.first;
    cs_general_name_surname.textContent = characterInfos.general.name.surname;

    // Personal
    cs_general_personal_age.textContent = characterInfos.general.personal.age;
    cs_general_personal_birthday.textContent = getFormattedDate(characterInfos.general.personal.birthday);
    cs_general_personal_sex.textContent = characterInfos.general.personal.sex;
    cs_general_personal_civil_status.textContent = characterInfos.general.personal.civil_status;

    // Professional
    cs_general_professional_occupation.textContent = characterInfos.general.professional.occupation;

    // Location
    cs_general_location_residence_country.textContent = characterInfos.general.location.residence_country.name;
    cs_general_location_birth_country.textContent = characterInfos.general.location.birth_country.name;
}

function updatePhysical(characterInfos) {
    // Characteristics
    cs_physical_characteristics_height.textContent = characterInfos.physical.characteristics.height;
    cs_physical_characteristics_weight.textContent = characterInfos.physical.characteristics.weight;

    // Blood
    cs_physical_blood_type.textContent = characterInfos.physical.blood.type;
    cs_physical_blood_rh_factor.textContent = characterInfos.physical.blood.rh_factor;

    // Body
    cs_physical_body_type.textContent = characterInfos.physical.body.type;
}

function updateBackground(characterInfos) {
    // Ideologies and Beliefs
    cs_background_ideologies_beliefs_description.textContent = characterInfos.background.ideologies_and_beliefs.description;
    cs_background_ideologies_beliefs_examples.replaceChildren();

    characterInfos.background.ideologies_and_beliefs.examples.forEach(example => {
        let listElement = document.createElement("li");
        listElement.textContent = example;

        cs_background_ideologies_beliefs_examples.appendChild(listElement);
    });

    // Significant People
    cs_background_significant_people_target.textContent = characterInfos.background.significant_people.target;
    cs_background_significant_people_reason.textContent = characterInfos.background.significant_people.reason;

    // Important Locations
    cs_background_important_location.textContent = characterInfos.background.important_locations.target;

    // Dear Belongings
    cs_background_dear_belongings.textContent = characterInfos.background.dear_belongings.target;

    // Characteristics
    cs_background_characteristic.textContent = characterInfos.background.characteristics.target;

    // Phobias
    createCollectionItems(characterInfos.background.phobias, cs_background_phobias_collection);

    // Manias
    createCollectionItems(characterInfos.background.manias, cs_background_manias_collection);
}

function updateCharacteristics(characterInfos) {
    cs_characteristics_strength_title.textContent = characterInfos.characteristics.strength.title;
    cs_characteristics_constitution_title.textContent = characterInfos.characteristics.constitution.title;
    cs_characteristics_dexterity_title.textContent = characterInfos.characteristics.dexterity.title;
    cs_characteristics_appearance_title.textContent = characterInfos.characteristics.appearance.title;
    cs_characteristics_intelligence_title.textContent = characterInfos.characteristics.intelligence.title;

    cs_characteristics_strength_description.textContent = characterInfos.characteristics.strength.description;
    cs_characteristics_constitution_description.textContent = characterInfos.characteristics.constitution.description;
    cs_characteristics_dexterity_description.textContent = characterInfos.characteristics.dexterity.description;
    cs_characteristics_appearance_description.textContent = characterInfos.characteristics.appearance.description;
    cs_characteristics_intelligence_description.textContent = characterInfos.characteristics.intelligence.description;
}

// ================================ //
// Utilities

function getFormattedDate(date) {
    return date.day.toString().padStart(2, '0') + "/" +
        date.month.toString().padStart(2, '0') + "/" +
        date.year + " (day/month/year)";
}

function createCollectionItems(collection, container) {
    container.replaceChildren();

    if (collection.length > 0) {
        collection.forEach(item => {
            let itemElement = document.createElement("div");
            let title = document.createElement("span");
            let description = document.createElement("span");

            itemElement.classList.add("app-item-square");
            title.classList.add("app-item-square-title");
            description.classList.add("app-item-square-description");

            itemElement.appendChild(title);
            itemElement.appendChild(description);

            title.textContent = `${item.name} (${item.intensity})`;
            description.textContent = item.description;

            container.appendChild(itemElement);
        });
    } else {
        let emptyItem = document.createElement("div");
        emptyItem.classList.add("app-item-square");

        emptyItem.textContent = "There are no items in the respective collection.";

        container.appendChild(emptyItem);
    }
}