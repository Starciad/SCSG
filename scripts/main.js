import { buildControlPanel, buildDynamicAppMenu } from "./managers/PageManager.js";
import { SCSGInitialize } from "./generator/SCSGMain.js";

// ==================================== //
// Initializers

function InitializeBuilders() {
    buildDynamicAppMenu();
    buildControlPanel();

}

function InitializeElements() {
    // Query elements
    let SCSGAsideMenuButton = document.querySelector("#scsg-aside-menu-button");
    let githubRepositoryButton = document.querySelector("#gh-repo-button");
    let creditsStarciadButton = document.querySelector("#credits-btn-starciad");
    let creditsIgorUPButton = document.querySelector("#credits-btn-igorup");
    let creditsInsanyaButton = document.querySelector("#credits-btn-insanya");
    let pageAside = document.querySelector(".page-aside");

    // Elmenets
    if (window.screen.width <= 800) {
        pageAside.classList.add('hidden');
    }

    // Add events
    SCSGAsideMenuButton.addEventListener('click', () => {
        pageAside.classList.toggle('hidden');
    });

    githubRepositoryButton.addEventListener('click', () => {
        window.open("https://github.com/Starciad/SCSG.git", '_blank').focus();
    });

    creditsStarciadButton.addEventListener('click', () => {
        window.open("https://github.com/Starciad/", '_blank').focus();
    });

    creditsIgorUPButton.addEventListener('click', () => {
        window.open("https://github.com/igorunderplayer", '_blank').focus();
    });

    creditsInsanyaButton.addEventListener('click', () => {
        window.open("https://github.com/Insanya29", '_blank').focus();
    });
}

function InitializeGenerator() {
    document.querySelector("#scsg-generate-button").addEventListener('click', SCSGInitialize)
}

// ========================================== //
// Routine

function Main() {
    InitializeBuilders();
    InitializeElements();
    InitializeGenerator();
}

Main();