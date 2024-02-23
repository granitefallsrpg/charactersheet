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
        description: "Nerdy Scholars are intellectual powerhouses, known for their sharp minds and insatiable thirst for knowledge.",
        details: "While Nerdy Scholars excel in academic pursuits, they may struggle in social situations due to social awkwardness and overthinking.",
        negativeDescription: "Social Awkwardness: -1 penalty to Charisma-based skill checks in social situations.\nOverthinking: May become indecisive in high-pressure situations, resulting in a -1 penalty to initiative rolls."
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
        description: "Athletic Jocks are physical powerhouses, dominating sports fields and leading their teams to victory.",
        details: "While Athletic Jocks excel in physical activities and team sports, they may struggle with short temper and overconfidence.",
        negativeDescription: "Short Temper: -1 penalty to Charisma-based skill checks when faced with opposition or conflict.\nOverconfidence: May underestimate opponents, resulting in a -1 penalty to AC when in combat."
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
        description: "Gothic Artists are creative souls, expressing themselves through their unique artistic vision and mystic aura.",
        details: "While Gothic Artists thrive in artistic endeavors and mystic pursuits, they may struggle with isolationism and emotional turmoil.",
        negativeDescription: "Isolationist: -1 penalty to Charisma-based skill checks when attempting to interact with mainstream social groups.\nEmotional Turmoil: May succumb to mood swings, resulting in a -1 penalty to concentration checks."
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
        description: "Preppy Cheerleaders are charismatic leaders, spreading positivity and team spirit wherever they go.",
        details: "While Preppy Cheerleaders shine as natural leaders and motivators, they may struggle with entitled attitudes and peer pressure.",
        negativeDescription: "Entitled Attitude: -1 penalty to Wisdom-based skill checks when faced with challenges that require humility or empathy.\nPeer Pressure: May succumb to social expectations, resulting in a -1 penalty to Wisdom saving throws against charm effects."
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
        description: "Class Clowns are masters of humor, using their quick wit and natural charm to entertain and diffuse tension.",
        details: "While Class Clowns thrive as entertainers and social butterflies, they may struggle with attention-seeking behavior and disruptive tendencies.",
        negativeDescription: "Attention Seeker: -1 penalty to Wisdom-based skill checks when focus and concentration are required.\nDisruptive Behavior: May struggle to take situations seriously, resulting in a -1 penalty to initiative rolls during combat encounters."
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
        description: "Rebel Outsiders are nonconformists, challenging authority and forging their own path with independence and resilience.",
        details: "While Rebel Outsiders excel as independent thinkers and resilient individuals, they may struggle with alienation and risk-taking tendencies.",
        negativeDescription: "Alienation: -1 penalty to Charisma-based skill checks when attempting to connect with mainstream social groups.\nRisk Taker: May act impulsively, resulting in a -1 penalty to AC when in combat."
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
        description: "Overachieving Student Council Presidents are natural leaders, guiding their peers with charisma and efficiency.",
        details: "While Overachieving Student Council Presidents excel in leadership and planning, they may struggle with perfectionism and burnout.",
        negativeDescription: "Perfectionist: -1 penalty to Wisdom-based skill checks when faced with situations that require adaptability or compromise.\nBurnout: May become overwhelmed by responsibilities, resulting in a -1 penalty to initiative rolls during high-stress situations."
    }
};
// Event listener for changes to the class select dropdown
document.getElementById("class").addEventListener("change", function() {
    updateClass();
});

 function updateClass() {
    const selectedClass = document.getElementById("class").value;

    // Update ability scores based on selected class
    switch (selectedClass) {
        case "nerdyScholar":
            updateAbilityScores({ strength: 12, dexterity: 15, constitution: 13, intelligence: 14, wisdom: 10, charisma: 8 }, classDetails[selectedClass].bonuses, classDetails[selectedClass].negatives);
            break;
        case "athleticJock":
            updateAbilityScores({ strength: 15, dexterity: 14, constitution: 13, intelligence: 10, wisdom: 12, charisma: 8 }, classDetails[selectedClass].bonuses, classDetails[selectedClass].negatives);
            break;
        case "gothicArtist":
            updateAbilityScores({ strength: 10, dexterity: 12, constitution: 14, intelligence: 15, wisdom: 13, charisma: 8 }, classDetails[selectedClass].bonuses, classDetails[selectedClass].negatives);
            break;
        case "preppyCheerleader":
            updateAbilityScores({ strength: 10, dexterity: 14, constitution: 13, intelligence: 12, wisdom: 15, charisma: 8 }, classDetails[selectedClass].bonuses, classDetails[selectedClass].negatives);
            break;
        case "classClown":
            updateAbilityScores({ strength: 8, dexterity: 14, constitution: 12, intelligence: 10, wisdom: 13, charisma: 15 }, classDetails[selectedClass].bonuses, classDetails[selectedClass].negatives);
            break;
        case "rebelOutsider":
            updateAbilityScores({ strength: 12, dexterity: 14, constitution: 15, intelligence: 10, wisdom: 8, charisma: 13 }, classDetails[selectedClass].bonuses, classDetails[selectedClass].negatives);
            break;
    }
    
    // Update skills based on selected class
    updateSkills(selectedClass);

    // Update class description and details
    updateClassDetails(selectedClass);
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
    document.getElementById("classDescription").textContent = description;
    document.getElementById("classDetails").textContent = details;
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

