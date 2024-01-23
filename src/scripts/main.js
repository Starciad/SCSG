import { countriesManager } from "./managers/countriesManager.js";

// BUILD FORM
function BuildFormOptions() {
    let cm = new countriesManager();

    let tags = [
        document.getElementById('country_of_residence'),
        document.getElementById('country_of_birth')
    ];

    tags.forEach(element => {
        element.innerHTML = "";

        cm.countries.forEach(element => {
            let option = document.createElement('option');
            option.value = country.id;
            option.text = country.name;
            element.add(option);
        });
    });
}

// =================================== //
function Main() {
    BuildFormOptions();
};

Main();