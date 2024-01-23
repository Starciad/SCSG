import { SCSGenerator } from "./core/dataGenerator.js";

// Elements
let SCSGGenerateButton = document.querySelector("#scsg-generate-button");

// Events
SCSGGenerateButton.addEventListener('click', () => {
    let nameStyleType = document.querySelector("#name-style-type").value;
    let sexType = document.querySelector("#sex-type").value;
    let ageRangeType = document.querySelector("#age-range-type").value;

    SCSGenerator(
        nameStyleType,
        sexType,
        ageRangeType
    );
});