import { SCSGenerator } from "./core/dataGenerator.js";
import { buildControlPanel, buildDynamicAppMenu } from "./core/pageManager.js";

// Buttons
let SCSGGenerateButton = document.querySelector("#scsg-generate-button");
let SCSGMenuButton = document.querySelector("#scsg-aside-menu-button");

// Pages
let pageAside = document.querySelector(".page-aside");

// Builders
buildDynamicAppMenu();
buildControlPanel();

// Events
// SCSGGenerateButton.addEventListener('click', () => {
//     let nameStyleType = document.querySelector("#name-style-type").value;
//     let sexType = document.querySelector("#sex-type").value;
//     let ageRangeType = document.querySelector("#age-range-type").value;
// 
//     SCSGenerator(
//         nameStyleType,
//         sexType,
//         ageRangeType
//     );
// });
// 
// SCSGRepositoryButton.addEventListener('click', () => {
//     window.open("https://github.com/Starciad/SCSG.git", '_blank').focus();
// });
// 
// SCSGCreditsButton.addEventListener('click', () => {
//     window.location.href = "./about.html";
// });
// 
// SCSGAboutButton.addEventListener('click', () => {
//     window.location.href = "./credits.html";
// });

SCSGMenuButton.addEventListener('click', () => {
    pageAside.classList.toggle('hidden');
});