const searchInput = document.getElementById("jobSearch");
const categorySelect = document.getElementById("jobCategory");
const jobItems = document.querySelectorAll(".job-item");

function filterJobs() {
    const searchText = searchInput.value.toLowerCase();
    const category = categorySelect.value;

    jobItems.forEach(function(job) {
        const jobText = job.innerText.toLowerCase();

        let categoryMatch =
            category === "all" ||
            (category === "design" && jobText.includes("design")) ||
            (category === "development" && jobText.includes("developer")) ||
            (category === "ai" && (jobText.includes("ai") || jobText.includes("data")));

        const searchMatch = jobText.includes(searchText);

        if (searchMatch && categoryMatch) {
            job.style.display = "flex";
        } else {
            job.style.display = "none";
        }
    });
}

if (searchInput && categorySelect) {
    const urlParams = new URLSearchParams(window.location.search);
const initialSearch = urlParams.get("search");

if (searchInput && categorySelect && initialSearch) {
    searchInput.value = initialSearch;
    filterJobs();
}
    searchInput.addEventListener("input", filterJobs);
    categorySelect.addEventListener("change", filterJobs);
}
const companySearch = document.getElementById("companySearch");
const companyCards = document.querySelectorAll(".company-card");

if (companySearch) {
    companySearch.addEventListener("input", function () {

        const searchText = companySearch.value.toLowerCase();

        companyCards.forEach(function (company) {

            const companyText = company.innerText.toLowerCase();

            if (companyText.includes(searchText)) {
                company.style.display = "block";
            } else {
                company.style.display = "none";
            }

        });

    });
}
const loginForm = document.getElementById("loginForm");

if (loginForm) {
    loginForm.addEventListener("submit", function(event) {

        event.preventDefault();

        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;

        if (email && password) {
            alert("Login successful! Welcome to PlaceMate 🎉");
            window.location.href = "./dashboard.html";
        }

    });
}
const registerForm = document.getElementById("registerForm");

if (registerForm) {
    registerForm.addEventListener("submit", function(event) {

        event.preventDefault();

        const password = document.getElementById("registerPassword").value;
        const confirmPassword = document.getElementById("confirmPassword").value;

        if (password !== confirmPassword) {
            alert("Passwords do not match!");
            return;
        }

        alert("Account created successfully! 🎉");

        window.location.href = "login.html";
    });
}
const heroSearch = document.getElementById("heroSearch");
const heroSearchBtn = document.getElementById("heroSearchBtn");

if (heroSearch && heroSearchBtn) {

    heroSearchBtn.addEventListener("click", function(event) {

        event.preventDefault();

        const searchText = heroSearch.value.trim();

        window.location.href =
            "jobs.html?search=" + encodeURIComponent(searchText);

    });

}