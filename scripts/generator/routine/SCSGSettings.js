export function SCSGGetSettings() {
    return {
        general: getGeneral(),
    };
}

function getGeneral() {
    let config_nameStyleType = document.querySelector("#name-style-type").value;
    let config_sexType = document.querySelector("#sex-type").value;
    let config_ageRangeType = document.querySelector("#age-range-type").value;

    return {
        nameStyleType: config_nameStyleType,
        sexType: config_sexType,
        ageRangeType: config_ageRangeType,
    };
}