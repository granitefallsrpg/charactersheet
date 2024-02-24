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
     const selectedLevel = parseInt(document.getElementById("level").value);

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
    updateSkills(selectedClass,selectedLevel));

    // Update class description and details
    updateClassDetails(selectedClass);

    // Update combat information based on selected class
    updateCombatInfo(selectedClass);

    // Update equipment based on selected class
    updateEquipment(selectedClass,selectedLevel));
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
    switch (selectedClass) {
        case "nerdyScholar":
            return "Combat Information for Scholar: Prefers to avoid physical confrontations, relying on intelligence and knowledge. In combat, Scholars utilize their intellect to outmaneuver opponents, focusing on strategic positioning and exploiting weaknesses. They possess a vast array of academic knowledge, allowing them to identify weaknesses in their enemies and exploit them effectively.";
        case "athleticJock":
            return "Combat Information for Athlete: Excels in physical combat, utilizing strength and athleticism. Athletes charge into battle with raw power, relying on brute force and endurance to overpower foes. They are highly trained in various combat techniques, such as grappling and hand-to-hand combat, making them formidable opponents in close-quarters combat.";
        case "gothicArtist":
            return "Combat Information for Gothic Artist: Masters of the mystical arts, Gothic Artists wield dark powers to manipulate the battlefield. They channel their inner turmoil into potent spells, weaving shadows and illusions to confound enemies. Gothic Artists possess a deep understanding of the occult and are adept at manipulating dark energies to unleash devastating spells upon their enemies.";
        case "preppyCheerleader":
            return "Combat Information for Preppy Cheerleader: Inspires allies with unwavering optimism and strategic planning. Preppy Cheerleaders boost team morale with inspiring speeches and tactical maneuvers, turning the tide of battle with charisma and cunning. They are skilled in rallying their allies and coordinating attacks, making them invaluable leaders on the battlefield.";
        case "classClown":
            return "Combat Information for Class Clown: Masters of deception and misdirection, Class Clowns use humor to disarm foes and sow chaos on the battlefield. They distract enemies with witty banter and comedic antics, creating openings for allies to strike. Class Clowns are highly unpredictable and excel at improvisation, making them unpredictable adversaries.";
        case "rebelOutsider":
            return "Combat Information for Rebel Outsider: Thrives on unpredictability and unconventional tactics, Rebel Outsiders catch enemies off-guard with guerrilla warfare and hit-and-run tactics. They embrace chaos and disorder, turning the tide of battle through sheer audacity. Rebel Outsiders are experts at guerrilla tactics, utilizing stealth and surprise to outmaneuver their opponents.";
        case "overachievingStudentCouncilPresident":
            return "Combat Information for Overachieving Student Council President: Natural-born leaders, Student Council Presidents inspire allies with tactical precision and strategic planning. They coordinate battlefield maneuvers with efficiency and poise, leading their team to victory through sheer determination. Student Council Presidents possess exceptional organizational skills and are adept at coordinating complex strategies in the heat of battle.";
        default:
            return "No combat information available.";
    }
}

function generateEquipment(selectedClass) {
    switch (selectedClass) {
        case "nerdyScholar":
            return "Equipment for Scholar: Books, research materials, scientific gadgets. Scholars equip themselves with knowledge and tools, relying on intellect rather than brute force. They may also carry specialized equipment such as analytical devices and protective gear designed for field research.";
        case "athleticJock":
            return "Equipment for Athlete: Sports gear, gym equipment, team jersey. Athletes gear up for battle with athletic equipment, ready to charge into the fray with strength and agility. They often carry specialized sports equipment that can be repurposed for combat, such as weighted training vests and agility-enhancing footwear.";
        case "gothicArtist":
            return "Equipment for Gothic Artist: Art supplies, ritualistic items, occult artifacts. Gothic Artists arm themselves with dark relics and arcane symbols, channeling their inner darkness into powerful spells. They may also carry ritualistic items and artifacts imbued with mystical energies to enhance their spellcasting abilities.";
        case "preppyCheerleader":
            return "Equipment for Preppy Cheerleader: Pom-poms, megaphone, team banner. Preppy Cheerleaders inspire allies with cheerful accessories and team spirit, boosting morale on the battlefield. They often carry accessories that symbolize team unity and spirit, such as team banners and colorful pom-poms.";
        case "classClown":
            return "Equipment for Class Clown: Jester hat, prank gadgets, comedy props. Class Clowns equip themselves with humorous gadgets and witty repartee, using laughter as their greatest weapon. They may also carry a variety of prank gadgets and props designed to distract and confuse their opponents.";
        case "rebelOutsider":
            return "Equipment for Rebel Outsider: Stealth gear, improvised weapons, rebellion insignia. Rebel Outsiders arm themselves with makeshift weapons and symbols of defiance, embracing their role as agents of chaos. They often carry lightweight and easily concealable weapons, as well as insignia and symbols representing their rebellious nature.";
        case "overachievingStudentCouncilPresident":
            return "Equipment for Student Council President: Planner, organizational tools, leadership badge. Student Council Presidents equip themselves with tools of command and authority, leading their team with efficiency and resolve. They often carry organizational tools such as planners and communication devices, as well as badges or insignia symbolizing their leadership status.";
        default:
            return "No equipment available.";
    }
}

function generateSkills(selectedClass, selectedLevel) {
    // Level 1 Skills
    let skills = "Standard Skills:\n";
    switch (selectedClass) {
        case "nerdyScholar":
            skills += "- Researcher: Scholars excel in academic pursuits, gaining proficiency in various fields of study and knowledge-based skills. They rely on intellect and strategy to overcome challenges, utilizing their vast repository of knowledge to outsmart opponents.";
            break;
        case "athleticJock":
            skills += "- Athlete: Jocks are masters of physical prowess, specializing in combat techniques and athletic feats. They rely on strength, speed, and agility to overcome obstacles, charging into battle with unmatched ferocity and determination.";
            break;
        case "gothicArtist":
            skills += "- Occultist: Gothic Artists harness the power of darkness, wielding arcane spells and rituals to manipulate the battlefield. They tap into their inner darkness to cast potent spells and summon shadowy allies, creating an aura of fear and mystique.";
            break;
        case "preppyCheerleader":
            skills += "- Inspirer: Preppy Cheerleaders inspire allies with their unwavering optimism and infectious enthusiasm. They boost team morale with inspiring speeches and strategic maneuvers, leading their comrades to victory through sheer charisma and determination.";
            break;
        case "classClown":
            skills += "- Trickster: Class Clowns are masters of deception and misdirection, using humor and wit to confound enemies. They excel at improvisation and unpredictability, turning the tide of battle with their comedic antics and clever tricks.";
            break;
        case "rebelOutsider":
            skills += "- Guerrilla: Rebel Outsiders thrive on chaos and unpredictability, utilizing guerrilla tactics and hit-and-run strategies to outmaneuver opponents. They are experts at sabotage and subterfuge, striking from the shadows with lethal precision.";
            break;
        case "overachievingStudentCouncilPresident":
            skills += "- Leader: Student Council Presidents lead by example, inspiring allies with their strategic brilliance and unwavering resolve. They coordinate battlefield maneuvers with precision and efficiency, turning the tide of battle through sheer determination.";
            break;
        default:
            skills += "- No specific skills available.";
    }

    // Level 5 Skills
    if (selectedLevel >= 5) {
        skills += "\nLevel 5 Skills:\n";
        switch (selectedClass) {
            case "nerdyScholar":
                skills += "- Advanced Researcher: By spending extra time studying a subject, the Nerdy Scholar gains advantage on Knowledge-based skill checks. Additionally, they gain proficiency in one additional skill of their choice, reflecting their deepening expertise in various academic disciplines.";
                break;
            case "athleticJock":
                skills += "- Tactical Athlete: Utilizing their knowledge of opponents' movements and weaknesses, the Athletic Jock can analyze foes during combat. Once successfully grappling an opponent, they gain advantage on subsequent attack rolls against that enemy, representing their ability to exploit vulnerabilities.";
                break;
            case "gothicArtist":
                skills += "- Dark Conjurer: The Gothic Artist taps into their mystical abilities to summon minor shadow creatures once per day. These creatures can aid in combat by attacking enemies or providing assistance to allies, adding an extra layer of versatility to the Artist's arsenal.";
                break;
            case "preppyCheerleader":
                skills += "- Inspiring Presence: Through an empowering pep talk, the Preppy Cheerleader boosts the morale of their allies. Once per short rest, they can grant temporary hit points to nearby allies equal to their Charisma modifier, inspiring them to push through adversity.";
                break;
            case "classClown":
                skills += "- Master of Distraction: Using humor and antics, the Class Clown distracts enemies, imposing disadvantage on attack rolls against allies within 10 feet. By creating chaos and confusion on the battlefield, they disrupt enemy focus and protect their comrades from harm.";
                break;
            case "rebelOutsider":
                skills += "- Guerrilla Tactics: The Rebel Outsider specializes in guerrilla warfare, setting up traps and ambushes with greater efficiency. Once per combat encounter, they can double the damage of their sneak attacks, catching enemies off-guard and dealing devastating blows.";
                break;
            case "overachievingStudentCouncilPresident":
                skills += "- Strategic Planner: With unparalleled strategic acumen, the Student Council President can devise tactical battle plans on the fly. By coordinating battlefield maneuvers with precision, they grant allies advantage on initiative rolls and increased movement speed during the first round of combat.";
                break;
            default:
                skills += "- No additional skills available.";
        }
    }

    // Level 10 Skills
    if (selectedLevel >= 10) {
        skills += "\nLevel 10 Skills:\n";
        switch (selectedClass) {
            case "nerdyScholar":
                skills += "- Genius Inventor: The Scholar attains mastery in crafting magical items and inventions of unparalleled complexity. They can create artifacts that reshape reality itself, unlocking the secrets of the universe through their unparalleled intellect and ingenuity.";
                break;
            case "athleticJock":
                skills += "- Indomitable Strength: Achieving the pinnacle of physical prowess, the Jock gains the ability to perform feats of unparalleled strength. From lifting colossal weights to shattering obstacles with sheer force, they embody the epitome of raw power and athleticism.";
                break;
            case "gothicArtist":
                skills += "- Dark Artistry: The Artist ascends to new heights of magical mastery, wielding dark powers that defy comprehension. They can unleash devastating spells that manipulate reality itself, bending shadows to their will and enveloping the battlefield in darkness.";
                break;
            case "preppyCheerleader":
                skills += "- Charismatic Leader: Becoming a beacon of inspiration, the Cheerleader rallies allies with unwavering resolve and strategic brilliance. They can inspire feats of heroism and courage in their companions, turning the tide of battle with their sheer force of will.";
                break;
            case "classClown":
                skills += "- Master of Chaos: Embracing chaos and unpredictability, the Clown becomes a force of nature on the battlefield. They sow discord and confusion among enemies, turning allies against each other and exploiting the resulting chaos to secure victory.";
                break;
            case "rebelOutsider":
                skills += "- Freedom Fighter: Leading a rebellion against oppression, the Rebel becomes a symbol of hope and defiance. They inspire others to rise up and challenge tyranny, rallying disparate factions to fight for a common cause.";
                break;
            case "overachievingStudentCouncilPresident":
                skills += "- Visionary Strategist: With unmatched foresight and strategic brilliance, the President orchestrates victories on a grand scale. They anticipate enemy movements with uncanny accuracy and devise countermeasures that turn the tide of even the most desperate battles.";
                break;
            default:
                skills += "- No additional skills available.";
        }
    }

    return skills;
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

function updateSkills(selectedClass, selectedLevel) {
    const skills = generateSkills(selectedClass, selectedLevel); // Generate skills based on selected class and level
    const skillsContainer = document.getElementById("skills");
    skillsContainer.innerHTML = "<h3>Skills</h3>";

    // Display skills
    skillsContainer.innerHTML += `<p>${skills}</p>`;
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
    const selectedClass = document.getElementById("class").value; // Get the selected class
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

    // Update skills based on selected class and level
    updateSkills(selectedClass, selectedLevel);

    // Update combat information based on selected class
    updateCombatInfo(selectedClass);

    // Update class details based on selected class
    updateClassDetails(selectedClass);

    // Update equipment based on selected class and level
    updateEquipment(selectedClass, selectedLevel);
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
