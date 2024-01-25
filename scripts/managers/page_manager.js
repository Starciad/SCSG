let categories = [];
let sections = [];
let buttons = [];

let currentSectionIndex;
let currentButtonIndex;

export function buildDynamicAppMenu() {
    let appMenu = document.querySelector(".app-menu");
    let tempSectionIndex = 0;

    document.querySelectorAll(".app-section-category").forEach(category => {
        let categoryName = category.dataset.name;

        // =========================================== //

        let sectionCategory = document.createElement("div");
        let sectionCategoryTitle = document.createElement("div");

        sectionCategory.classList.add("app-menu-group");
        sectionCategoryTitle.classList.add("app-menu-group-title");
        sectionCategoryTitle.innerHTML = categoryName;

        sectionCategory.appendChild(sectionCategoryTitle);
        appMenu.appendChild(sectionCategory);

        categories.push(sectionCategory);

        // =========================================== //

        category.querySelectorAll(".app-section").forEach(section => {
            let sectionName = section.dataset.name;

            let sectionButton = document.createElement("button");
            let sectionButtonAvatar = document.createElement("div");
            let sectionButtonDecorator = document.createElement("div");
            let sectionButtonAvatarValue = document.createElement("div");
            let sectionButtonDecoratorValue = document.createElement("div");

            sectionButton.classList.add("app-menu-btn");
            sectionButtonAvatar.classList.add("app-menu-btn-avatar");
            sectionButtonDecorator.classList.add("app-menu-btn-decorator");
            sectionButtonAvatarValue.id = "value";
            sectionButtonDecoratorValue.id = "value";
            sectionButtonDecoratorValue.innerText = sectionName;

            sectionButtonAvatar.appendChild(sectionButtonAvatarValue);
            sectionButtonDecorator.appendChild(sectionButtonDecoratorValue);
            sectionButton.appendChild(sectionButtonAvatar);
            sectionButton.appendChild(sectionButtonDecorator);

            sectionCategory.appendChild(sectionButton);

            let targetSection = { name: sectionName, index: tempSectionIndex, element: section };
            sections.push(targetSection);
            buttons.push(sectionButton);

            // Append event
            sectionButton.addEventListener('click', () => {
                selectButton(sectionButton);
                showSection(targetSection);
            });

            tempSectionIndex++;
        });
    });

    showSection(sections[0]);
    selectButton(buttons[0]);
}

export function buildControlPanel() {
    let previousButton = document.querySelector("#control-panel-btn-previous");
    let nextButton = document.querySelector("#control-panel-btn-next");

    previousButton.addEventListener('click', previousSection);
    nextButton.addEventListener('click', nextSection);
}

// ================================== //
//#region SECTIONS
// Tools
function showSection(section) {
    currentSectionIndex = section.index;

    closeAllSections();
    section.element.classList.remove("hidden");
}

function closeAllSections() {
    sections.forEach(section => {
        closeSection(section);
    });
}

function closeSection(section) {
    section.element.classList.add("hidden");
}

// Controls
function nextSection() {
    let index = currentSectionIndex + 1;
    if (index < sections.length) {
        setSectionByIndex(index);
    }
}

function previousSection() {
    let index = currentSectionIndex - 1;
    if (index >= 0) {
        setSectionByIndex(index);
    }
}

// Utilities
function setSectionByIndex(index) {
    showSection(sections[index]);
    selectButton(buttons[index]);
}
//#endregion

// ================================== //
//#region BUTTONS
// Tools
function selectButton(button) {
    deselectAllButtons();
    button.classList.add("app-menu-btn-selected");
}

function deselectAllButtons() {
    buttons.forEach(button => {
        deselectButton(button);
    });
}

function deselectButton(button) {
    button.classList.remove("app-menu-btn-selected");
}
//#endregion