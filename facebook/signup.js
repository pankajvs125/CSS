function populateDateSelectors() {
    const daySelect = document.getElementById('day');
    const monthSelect = document.getElementById('month');
    const yearSelect = document.getElementById('year');
    // let Day=document.getElementById('today');
    // let presentDay = new Date().getDay();
    // Day.textContent=presentDay;


    const currentYear = new Date().getFullYear();
    const startYear = 1905;
    const endYear = currentYear;

    for (let i = endYear; i >= startYear; i--) {
        const option = document.createElement('option');
        option.value = i;
        option.textContent = i;
        yearSelect.appendChild(option);
    }

    
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    months.forEach((month, index) => {
        const option = document.createElement('option');
        option.value = index + 1;
        option.textContent = month;
        monthSelect.appendChild(option);
    });

    function updateDays() {
        const selectedMonth = parseInt(monthSelect.value);
        const selectedYear = parseInt(yearSelect.value);
        const daysInMonth = new Date(selectedYear, selectedMonth, 0).getDate();

        // daySelect.innerHTML = ''; // Clear existing days
        for (let i = 1; i <= daysInMonth; i++) {
            const option = document.createElement('option');
            option.value = i;
            option.textContent = i;
            daySelect.appendChild(option);
        }
    }

    monthSelect.addEventListener('change', updateDays);
    yearSelect.addEventListener('change', updateDays);

    updateDays();
}

document.addEventListener('DOMContentLoaded', populateDateSelectors);
