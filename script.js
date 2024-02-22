document.addEventListener("DOMContentLoaded", function() {
    const classSelect = document.getElementById("class");
    const abilitiesDiv = document.getElementById("abilities");

    classSelect.addEventListener("change", function() {
        const selectedClass = classSelect.value;
        let abilities = [];
        let bonuses = [];
        let negatives = [];

        switch (selectedClass) {
            case "Nerdy Scholar":
                abilities = [
                    "Study Session - Spend extra time studying a subject to gain advantage on Intelligence-based skill checks for a certain duration.",
                    "Knowledge is Power - Once per short rest, gain proficiency in a specific skill or tool for a limited time.",
                    "Critical Analysis - Analyze opponents' weaknesses, granting allies advantage on attack rolls against a chosen enemy for one round."
                ];
                bonuses = [
                    "Bookworm: Gain a +2 bonus to Intelligence-based skill checks.",
                    "Researcher: Can spend extra time studying to gain advantage on Knowledge-based skill checks."
                ];
                negatives = [
                    "Social Awkwardness: -1 penalty to Charisma-based skill checks in social situations.",
                    "Overthinking: May become indecisive in high-pressure situations, resulting in a -1 penalty to initiative rolls."
                ];
                break;
            case "Athletic Jock":
                abilities = [
                    "Power Move - Unleash a powerful physical attack, dealing extra damage to a target enemy.",
                    "Team Tactics - Coordinate with teammates to gain a tactical advantage in combat, granting advantage on attack rolls for one round.",
                    "Second Wind - Push through exhaustion to regain a portion of lost hit points during combat."
                ];
                bonuses = [
                    "Athletic Prowess: Gain a +2 bonus to Strength-based skill checks.",
                    "Team Player: Can provide inspiration to teammates during group activities, granting them advantage on skill checks."
                ];
                negatives = [
                    "Short Temper: -1 penalty to Charisma-based skill checks when faced with opposition or conflict.",
                    "Overconfidence: May underestimate opponents, resulting in a -1 penalty to AC when in combat."
                ];
                break;
            // Add cases for other classes
        }

        // Populate abilities
        abilitiesDiv.innerHTML = "<h3>Abilities</h3>";
        abilities.forEach(function(ability, index) {
            abilitiesDiv.innerHTML += `<div><strong>Ability ${index + 1}:</strong> ${ability}</div>`;
        });

        // Populate bonuses
        abilitiesDiv.innerHTML += "<h3>Bonuses</h3>";
        bonuses.forEach(function(bonus) {
            abilitiesDiv.innerHTML += `<div>${bonus}</div>`;
        });

        // Populate negatives
        abilitiesDiv.innerHTML += "<h3>Negatives</h3>";
        negatives.forEach(function(negative) {
            abilitiesDiv.innerHTML += `<div>${negative}</div>`;
        });
    });
});
 
