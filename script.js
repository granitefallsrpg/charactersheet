window.jsPDF = window.jspdf.jsPDF; 
const classDetails = {
    nerdyScholar: {
    bonuses: {
        intelligence: 2,
    },
    negatives: {
        charisma: -1,
    },
    skills: {
        bookworm: "+2 bonus to Intelligence-based skill checks.",
        researcher: "Can spend extra time studying to gain advantage on Knowledge-based skill checks."
    },
    description: "Nerdy Scholars are the epitome of intellect and curiosity, driven by a relentless pursuit of knowledge.",
    details: "They thrive in academic environments, where their sharp minds unravel complex theories and discover hidden truths. However, their brilliance often isolates them from social circles, leading to awkward interactions and overthinking.",
    negativeDescription: "Social Awkwardness: -1 penalty to Charisma-based skill checks in social situations, as their intellectual prowess overshadows their social grace.\nOverthinking: May become indecisive in high-pressure situations, resulting in a -1 penalty to initiative rolls as they analyze every possible outcome."
},
athleticJock: {
    bonuses: {
        strength: 2,
    },
    negatives: {
        charisma: -1,
    },
    skills: {
        athleticProwess: "+2 bonus to Strength-based skill checks.",
        teamPlayer: "Can provide inspiration to teammates during group activities, granting them advantage on skill checks."
    },
    description: "Athletic Jocks are the powerhouse of physical prowess, dominating sports arenas and rallying their teams to victory.",
    details: "They excel in competitive sports, where their strength and agility shine brightest. However, their competitive nature can lead to a short temper and overconfidence.",
    negativeDescription: "Short Temper: -1 penalty to Charisma-based skill checks when faced with opposition or conflict, as their competitive spirit fuels impulsive reactions.\nOverconfidence: May underestimate opponents, resulting in a -1 penalty to AC when in combat, as they rely too heavily on their physical abilities."
},
gothicArtist: {
    bonuses: {
        wisdom: 2,
    },
    negatives: {
        charisma: -1,
    },
    skills: {
        creativeExpression: "+2 bonus to Wisdom-based skill checks related to artistic endeavors.",
        mysticAura: "Can intimidate others with their dark and mysterious demeanor, granting advantage on Intimidation checks."
    },
    description: "Gothic Artists are enigmatic souls, channeling their inner darkness into captivating works of art and mystic aura.",
    details: "They find solace in creative expression, where their wisdom and intuition guide their hands to create haunting masterpieces. Yet, their eccentricity may lead to isolation and emotional turmoil.",
    negativeDescription: "Isolationist: -1 penalty to Charisma-based skill checks when attempting to interact with mainstream social groups, as their unconventional style alienates them from conventional society.\nEmotional Turmoil: May succumb to mood swings, resulting in a -1 penalty to concentration checks, as their turbulent emotions disrupt their focus."
},
preppyCheerleader: {
    bonuses: {
        charisma: 2,
    },
    negatives: {
        wisdom: -1,
    },
    skills: {
        charismaticLeader: "+2 bonus to Charisma-based skill checks when leading or motivating others.",
        teamSpirit: "Can inspire allies with pep talks, granting them advantage on saving throws against fear."
    },
    description: "Preppy Cheerleaders are the epitome of charm and enthusiasm, spreading positivity and team spirit wherever they go.",
    details: "They shine as natural leaders, rallying their peers with infectious energy and unwavering optimism. However, their charismatic facade may hide a lack of wisdom, leading to entitled attitudes and susceptibility to peer pressure.",
    negativeDescription: "Entitled Attitude: -1 penalty to Wisdom-based skill checks when faced with challenges that require humility or empathy, as their privileged upbringing fosters a sense of entitlement.\nPeer Pressure: May succumb to social expectations, resulting in a -1 penalty to Wisdom saving throws against charm effects, as they prioritize fitting in over personal values."
},
classClown: {
    bonuses: {
        charisma: 2,
    },
    negatives: {
        wisdom: -1,
    },
    skills: {
        naturalEntertainer: "+2 bonus to Charisma-based skill checks related to comedic performances or social interactions.",
        quickWit: "Can use humor to defuse tense situations, granting advantage on Persuasion checks."
    },
    description: "Class Clowns are the life of the party, wielding their quick wit and infectious charm to entertain and diffuse tension.",
    details: "They thrive on laughter and social interactions, where their charisma and comedic talent shine brightest. Yet, their constant need for attention may lead to attention-seeking behavior and disruptive tendencies.",
    negativeDescription: "Attention Seeker: -1 penalty to Wisdom-based skill checks when focus and concentration are required, as their desire for approval distracts them from serious tasks.\nDisruptive Behavior: May struggle to take situations seriously, resulting in a -1 penalty to initiative rolls during combat encounters, as they prioritize humor over urgency."
},
rebelOutsider: {
    bonuses: {
        wisdom: 2,
    },
    negatives: {
        charisma: -1,
    },
    skills: {
        independentThinker: "+2 bonus to Wisdom-based skill checks when making unconventional decisions.",
        resistanceToAuthority: "Can resist attempts to manipulate or coerce them, granting advantage on saving throws against charm effects from authority figures."
    },
    description: "Rebel Outsiders are the epitome of nonconformity, challenging authority and forging their own path with resilience and independence.",
    details: "They thrive on unconventional thinking and defiance, where their wisdom and self-reliance guide them through adversity. Yet, their rebellious nature may lead to alienation and risk-taking tendencies.",
    negativeDescription: "Alienation: -1 penalty to Charisma-based skill checks when attempting to connect with mainstream social groups, as their defiance of societal norms isolates them from conventional communities.\nRisk Taker: May act impulsively, resulting in a -1 penalty to AC when in combat, as their willingness to challenge the status quo leads to reckless behavior."
},
overachievingStudentCouncilPresident: {
    bonuses: {
        charisma: 2,
    },
    negatives: {
        wisdom: -1,
    },
    skills: {
        naturalLeader: "+2 bonus to Charisma-based skill checks when organizing or leading group activities.",
        efficientPlanner: "Can strategize and delegate tasks effectively, granting advantage on Intelligence-based skill checks related to planning."
    },
    description: "Overachieving Student Council Presidents are natural-born leaders, guiding their peers with charisma and efficiency.",
    details: "They excel in leadership roles, where their charisma and organizational skills inspire others to achieve greatness. However, their relentless pursuit of perfection may lead to burnout and a lack of adaptability.",
    negativeDescription: "Perfectionist: -1 penalty to Wisdom-based skill checks when faced with situations that require adaptability or compromise, as their pursuit of perfection blinds them to alternative solutions.\nBurnout: May become overwhelmed by responsibilities, resulting in a -1 penalty to initiative rolls during high-stress situations, as their drive for success pushes them to their limits."
}
};

document.getElementById("profileImage").addEventListener("change", function(event) {
    const file = event.target.files[0]; // Get the selected file

    // Check if a file is selected
    if (file) {
        const reader = new FileReader();

        // Convert the selected file to a data URL
        reader.readAsDataURL(file);
        reader.onload = function() {
            const profileImage = document.getElementById("previewImage");
            profileImage.src = reader.result;
            profileImage.style.display = "block"; // Display the preview image
        };
    }
});

 function updateClass() {
    const selectedClass = document.getElementById("class").value;

    // Update ability scores based on selected class
    switch (selectedClass) {
        case "nerdyScholar":
            updateAbilityScores({ strength: 1, dexterity: 2, constitution: 1, intelligence: 2, wisdom: 1, charisma: 1 }, classDetails[selectedClass].bonuses, classDetails[selectedClass].negatives);
            break;
        case "athleticJock":
            updateAbilityScores({ strength: 2, dexterity: 2, constitution: 1, intelligence: 1, wisdom: 1, charisma: 1 }, classDetails[selectedClass].bonuses, classDetails[selectedClass].negatives);
            break;
        case "gothicArtist":
            updateAbilityScores({ strength: 1, dexterity: 1, constitution: 2, intelligence: 2, wisdom: 1, charisma: 1 }, classDetails[selectedClass].bonuses, classDetails[selectedClass].negatives);
            break;
        case "preppyCheerleader":
            updateAbilityScores({ strength: 1, dexterity: 2, constitution: 1, intelligence: 1, wisdom: 2, charisma: 1 }, classDetails[selectedClass].bonuses, classDetails[selectedClass].negatives);
            break;
        case "classClown":
            updateAbilityScores({ strength: 1, dexterity: 2, constitution: 1, intelligence: 1, wisdom: 1, charisma: 2 }, classDetails[selectedClass].bonuses, classDetails[selectedClass].negatives);
            break;
        case "rebelOutsider":
            updateAbilityScores({ strength: 1, dexterity: 2, constitution: 2, intelligence: 1, wisdom: 1, charisma: 1 }, classDetails[selectedClass].bonuses, classDetails[selectedClass].negatives);
            break;
    }
    
    // Update skills based on selected class
    updateSkills(selectedClass);

    // Update class description and details
    updateClassDetails(selectedClass);

    // Update combat information based on selected class
    updateCombatInfo(selectedClass);

    // Update equipment based on selected class
    updateEquipment(selectedClass);
}
function updateCombatInfo(selectedClass) {
    const combatInfoContainer = document.getElementById("combatInfo");
    combatInfoContainer.innerHTML = "<h3>Combat Information</h3>";

    // Generate combat information based on selected class
    const combatInfo = generateCombatInfo(selectedClass);

    // Display combat information
    combatInfoContainer.innerHTML += `<p>${combatInfo}</p>`;
}

function updateEquipment(selectedClass) {
    const equipmentContainer = document.getElementById("equipment");
    equipmentContainer.innerHTML = "<h3>Equipment</h3>";

    // Generate equipment based on selected class
    const equipment = generateEquipment(selectedClass);

    // Display equipment
    equipmentContainer.innerHTML += `<p>${equipment}</p>`;
}

function generateCombatInfo(selectedClass) {
    // Generate combat information based on class stereotype
    switch (selectedClass) {
        case "nerdyScholar":
            return "Combat Information for Scholar: Prefers to avoid physical confrontations, relying on intelligence and knowledge.";
        case "athleticJock":
            return "Combat Information for Athlete: Excels in physical combat, utilizing strength and athleticism.";
        // Add cases for other classes...
        default:
            return "No combat information available.";
    }
}

function generateEquipment(selectedClass) {
    // Generate equipment based on class stereotype
    switch (selectedClass) {
        case "nerdyScholar":
            return "Equipment for Scholar: Books, research materials, scientific gadgets.";
        case "athleticJock":
            return "Equipment for Athlete: Sports gear, gym equipment, team jersey.";
        // Add cases for other classes...
        default:
            return "No equipment available.";
    }
}
function updateAbilityScores(baseScores, bonuses, negatives) {
    // Update ability score fields in the form
    const abilityFields = ["strength", "dexterity", "constitution", "intelligence", "wisdom", "charisma"];
    abilityFields.forEach(field => {
        const inputElement = document.getElementById(field);
        const baseValue = baseScores[field] || 0; // Use base score if available, default to 0 otherwise
        const bonus = bonuses[field] || 0; // Get bonus from class bonuses, default to 0 otherwise
        const negative = negatives[field] || 0; // Get negative from class negatives, default to 0 otherwise
        inputElement.value = baseValue + bonus + negative;
    });
}

function updateSkills(selectedClass) {
    const skills = classDetails[selectedClass].skills;
    const skillsContainer = document.getElementById("skills");
    skillsContainer.innerHTML = "<h3>Skills</h3>";

    for (const skill in skills) {
        if (skills.hasOwnProperty(skill)) {
            const skillDescription = skills[skill];
            const skillElement = document.createElement("p");
            skillElement.textContent = `${skill}: ${skillDescription}`;
            skillsContainer.appendChild(skillElement);
        }
    }
}

function updateClassDetails(selectedClass) {
    const description = classDetails[selectedClass].description;
    const details = classDetails[selectedClass].details;
    const negativeDescription = classDetails[selectedClass].negativeDescription; // Add this line to get the negative description
    const fullDescription = `${description}\n\n${details}\n\nNegative Traits:\n${negativeDescription}`; // Concatenate the negative description with other details

    document.getElementById("classDescription").textContent = fullDescription;
}

function levelUp() {
    const selectedLevel = parseInt(document.getElementById("level").value);
    const abilityFields = ["strength", "dexterity", "constitution", "intelligence", "wisdom", "charisma"];

    // Increment two ability scores by 1 for each level
    for (let i = 0; i < selectedLevel; i++) {
        const randomIndex1 = Math.floor(Math.random() * abilityFields.length);
        let randomIndex2 = Math.floor(Math.random() * abilityFields.length);
        // Ensure randomIndex2 is different from randomIndex1
        while (randomIndex2 === randomIndex1) {
            randomIndex2 = Math.floor(Math.random() * abilityFields.length);
        }
        document.getElementById(abilityFields[randomIndex1]).value = parseInt(document.getElementById(abilityFields[randomIndex1]).value) + 1;
        document.getElementById(abilityFields[randomIndex2]).value = parseInt(document.getElementById(abilityFields[randomIndex2]).value) + 1;
    }
}
async function generatePDF() {
    const charName = document.getElementById("charName").value;
    const characterSheet = document.getElementById("characterForm");

    // Create a new jsPDF instance
    const pdf = new jsPDF();

    // Convert character sheet HTML to PDF
    await pdf.html(characterSheet, {
        callback: function(pdf) {
            // Save PDF with character name as filename
            pdf.save(`${charName}_CharacterSheet.pdf`);
        }
    });
}

function downloadPDF(pdfBytes, fileName) {
    const blob = new Blob([pdfBytes], { type: "application/pdf" });
    const link = document.createElement("a");
    link.href = window.URL.createObjectURL(blob);
    link.download = fileName;
    link.click();
}

// Event listener for "Save Character" button click
document.getElementById("saveCharacterBtn").addEventListener("click", function() {
    generatePDF();
});
