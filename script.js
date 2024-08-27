const vehicles = {
    "Maruti Suzuki Alto": { topSpeed: 140, fuelEfficiency: 22.05, maxRange: 771.75 },
    "Hyundai i20": { topSpeed: 180, fuelEfficiency: 20.35, maxRange: 753.05 },
    "Tata Nexon": { topSpeed: 180, fuelEfficiency: 17.57, maxRange: 772.68 },
    "Honda City": { topSpeed: 180, fuelEfficiency: 17.8, maxRange: 712.00 },
    "Mahindra Thar": { topSpeed: 155, fuelEfficiency: 15.2, maxRange: 866.40 },
    "Toyota Innova Crysta": { topSpeed: 179, fuelEfficiency: 11.25, maxRange: 618.75 },
    "Kia Seltos": { topSpeed: 170, fuelEfficiency: 16.8, maxRange: 840.00 },
    "Renault Kwid": { topSpeed: 150, fuelEfficiency: 22.3, maxRange: 624.40 },
    "Ford EcoSport": { topSpeed: 182, fuelEfficiency: 15.9, maxRange: 826.80 },
    "Tata Tiago": { topSpeed: 150, fuelEfficiency: 23.84, maxRange: 834.40 }
};

// Distance-Based Calculation ( a.html )

document.getElementById('calculate-distance-btn')?.addEventListener('click', function() {
    const distance = parseFloat(document.getElementById('distance').value);
    const selectedVehicle = document.getElementById('vehicle-dropdown').value;

    if (isNaN(distance) || distance <= 0) {
        alert("Please enter a valid distance.");
        return;
    }

    const vehicleData = vehicles[selectedVehicle];
    const time = calculateTime(distance, vehicleData.topSpeed);
    const fuelConsumption = calculateFuelConsumption(distance, vehicleData.fuelEfficiency);
    const rangeStatus = checkRange(distance, vehicleData.maxRange);

    document.getElementById('time-result').textContent = `Time: ${time.toFixed(2)} hours`;
    document.getElementById('fuel-result').textContent = `Fuel Consumption: ${fuelConsumption.toFixed(2)} liters`;
    document.getElementById('range-result').textContent = `Range Status: ${rangeStatus}`;

    // Compare with all vehicles
    const comparisonResults = compareWithAllVehicles(distance);
    document.getElementById('comparison-result').innerHTML = comparisonResults;
});


function compareWithAllVehicles(distance) {
    let results = `<h3>Comparison with All Vehicles</h3><ul>`;
    for (const [vehicle, data] of Object.entries(vehicles)) {
        const time = calculateTime(distance, data.topSpeed);
        const fuelConsumption = calculateFuelConsumption(distance, data.fuelEfficiency);
        const rangeStatus = checkRange(distance, data.maxRange);
        results += `<li>${vehicle}: Time: ${time.toFixed(2)} hours, Fuel: ${fuelConsumption.toFixed(2)} liters, ${rangeStatus}</li>`;
    }
    results += `</ul>`;
    return results;
}

// Time-Based Calculation (b.html)

document.getElementById('calculate-time-btn')?.addEventListener('click', function() {
    const hours = parseFloat(document.getElementById('hours').value);
    const minutes = parseFloat(document.getElementById('minutes').value);
    const selectedVehicle = document.getElementById('vehicle-dropdown-time').value;

    if (isNaN(hours) || hours < 0 || isNaN(minutes) || minutes < 0 || minutes >= 60) {
        alert("Please enter valid hours and minutes.");
        return;
    }

    const totalTime = hours + (minutes / 60);
    const vehicleData = vehicles[selectedVehicle];
    const distance = calculateDistance(totalTime, vehicleData.topSpeed);
    const fuelConsumption = calculateFuelConsumption(distance, vehicleData.fuelEfficiency);
    const rangeStatus = checkRange(distance, vehicleData.maxRange);

    document.getElementById('distance-result').textContent = `Distance: ${distance.toFixed(2)} km`;
    document.getElementById('fuel-result-time').textContent = `Fuel Consumption: ${fuelConsumption.toFixed(2)} liters`;
    document.getElementById('range-result-time').textContent = `Range Status: ${rangeStatus}`;

    // Compare with all vehicles
    const comparisonResults = compareWithAllVehicles(distance);
    document.getElementById('comparison-result-time').innerHTML = comparisonResults;
});

// Functions
function calculateTime(distance, topSpeed) {
    return distance / topSpeed;
}

function calculateDistance(time, topSpeed) {
    return time * topSpeed;
}

function calculateFuelConsumption(distance, fuelEfficiency) {
    return distance / fuelEfficiency;
}

function checkRange(distance, maxRange) {
    return distance > maxRange ? 'Out of Range' : 'Within Range';
}

function compareWithAllVehicles(distance) {
    let results = `<h3>Comparison with All Vehicles</h3><ul>`;
    for (const [vehicle, data] of Object.entries(vehicles)) {
        const time = calculateTime(distance, data.topSpeed);
        const fuelConsumption = calculateFuelConsumption(distance, data.fuelEfficiency);
        const rangeStatus = checkRange(distance, data.maxRange);
        results += `<li>${vehicle}: Time: ${time.toFixed(2)} hours, Fuel: ${fuelConsumption.toFixed(2)} liters, ${rangeStatus}</li>`;
    }
    results += `</ul>`;
    return results;
}
