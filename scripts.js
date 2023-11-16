// Fetch Nobel Prize data from the provided API
async function fetchPrizes() {
    try {
        const response = await fetch('http://api.nobelprize.org/v1/prize.json');
        const data = await response.json();
        return data.prizes;
    } catch (error) {
        console.error('Error fetching data:', error);
        return [];
    }
}

// Display prize winners in the HTML list
function displayPrizeWinners(prizes) {
    const prizesList = document.getElementById('prizes-list');
    prizesList.innerHTML = '';

    prizes.forEach(prize => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `<strong>${prize.year}</strong> - ${prize.category} - ${prize.motivation}`;
        prizesList.appendChild(listItem);
    });
}

// Populate categories and years in the respective dropdowns
function populateFilters(prizes) {
    const categories = new Set();
    const years = new Set();

    prizes.forEach(prize => {
        categories.add(prize.category);
        years.add(prize.year);
    });

    const categorySelect = document.getElementById('category');
    categories.forEach(category => {
        const option = document.createElement('option');
        option.value = category;
        option.textContent = category;
        categorySelect.appendChild(option);
    });

    const yearSelect = document.getElementById('year');
    years.forEach(year => {
        const option = document.createElement('option');
        option.value = year;
        option.textContent = year;
        yearSelect.appendChild(option);
    });
}

// Filter prizes based on category and year
function applyFilters() {
    const selectedCategory = document.getElementById('category').value;
    const selectedYear = document.getElementById('year').value;

    // Implement filtering logic here based on selectedCategory and selectedYear
    // Update displayPrizeWinners() to show filtered results
}

// Display information about individuals who won Nobel Prize more than once
function displayMultipleWinners(prizes) {
    const multipleWinnersList = document.getElementById('multiple-winners-list');
    multipleWinnersList.innerHTML = '';

    // Implement logic to find and display multiple winners here
}

// Fetch prizes when the page loads
window.onload = async function () {
    const prizes = await fetchPrizes();
    displayPrizeWinners(prizes);
    populateFilters(prizes);
    displayMultipleWinners(prizes);
};
