document.addEventListener("DOMContentLoaded", function () {
    loadStates();
    loadBloodGroups();
});

const states = [
    "Andaman and Nicobar Islands", "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chandigarh",
    "Chhattisgarh", "Dadra and Nagar Haveli", "Daman and Diu", "Delhi", "Goa", "Gujarat", "Haryana",
    "Himachal Pradesh", "Jammu and Kashmir", "Jharkhand", "Karnataka", "Kerala", "Lakshadweep",
    "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram", "Nagaland", "Orissa", "Pondicherry",
    "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu", "Tripura", "Uttaranchal", "Uttar Pradesh", "West Bengal"
];

const bloodGroups = ["O-", "O+", "A-", "A+", "B-", "B+", "AB-", "AB+"];

const citiesByState = {
    "Andaman and Nicobar Islands": ["Port Blair", "Diglipur", "Rangat"],
    "Andhra Pradesh": ["Visakhapatnam", "Vijayawada", "Guntur", "Tirupati", "Kurnool", "Rajahmundry"],
    "Arunachal Pradesh": ["Itanagar", "Tawang", "Ziro", "Pasighat", "Tezu"],
    "Assam": ["Guwahati", "Silchar", "Dibrugarh", "Jorhat", "Tezpur", "Tinsukia"],
    "Bihar": ["Patna", "Gaya", "Bhagalpur", "Muzaffarpur", "Darbhanga", "Purnia"],
    "Chandigarh": ["Chandigarh"],
    "Chhattisgarh": ["Raipur", "Bilaspur", "Durg", "Korba", "Bhilai", "Jagdalpur"],
    "Dadra and Nagar Haveli": ["Silvassa", "Naroli", "Khanvel"],
    "Daman and Diu": ["Daman", "Diu"],
    "Delhi": ["New Delhi", "Noida", "Gurgaon", "Dwarka", "Karol Bagh", "Saket"],
    "Goa": ["Panaji", "Margao", "Vasco da Gama", "Ponda", "Mapusa", "Calangute"],
    "Gujarat": ["Ahmedabad", "Surat", "Vadodara", "Rajkot", "Bhavnagar", "Gandhinagar"],
    "Haryana": ["Gurgaon", "Faridabad", "Panipat", "Karnal", "Hisar", "Sonipat"],
    "Himachal Pradesh": ["Shimla", "Manali", "Dharamshala", "Solan", "Mandi", "Kullu"],
    "Jammu and Kashmir": ["Srinagar", "Jammu", "Leh", "Anantnag", "Udhampur", "Baramulla"],
    "Jharkhand": ["Ranchi", "Jamshedpur", "Dhanbad", "Bokaro", "Deoghar", "Hazaribagh"],
    "Karnataka": ["Bengaluru", "Mysuru", "Mangaluru", "Hubli", "Belagavi", "Gulbarga"],
    "Kerala": ["Thiruvananthapuram", "Kochi", "Kozhikode", "Kollam", "Thrissur", "Alappuzha"],
    "Lakshadweep": ["Kavaratti", "Agatti", "Minicoy"],
    "Madhya Pradesh": ["Bhopal", "Indore", "Gwalior", "Jabalpur", "Ujjain", "Sagar"],
    "Maharashtra": ["Mumbai", "Pune", "Nagpur", "Nashik", "Aurangabad", "Solapur"],
    "Manipur": ["Imphal", "Churachandpur", "Thoubal", "Kakching", "Senapati"],
    "Meghalaya": ["Shillong", "Tura", "Nongpoh", "Cherrapunji", "Jowai"],
    "Mizoram": ["Aizawl", "Lunglei", "Champhai", "Serchhip", "Kolasib"],
    "Nagaland": ["Kohima", "Dimapur", "Mokokchung", "Tuensang", "Wokha"],
    "Odisha": ["Bhubaneswar", "Cuttack", "Rourkela", "Sambalpur", "Puri", "Berhampur"],
    "Pondicherry": ["Pondicherry", "Karaikal", "Mahe", "Yanam"],
    "Punjab": ["Amritsar", "Ludhiana", "Jalandhar", "Patiala", "Bathinda", "Mohali"],
    "Rajasthan": ["Jaipur", "Jodhpur", "Udaipur", "Kota", "Ajmer", "Bikaner"],
    "Sikkim": ["Gangtok", "Namchi", "Ravangla", "Gyalshing", "Mangan"],
    "Tamil Nadu": ["Chennai", "Coimbatore", "Madurai", "Salem", "Tiruchirappalli", "Vellore"],
    "Tripura": ["Agartala", "Udaipur", "Dharmanagar", "Kailashahar", "Belonia"],
    "Uttarakhand": ["Dehradun", "Haridwar", "Nainital", "Rishikesh", "Haldwani", "Almora"],
    "Uttar Pradesh": ["Lucknow", "Kanpur", "Agra", "Varanasi", "Prayagraj", "Meerut"],
    "West Bengal": ["Kolkata", "Durgapur", "Asansol", "Siliguri", "Howrah", "Darjeeling"]
};


const donors = [
    { name: "Arpan Dey", contact: "9876543210", state: "West Bengal", city: "Kolkata", bloodGroup: "A+" },
    { name: "Sonai Kesh ", contact: "9876543210", state: "West Bengal", city: "Durgapur", bloodGroup: "B+" },
    { name: "Arpan", contact: "9876543210", state: "West Bengal", city: "Asansol", bloodGroup: "O+" },
    { name: "Sonai ", contact: "9876543210", state: "West Bengal", city: "Durgapur", bloodGroup: "A+" } 
];


// Load States into Dropdown
function loadStates() {
    const stateDropdown = document.getElementById("get_states");
    stateDropdown.innerHTML = '<option value="">Select Your State</option>'; // Clear options

    states.forEach(state => {
        const option = document.createElement("option");
        option.value = state;
        option.textContent = state;
        stateDropdown.appendChild(option);
    });

    stateDropdown.addEventListener("change", () => loadCities(stateDropdown.value));
}

// Load Cities Based on Selected State
function loadCities(selectedState) {
    const cityDropdown = document.getElementById("get_cities");
    cityDropdown.innerHTML = '<option value="">Select Your City</option>'; // Clear options

    if (selectedState && citiesByState[selectedState]) {
        citiesByState[selectedState].forEach(city => {
            const option = document.createElement("option");
            option.value = city;
            option.textContent = city;
            cityDropdown.appendChild(option);
        });
    }
}

// Load Blood Groups into Dropdown
function loadBloodGroups() {
    const bloodDropdown = document.getElementById("blood_group");
    bloodDropdown.innerHTML = '<option value="">Select Blood Group</option>'; // Clear options

    bloodGroups.forEach(group => {
        const option = document.createElement("option");
        option.value = group;
        option.textContent = group;
        bloodDropdown.appendChild(option);
    });
}

// Search Donors and Display Results
function searchDonors() {
    const selectedState = document.getElementById("get_states").value;
    const selectedCity = document.getElementById("get_cities").value;
    const selectedBloodGroup = document.getElementById("blood_group").value;
    const resultContainer = document.getElementById("donorResults");

    resultContainer.innerHTML = ""; // Clear previous results

    // Validate Inputs
    if (!selectedState || !selectedCity || !selectedBloodGroup) {
        resultContainer.innerHTML = "<p class='text-danger'>Please select State, City, and Blood Group.</p>";
        return;
    }

    // Filter Matching Donors
    const results = donors.filter(donor =>
        donor.state === selectedState &&
        donor.city === selectedCity &&
        donor.bloodGroup === selectedBloodGroup
    );

    // Display Results
    if (results.length === 0) {
        resultContainer.innerHTML = "<p class='text-danger'>No donors found.</p>";
    } else {
        results.forEach(donor => {
            resultContainer.innerHTML += `
                <div class="card p-2 mb-2">
                    <p><strong>Name:</strong> ${donor.name}</p>
                    <p><strong>Contact:</strong> ${donor.contact}</p>
                </div>`;
        });
    }
}

// Get the popup and elements
const popup = document.getElementById("popup");
const referBtn = document.getElementById("referBtn");
const closeBtn = document.querySelector(".close");
const referForm = document.getElementById("referForm");

// Open the popup when "Refer A Friend" is clicked
referBtn.addEventListener("click", (e) => {
    e.preventDefault();
    popup.style.display = "flex"; // Show the popup
});

// Close the popup when the close button is clicked
closeBtn.addEventListener("click", () => {
    popup.style.display = "none"; // Hide the popup
});

// Close the popup when clicking outside the popup content
window.addEventListener("click", (e) => {
    if (e.target === popup) {
        popup.style.display = "none";
    }
});

// Handle form submission
referForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const contactInput = document.getElementById("contactInput").value;
    alert(`Invitation sent to: ${contactInput}`);
    popup.style.display = "none"; // Hide the popup
});

document.addEventListener("DOMContentLoaded", function () {
    const counters = document.querySelectorAll(".stat-number");

    counters.forEach(counter => {
        const updateCount = () => {
            const target = +counter.getAttribute("data-target");
            const current = +counter.innerText;

            const increment = Math.ceil(target / 200); // Adjust speed

            if (current < target) {
                counter.innerText = current + increment;
                setTimeout(updateCount, 10); // Adjust speed (ms)
            } else {
                counter.innerText = target; // Ensure the final value is correct
            }
        };

        updateCount();
    });
});
