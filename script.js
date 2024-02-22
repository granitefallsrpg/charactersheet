document.addEventListener("DOMContentLoaded", function() {
    const classSelect = document.getElementById("class");
    const abilitiesDiv = document.getElementById("abilities");
    const bonusesDiv = document.getElementById("bonuses");
    const negativesDiv = document.getElementById("negatives");
    const abilityScoresDiv = document.getElementById("abilityScores");

// Generate ability scores based on class
function generateAbilityScores(selectedClass) {
    let abilityScores = {};
    switch (selectedClass) {
        case "Nerdy Scholar":
            abilityScores = {
                Strength: 10,
                Dexterity: 10,
                Constitution: 10,
                Intelligence: 15,
                Wisdom: 13,
                Charisma: 8
            };
            break;
        case "Athletic Jock":
            abilityScores = {
                Strength: 15,
                Dexterity: 14,
                Constitution: 12,
                Intelligence: 10,
                Wisdom: 8,
                Charisma: 13
            };
            break;
        case "Gothic Artist":
            abilityScores = {
                Strength: 10,
                Dexterity: 12,
                Constitution: 13,
                Intelligence: 10,
                Wisdom: 15,
                Charisma: 8
            };
            break;
        case "Preppy Cheerleader/Cheer Captain":
            abilityScores = {
                Strength: 10,
                Dexterity: 13,
                Constitution: 12,
                Intelligence: 10,
                Wisdom: 8,
                Charisma: 15
            };
            break;
        case "Class Clown":
            abilityScores = {
                Strength: 10,
                Dexterity: 13,
                Constitution: 12,
                Intelligence: 10,
                Wisdom: 8,
                Charisma: 15
            };
            break;
        case "Rebel Outsider":
            abilityScores = {
                Strength: 12,
                Dexterity: 14,
                Constitution: 13,
                Intelligence: 10,
                Wisdom: 15,
                Charisma: 8
            };
            break;
        case "Overachieving Student Council President":
            abilityScores = {
                Strength: 10,
                Dexterity: 10,
                Constitution: 10,
                Intelligence: 12,
                Wisdom: 15,
                Charisma: 13
            };
            break;
    }
    return abilityScores;
}

  return abilityScores;
    }

    classSelect.addEventListener("change", function() {
        const selectedClass = classSelect.value;
        let abilities = [];
        let bonuses = [];
        let negatives = [];

        // Call the function to generate ability scores based on the selected class
        const abilityScores = generateAbilityScores(selectedClass);

        // Display ability scores
        abilitiesDiv.innerHTML = "<h3>Ability Scores</h3>";
        for (const [ability, score] of Object.entries(abilityScores)) {
            abilitiesDiv.innerHTML += `<div><strong>${ability}:</strong> ${score}</div>`;
        }


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
            case "Gothic Artist":
                abilities = [
                    "Dark Inspiration - Draw upon inner turmoil to inspire creativity, granting advantage on Wisdom-based skill checks related to artistic endeavors.",
                    "Shadow Step - Blend into shadows to evade detection or move stealthily through dark environments.",
                    "Haunting Melody - Play a haunting melody on a musical instrument to mesmerize or intimidate enemies."
                ];
                bonuses = [
                    "Creative Expression: Gain a +2 bonus to Wisdom-based skill checks related to artistic endeavors.",
                    "Mystic Aura: Can intimidate others with their dark and mysterious demeanor, granting advantage on Intimidation checks."
                ];
                negatives = [
                    "Isolationist: -1 penalty to Charisma-based skill checks when attempting to interact with mainstream social groups.",
                    "Emotional Turmoil: May succumb to mood swings, resulting in a -1 penalty to concentration checks."
                ];
                break;
            case "Preppy Cheerleader/Cheer Captain":
                abilities = [
                    "Pep Rally - Boost allies' morale with an inspiring cheer, granting temporary hit points to all nearby allies.",
                    "Dazzling Smile - Distract enemies with a dazzling smile, imposing disadvantage on attack rolls against the character for one round.",
                    "Diplomatic Charm - Use charisma and charm to negotiate peaceful resolutions to conflicts or sway NPCs to the character's side."
                ];
                bonuses = [
                    "Charismatic Leader: Gain a +2 bonus to Charisma-based skill checks when leading or motivating others.",
                    "Team Spirit: Can inspire allies with pep talks, granting them advantage on saving throws against fear."
                ];
                negatives = [
                    "Entitled Attitude: -1 penalty to Wisdom-based skill checks when faced with challenges that require humility or empathy.",
                    "Peer Pressure: May succumb to social expectations, resulting in a -1 penalty to Wisdom saving throws against charm effects."
                ];
                break;
            case "Class Clown":
                               abilities = [
                    "Prankster's Gambit - Pull off a clever prank to distract enemies or create chaos in a social situation.",
                    "Improvised Weapon - Turn everyday objects into makeshift weapons during combat encounters.",
                    "Stand-Up Routine - Perform a hilarious stand-up routine to boost allies' spirits and grant them advantage on saving throws against fear."
                ];
                bonuses = [
                    "Natural Entertainer: Gain a +2 bonus to Charisma-based skill checks related to comedic performances or social interactions.",
                    "Quick Wit: Can use humor to defuse tense situations, granting advantage on Persuasion checks."
                ];
                negatives = [
                    "Attention Seeker: -1 penalty to Wisdom-based skill checks when focus and concentration are required.",
                    "Disruptive Behavior: May struggle to take situations seriously, resulting in a -1 penalty to initiative rolls during combat encounters."
                ];
                break;
            case "Rebel Outsider":
                abilities = [
                    "Defiant Resolve - Draw strength from defiance in the face of adversity, gaining temporary hit points or a bonus to saving throws against charm effects.",
                    "Rogue Tactics - Utilize stealth and cunning to gain advantage on Dexterity-based skill checks or sneak attacks in combat.",
                    "Rebel Yell - Rally allies with a defiant shout, granting them temporary bonuses to attack rolls or saving throws."
                ];
                bonuses = [
                    "Independent Thinker: Gain a +2 bonus to Wisdom-based skill checks when making unconventional decisions.",
                    "Resistance to Authority: Can resist attempts to manipulate or coerce them, granting advantage on saving throws against charm effects from authority figures."
                ];
                negatives = [
                    "Alienation: -1 penalty to Charisma-based skill checks when attempting to connect with mainstream social groups.",
                    "Risk Taker: May act impulsively, resulting in a -1 penalty to AC when in combat."
                ];
                break;
            case "Overachieving Student Council President":
                abilities = [
                    "Inspiring Leadership - Lead by example to inspire allies, granting them temporary bonuses to skill checks or saving throws.",
                    "Efficient Organizer - Delegate tasks and coordinate efforts to accomplish goals more effectively, reducing the time or resources required for certain actions.",
                    "Diplomatic Negotiation - Use diplomacy and persuasion to defuse conflicts or sway NPCs to the character's cause."
                ];
                bonuses = [
                    "Natural Leader: Gain a +2 bonus to Charisma-based skill checks when organizing or leading group activities.",
                    "Efficient Planner: Can strategize and delegate tasks effectively, granting advantage on Intelligence-based skill checks related to planning."
                ];
                negatives = [
                    "Perfectionist: -1 penalty to Wisdom-based skill checks when faced with situations that require adaptability or compromise.",
                    "Burnout: May become overwhelmed by responsibilities, resulting in a -1 penalty to initiative rolls during high-stress situations."
                ];
                break;
        }

       // Populate abilities
let abilitiesHTML = "<h3>Abilities</h3>";
abilities.forEach(function(ability, index) {
    abilitiesHTML += `<div><strong>Ability ${index + 1}:</strong> ${ability}</div>`;
});
abilitiesDiv.innerHTML = abilitiesHTML;

// Populate bonuses
let bonusesHTML = "<h3>Bonuses</h3>";
bonuses.forEach(function(bonus) {
    bonusesHTML += `<div>${bonus}</div>`;
});
bonusesDiv.innerHTML = bonusesHTML;

// Populate negatives
let negativesHTML = "<h3>Negatives</h3>";
negatives.forEach(function(negative) {
    negativesHTML += `<div>${negative}</div>`;
});
negativesDiv.innerHTML = negativesHTML;

// Populate ability scores
let abilityScoresHTML = "<h3>Ability Scores</h3>";
for (const [ability, score] of Object.entries(abilityScores)) {
    abilityScoresHTML += `<div><strong>${ability}:</strong> ${score}</div>`;
}
abilityScoresDiv.innerHTML = abilityScoresHTML;
    });

