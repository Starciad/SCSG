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

// Appearance
let cs_appearance_body_skin_tone;
let cs_appearance_face_shape;
let cs_appearance_face_characteristics_freckles;
let cs_appearance_face_characteristics_dimples;
let cs_appearance_face_characteristics_moles;
let cs_appearance_face_characteristics_wrinkles;

// Background
let cs_background_ideologies_beliefs_description;
let cs_background_ideologies_beliefs_examples;
let cs_background_significant_people_target;
let cs_background_significant_people_reason;
let cs_background_important_location;
let cs_background_dear_belongings;
let cs_background_characteristic;
let cs_background_phobias_collection;

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

    // Appearance
    cs_appearance_body_skin_tone = document.querySelector("#cs-appearance-body-skin-tone");
    cs_appearance_face_shape = document.querySelector("#cs-appearance-face-shape");
    cs_appearance_face_characteristics_freckles = document.querySelector("#cs-appearance-face-characteristics-freckles");
    cs_appearance_face_characteristics_dimples = document.querySelector("#cs-appearance-face-characteristics-dimples");
    cs_appearance_face_characteristics_moles = document.querySelector("#cs-appearance-face-characteristics-moles");
    cs_appearance_face_characteristics_wrinkles = document.querySelector("#cs-appearance-face-characteristics-wrinkles");

    // Background
    cs_background_ideologies_beliefs_description = document.querySelector("#cs-background-ideologies-beliefs-description");
    cs_background_ideologies_beliefs_examples = document.querySelector("#cs-background-ideologies-beliefs-examples");
    cs_background_significant_people_target = document.querySelector("#cs-background-significant-people-target");
    cs_background_significant_people_reason = document.querySelector("#cs-background-significant-people-reason");
    cs_background_important_location = document.querySelector("#cs-background-important-location");
    cs_background_dear_belongings = document.querySelector("#cs-background-dear-belongings");
    cs_background_characteristic = document.querySelector("#cs-background-characteristic");
    cs_background_phobias_collection = document.querySelector("#cs-background-phobias-collection");
}

export function SCSGUpdater(characterInfos) {
    updateGeneral(characterInfos);
    updatePhysical(characterInfos);
    updateAppearance(characterInfos);
    updateBackground(characterInfos);
}

// ======================================== //
// Updates

function updateGeneral(characterInfos) {
    // Name
    cs_general_name_first.innerHTML = characterInfos.general.name.first;
    cs_general_name_surname.innerHTML = characterInfos.general.name.surname;

    // Personal
    cs_general_personal_age.innerHTML = characterInfos.general.personal.age;
    cs_general_personal_birthday.innerHTML = getFormattedDate(characterInfos.general.personal.birthday);
    cs_general_personal_sex.innerHTML = characterInfos.general.personal.sex;
    cs_general_personal_civil_status.innerHTML = characterInfos.general.personal.civil_status;

    // Professional
    cs_general_professional_occupation.innerHTML = characterInfos.general.professional.occupation;

    // Location
    cs_general_location_residence_country.innerHTML = characterInfos.general.location.residence_country.name;
    cs_general_location_birth_country.innerHTML = characterInfos.general.location.birth_country.name;
}

function updatePhysical(characterInfos) {
    // Characteristics
    cs_physical_characteristics_height.innerHTML = characterInfos.physical.characteristics.height;
    cs_physical_characteristics_weight.innerHTML = characterInfos.physical.characteristics.weight;

    // Blood
    cs_physical_blood_type.innerHTML = characterInfos.physical.blood.type;
    cs_physical_blood_rh_factor.innerHTML = characterInfos.physical.blood.rh_factor;

    // Body
    cs_physical_body_type.innerHTML = characterInfos.physical.body.type;
}

function updateAppearance(characterInfos) {
    // Body
    cs_appearance_body_skin_tone.innerHTML = characterInfos.appearance.body.skin_tone;

    // Face
    cs_appearance_face_shape.innerHTML = characterInfos.appearance.face.shape;
    cs_appearance_face_characteristics_freckles.innerHTML = characterInfos.appearance.face.characteristics.freckles;
    cs_appearance_face_characteristics_dimples.innerHTML = characterInfos.appearance.face.characteristics.dimples;
    cs_appearance_face_characteristics_moles.innerHTML = characterInfos.appearance.face.characteristics.moles;
    cs_appearance_face_characteristics_wrinkles.innerHTML = characterInfos.appearance.face.characteristics.wrinkles;
}

function updateBackground(characterInfos) {
    // Ideologies and Beliefs
    cs_background_ideologies_beliefs_description.innerHTML = characterInfos.background.ideologies_and_beliefs.description;
    cs_background_ideologies_beliefs_examples.replaceChildren();

    characterInfos.background.ideologies_and_beliefs.examples.forEach(example => {
        let listElement = document.createElement("li");
        listElement.innerHTML = example;

        cs_background_ideologies_beliefs_examples.appendChild(listElement);
    });

    // Significant People
    cs_background_significant_people_target.innerHTML = characterInfos.background.significant_people.target;
    cs_background_significant_people_reason.innerHTML = characterInfos.background.significant_people.reason;

    // Important Locations
    cs_background_important_location.innerHTML = characterInfos.background.important_locations.target;

    // Dear Belongings
    cs_background_dear_belongings.innerHTML = characterInfos.background.dear_belongings.target;

    // Characteristics
    cs_background_characteristic.innerHTML = characterInfos.background.characteristics.target;

    // Phobias
    cs_background_phobias_collection.replaceChildren();

    if (characterInfos.background.phobias.length > 0) {
        characterInfos.background.phobias.forEach(phobia => {
            let phobia_item = document.createElement("div");
            let title = document.createElement("span");
            let description = document.createElement("span");
            
            phobia_item.classList.add("app-item-square");
            title.classList.add("app-item-square-title");
            description.classList.add("app-item-square-description");
            
            phobia_item.appendChild(title);
            phobia_item.appendChild(description);
    
            title.innerHTML = `${phobia.name} (${phobia.intensity})`;
            description.innerHTML = phobia.description;
    
            cs_background_phobias_collection.appendChild(phobia_item);
        });
    }
    else {
        let empty_item = document.createElement("div");
        empty_item.classList.add("app-item-square");
        
        empty_item.innerHTML = "The character does not have phobias.";
        
        cs_background_phobias_collection.appendChild(empty_item);
    }
}

// ================================ //
// Utilities

function getFormattedDate(date) {
    return date.day.toString().padStart(2, '0') + "/" +
        date.month.toString().padStart(2, '0') + "/" +
        date.year + " (day/month/year)";
}