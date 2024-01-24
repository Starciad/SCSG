let categories = [];
let sections = [];

let buttons = [];

export function buildAppMenu() {
    let appMenu = document.querySelector(".app-menu");

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

            let targetSection = { name: sectionName, element: section };
            sections.push(targetSection);
            buttons.push(sectionButton);

            // Append event
            sectionButton.addEventListener('click', () => {
                selectButton(sectionButton);
                showSection(targetSection);
            });
        });
    });

    showSection(sections[0]);
    selectButton(buttons[0]);
}

// ================================== //
//#region SECTIONS
function showSection(section) {
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
//#endregion

// ================================== //
//#region BUTTONS
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