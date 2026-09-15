// ========================================
// PAGE NAVIGATION
// ========================================

function goTo(page) {

    document.body.style.opacity = "0";

    setTimeout(function () {
        window.location.href = page;
    }, 200);

}


// ========================================
// SMOOTH SCROLL
// ========================================

function scrollToSection(id) {

    const section = document.getElementById(id);

    if (section) {

        section.scrollIntoView({
            behavior: "smooth"
        });

    }

}


// ========================================
// PAGE LOAD ANIMATION
// ========================================

window.addEventListener("load", function () {

    document.body.style.opacity = "1";

});


// ========================================
// DEMO WEATHER DATA
// ========================================

const weatherData = {

    temperature: 31,

    humidity: 68,

    rainfall: 12,

    windSpeed: 14,

    condition: "Partly Cloudy"

};


// ========================================
// DEMO AI RISK
// ========================================

const aiRisk = {

    heavyRain: "HIGH",

    flood: "MEDIUM",

    cropDamage: "HIGH",

    heatwave: "LOW"

};


// ========================================
// ALERT DEMO
// ========================================

function showDemoAlert() {

    alert(
        "🚨 HIGH PRIORITY ALERT\n\n" +
        "Heavy rainfall expected within the next 6 hours.\n\n" +
        "Recommended Action:\n" +
        "Protect harvested crops and avoid low-lying areas."
    );

}
