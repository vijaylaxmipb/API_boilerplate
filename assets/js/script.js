const API_KEY = "kWGV9sfIIA42LClIM5rChi9rNSs";
const API_URL = "https://ci-jshint.herokuapp.com/api";
const resultsModal = new bootstrap.Modal(documnet.getElementById("resultsModal"));

document.getElementById("status").addEventListener("click", e => getStatus(e));

async function ger Status(e) {
    
    const queryString = `${API_URL}?api_key=${API_KEY}`;

    const response = await fetch(queryString);

    const data = await response.json();

    if (response.ok) {
        console.log(data.expiry);
    }

}
