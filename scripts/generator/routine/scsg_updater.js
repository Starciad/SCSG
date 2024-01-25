export function SCSGUpdater(characterInfos) {
    // General
    document.querySelector("#cs-general-first-name").innerHTML = characterInfos.general.first_name;
    document.querySelector("#cs-general-last-name").innerHTML = characterInfos.general.surname;
    document.querySelector("#cs-general-age").innerHTML = characterInfos.general.age;
    document.querySelector("#cs-general-occupation").innerHTML = characterInfos.general.occupation;
    document.querySelector("#cs-general-sex").innerHTML = characterInfos.general.sex;
    document.querySelector("#cs-general-residence-country").innerHTML = characterInfos.general.residence_country.name;
    document.querySelector("#cs-general-birth-country").innerHTML = characterInfos.general.birth_country.name;
    document.querySelector("#cs-general-civil-status").innerHTML = characterInfos.general.civil_status;
    document.querySelector("#cs-general-birth-date").innerHTML = getFormattedDate(characterInfos.general.birth_date);

    // Physical
    document.querySelector("#cs-physical-height").innerHTML = characterInfos.physical.height;
    document.querySelector("#cs-physical-weight").innerHTML = characterInfos.physical.weight;
    document.querySelector("#cs-physical-blood-type").innerHTML = characterInfos.physical.blood_type;
    document.querySelector("#cs-physical-blood-rh-factor").innerHTML = characterInfos.physical.rh_factor;
    document.querySelector("#cs-physical-body-type").innerHTML = characterInfos.physical.body_type;

    // Appearance
    document.querySelector("#cs-appearance-skin-tone").innerHTML = characterInfos.appearance.skin_tone;
    document.querySelector("#cs-appearance-face-shape").innerHTML = characterInfos.appearance.face.shape;
    document.querySelector("#cs-appearance-face-freckles").innerHTML = characterInfos.appearance.face.freckles;
    document.querySelector("#cs-appearance-face-dimples").innerHTML = characterInfos.appearance.face.dimples;
    document.querySelector("#cs-appearance-face-moles").innerHTML = characterInfos.appearance.face.moles;
    document.querySelector("#cs-appearance-face-wrinkles").innerHTML = characterInfos.appearance.face.wrinkles;
}

function getFormattedDate(date) {
    return date.day.toString().padStart(2, '0') + "/" +
        date.month.toString().padStart(2, '0') + "/" +
        date.year + " (day/month/year)";
}