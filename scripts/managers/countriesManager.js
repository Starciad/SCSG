export class countriesManager
{
    countries;

    constructor()
    {
        fetch('models/countries.json')
        .then(response => {
            if (!response.ok) {
                throw new Error("HTTP error " + response.status);
            }

            return response.json();
        })
        .then(json => {

            for (var i = 0; i < json.length; i++) {
                this.countries.push({
                    value: json[i].id,
                    name: json[i].name
                });
            }
        })
        .catch(function () {
            console.error("Erro ao obter os países");
        });
    }
}