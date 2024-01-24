import { SCSGenerator } from "./core/dataGenerator.js";

// Elements
let SCSGGenerateButton = document.querySelector("#scsg-generate-button");

let SCSGRepositoryButton = document.querySelector("#scsg-repository-button");
let SCSGCreditsButton = document.querySelector("#scsg-credits-button");
let SCSGAboutButton = document.querySelector("#scsg-about-button");

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

SCSGRepositoryButton.addEventListener('click', () => {
    window.open("https://github.com/Starciad/SCSG.git", '_blank').focus();
});

SCSGCreditsButton.addEventListener('click', () => {
    window.location.href = "./about.html";
});

SCSGAboutButton.addEventListener('click', () => {
    window.location.href = "./credits.html";
});