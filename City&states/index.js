const showCitiesButton = document.querySelector("#showCitiesButton");

showCitiesButton.addEventListener("click", displayCities);

function displayCities() {
    const stateInput = document.querySelector("#stateInput");
    const selectedState = stateInput.options[stateInput.selectedIndex].value;

    let cities = [];

    switch (selectedState) {
        case "Karnataka":
            cities = ["Bengaluru", "Mysore", "Hubli"];
            break;
        case "TamilNadu":
            cities = ["Chennai", "Coimbatore", "Madurai"];
            break;
        case "Maharastra":
            cities = ["Mumbai", "Pune", "Nagpur"];
            break;
        case "Hariyana":
            cities = ["Chandigarh", "Faridabad", "Gurgaon"];
            break;
    }

    const cityOutput = document.getElementById("cityOutput");
    cityOutput.innerHTML = ""; // Clear previous options

    cities.forEach(city => {
        const option = document.createElement("option");
        option.value = city;
        option.text = city;
        cityOutput.appendChild(option);
        // console.log(cityOutput)
    });
}

