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
            bookworm: {
                description: "Gain a +2 bonus to Intelligence-based skill checks.",
                effect: "+2 bonus to Intelligence-based skill checks."
            },
            researcher: {
                description: "Can spend extra time studying to gain advantage on Knowledge-based skill checks.",
                effect: "Can spend extra time studying to gain advantage on Knowledge-based skill checks."
            }
        },
        equipment: {
            1: {
                items: ["Books", "Research materials", "Scientific gadgets"],
                description: "Basic tools for studying and conducting research."
            },
            5: {
                items: ["Enhanced study materials", "Portable laboratory kit"],
                description: "Upgraded study materials and a portable laboratory kit for more advanced experiments."
            },
            10: {
                items: ["Master's thesis", "Advanced research facility access"],
                description: "A completed master's thesis and access to state-of-the-art research facilities."
            }
        },
        description: "Nerdy Scholars are the epitome of intellect and curiosity, driven by a relentless pursuit of knowledge.",
        details: "They thrive in academic environments, where their sharp minds unravel complex theories and discover hidden truths. However, their brilliance often isolates them from social circles, leading to awkward interactions and overthinking.",
        negativeDescription: "Social Awkwardness: -1 penalty to Charisma-based skill checks in social situations, as their intellectual prowess overshadows their social grace.\nOverthinking: May become indecisive in high-pressure situations, resulting in a -1 penalty to initiative rolls as they analyze every possible outcome.",
        combatSkills: {
            1: "Analytical Strike (Rank 1): Delivers a precise strike exploiting the opponent's weaknesses, dealing 1d6 extra damage.",
            5: "Eureka Moment (Rank 1): Has a sudden insight during combat, granting advantage on the next Intelligence-based skill check or saving throw.",
            10: "Genius Tactics (Rank 1): Devises a brilliant strategy, allowing allies within 30 feet to add Intelligence modifier to attack rolls for 1 minute."
        }
    },
    athleticJock: {
        bonuses: {
            strength: 2,
        },
        negatives: {
            charisma: -1,
        },
        skills: {
            athleticProwess: {
                description: "Gain a +2 bonus to Strength-based skill checks.",
                effect: "+2 bonus to Strength-based skill checks."
            },
            teamPlayer: {
                description: "Can provide inspiration to teammates during group activities, granting them advantage on skill checks.",
                effect: "Can provide inspiration to teammates during group activities, granting them advantage on skill checks."
            }
        },
        equipment: {
            1: {
                items: ["Sports gear", "Gym equipment", "Team jersey"],
                description: "Basic sports equipment for training and competitions."
            },
            5: {
                items: ["Enhanced sports equipment", "Protein supplements"],
                description: "Upgraded sports gear and protein supplements for improved performance."
            },
            10: {
                items: ["Advanced training gear", "Championship trophy (aesthetic)"],
                description: "Cutting-edge training gear and a championship trophy as a symbol of achievement."
            }
        },
        description: "Athletic Jocks are the powerhouse of physical prowess, dominating sports arenas and rallying their teams to victory.",
        details: "They excel in competitive sports, where their strength and agility shine brightest. However, their competitive nature can lead to a short temper and overconfidence.",
        negativeDescription: "Short Temper: -1 penalty to Charisma-based skill checks when faced with opposition or conflict, as their competitive spirit fuels impulsive reactions.\nOverconfidence: May underestimate opponents, resulting in a -1 penalty to AC when in combat, as they rely too heavily on their physical abilities.",
        combatSkills: {
            1: "Powerful Strike (Rank 1): Delivers a powerful blow, knocking the target prone on a successful hit.",
            5: "Adrenaline Rush (Rank 1): Enters a state of heightened adrenaline, gaining advantage on Strength-based checks and saving throws for 1 minute.",
            10: "Inspiring Presence (Rank 1): Inspires allies within 30 feet, granting them temporary hit points equal to your level + Strength modifier."
        }
    },
gothicArtist: {
    bonuses: {
        wisdom: 2,
    },
    negatives: {
        charisma: -1,
    },
    skills: {
        creativeExpression: {
            description: "Gain a +2 bonus to Wisdom-based skill checks related to artistic endeavors.",
            effect: "+2 bonus to Wisdom-based skill checks related to artistic endeavors."
        },
        mysticAura: {
            description: "Can intimidate others with their dark and mysterious demeanor, granting advantage on Intimidation checks.",
            effect: "Can intimidate others with their dark and mysterious demeanor, granting advantage on Intimidation checks."
        }
    },
    equipment: {
        1: {
            items: ["Art supplies", "Ritualistic items", "Occult artifacts"],
            description: "Essential tools for creating art and delving into mystical practices."
        },
        5: {
            items: ["Enchanted paintbrush", "Casting crystals"],
            description: "Magical implements that enhance artistic abilities and channel arcane energy."
        },
        10: {
            items: ["Cursed artifact", "Dark tapestry"],
            description: "Forbidden artifacts and ancient relics with unknown powers, imbuing the artist with dark creativity."
        }
    },
    combatSkills: {
        1: "Shadow Manipulation: Harness shadows to create illusions or obscure vision, granting advantage on Dexterity (Stealth) checks.",
        5: "Arcane Eruption: Unleash a burst of dark energy that damages and disorients enemies within a radius, forcing them to make a Constitution saving throw or be blinded and deafened for one round.",
        10: "Eldritch Enchantment: Infuse artwork with mystical energies, bringing it to life as a temporary ally that aids in combat."
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
        charismaticLeader: {
            description: "Gain a +2 bonus to Charisma-based skill checks when leading or motivating others.",
            effect: "+2 bonus to Charisma-based skill checks when leading or motivating others."
        },
        teamSpirit: {
            description: "Can inspire allies with pep talks, granting them advantage on saving throws against fear.",
            effect: "Can inspire allies with pep talks, granting them advantage on saving throws against fear."
        }
    },
    equipment: {
        1: {
            items: ["Pom-poms", "Megaphone", "Team banner"],
            description: "Essential accessories for cheering on teammates and boosting morale."
        },
        5: {
            items: ["Spirit squad uniform", "Energy drinks"],
            description: "Official team uniform and energy-boosting beverages for enhanced performance."
        },
        10: {
            items: ["Championship ring", "Victory banner"],
            description: "Symbolic tokens of victory and prestige, representing the cheerleader's success on the field."
        }
    },
    combatSkills: {
        1: "Cheerful Distraction: Distract enemies with energetic cheers and dazzling routines, imposing disadvantage on their next attack roll.",
        5: "Inspiring Rally: Boost allies' morale with an inspiring cheer, granting temporary hit points equal to your Charisma modifier.",
        10: "Victory Dance: Perform a triumphant dance that invigorates allies and demoralizes enemies, granting advantage on attack rolls and saving throws for one round."
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
        naturalEntertainer: {
            description: "Gain a +2 bonus to Charisma-based skill checks related to comedic performances or social interactions.",
            effect: "+2 bonus to Charisma-based skill checks related to comedic performances or social interactions."
        },
        quickWit: {
            description: "Can use humor to defuse tense situations, granting advantage on Persuasion checks.",
            effect: "Can use humor to defuse tense situations, granting advantage on Persuasion checks."
        }
    },
    equipment: {
        1: {
            items: ["Jester hat", "Prank gadgets", "Comedy props"],
            description: "Essential tools for entertaining others and spreading laughter."
        },
        5: {
            items: ["Funny costume", "Whoopee cushion"],
            description: "Outlandish attire and classic gags to enhance comedic performances."
        },
        10: {
            items: ["Golden kazoo", "Pie cannon"],
            description: "Legendary artifacts of comedy, capable of delivering uproarious punchlines and epic pranks."
        }
    },
    combatSkills: {
        1: "Jokester's Jest: Unleash a witty remark or slapstick gag to distract an opponent, imposing disadvantage on their next attack roll.",
        5: "Prankster's Gambit: Execute a clever prank or practical joke to confuse an enemy, forcing them to make a Wisdom saving throw or be incapacitated with laughter for one round.",
        10: "Comic Cacophony: Rally allies with a hilarious battle cry or uproarious punchline, granting them advantage on attack rolls and saving throws for one round."
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
        independentThinker: {
            description: "Gain a +2 bonus to Wisdom-based skill checks when making unconventional decisions.",
            effect: "+2 bonus to Wisdom-based skill checks when making unconventional decisions."
        },
        resistanceToAuthority: {
            description: "Can resist attempts to manipulate or coerce them, granting advantage on saving throws against charm effects from authority figures.",
            effect: "Can resist attempts to manipulate or coerce them, granting advantage on saving throws against charm effects from authority figures."
        }
    },
    equipment: {
        1: {
            items: ["Stealth gear", "Improvised weapons", "Rebellion insignia"],
            description: "Tools of defiance and rebellion, allowing the outsider to navigate society on their own terms."
        },
        5: {
            items: ["Anarchist's manifesto", "Protest signs"],
            description: "Literature and symbols of dissent, inspiring others to challenge the status quo."
        },
        10: {
            items: ["Revolutionary banner", "Mask of anonymity"],
            description: "Icons of revolution and anonymity, empowering the rebel to lead the charge for change."
        }
    },
    combatSkills: {
        1: "Guerrilla Tactics: Utilize hit-and-run tactics and surprise attacks to gain advantage on your first attack roll in combat.",
        5: "Defiance Stance: Assume a defiant posture that grants resistance to damage from the next attack received.",
        10: "Revolutionary Fury: Channel the spirit of rebellion to inspire allies, granting them temporary hit points equal to your Wisdom modifier."
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
        naturalLeader: {
            description: "Gain a +2 bonus to Charisma-based skill checks when organizing or leading group activities.",
            effect: "+2 bonus to Charisma-based skill checks when organizing or leading group activities."
        },
        efficientPlanner: {
            description: "Can strategize and delegate tasks effectively, granting advantage on Intelligence-based skill checks related to planning.",
            effect: "Can strategize and delegate tasks effectively, granting advantage on Intelligence-based skill checks related to planning."
        }
    },
    equipment: {
        1: {
            items: ["Planner", "Organizational tools", "Leadership badge"],
            description: "Tools of command and authority, essential for managing responsibilities and leading with efficiency."
        },
        5: {
            items: ["Campaign posters", "Public speaking guide"],
            description: "Materials for rallying support and honing public speaking skills, vital for political ambitions."
        },
        10: {
            items: ["Executive briefcase", "Official decree stamp"],
            description: "Symbols of executive power and bureaucratic influence, commanding respect and authority."
        }
    },
    combatSkills: {
        1: "Delegate Tactics: Direct allies with strategic commands, granting them a bonus action on their next turn.",
        5: "Motivational Speech: Deliver an inspiring speech that grants temporary hit points to allies within hearing distance.",
        10: "Executive Order: Issue a decree that forces enemies to make a Wisdom saving throw or be compelled to follow your commands for one round."
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
    
   function updateCharacterSheet(selectedClass) {
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
    switch (selectedClass) {
        case "nerdyScholar":
            return "Combat Information for Scholar: Prefers to avoid physical confrontations, relying on intelligence and knowledge. In combat, Scholars utilize their intellect to outmaneuver opponents, focusing on strategic positioning and exploiting weaknesses.";
        case "athleticJock":
            return "Combat Information for Athlete: Excels in physical combat, utilizing strength and athleticism. Athletes charge into battle with raw power, relying on brute force and endurance to overpower foes.";
        case "gothicArtist":
            return "Combat Information for Gothic Artist: Masters of the mystical arts, Gothic Artists wield dark powers to manipulate the battlefield. They channel their inner turmoil into potent spells, weaving shadows and illusions to confound enemies.";
        case "preppyCheerleader":
            return "Combat Information for Preppy Cheerleader: Inspires allies with unwavering optimism and strategic planning. Preppy Cheerleaders boost team morale with inspiring speeches and tactical maneuvers, turning the tide of battle with charisma and cunning.";
        case "classClown":
            return "Combat Information for Class Clown: Masters of deception and misdirection, Class Clowns use humor to disarm foes and sow chaos on the battlefield. They distract enemies with witty banter and comedic antics, creating openings for allies to strike.";
        case "rebelOutsider":
            return "Combat Information for Rebel Outsider: Thrives on unpredictability and unconventional tactics, Rebel Outsiders catch enemies off-guard with guerrilla warfare and hit-and-run tactics. They embrace chaos and disorder, turning the tide of battle through sheer audacity.";
        case "overachievingStudentCouncilPresident":
            return "Combat Information for Overachieving Student Council President: Natural-born leaders, Student Council Presidents inspire allies with tactical precision and strategic planning. They coordinate battlefield maneuvers with efficiency and poise, leading their team to victory through sheer determination.";
        default:
            return "No combat information available.";
    }
}

function generateEquipment(selectedClass) {
    switch (selectedClass) {
        case "nerdyScholar":
            return "Equipment for Scholar: Books, research materials, scientific gadgets. Scholars equip themselves with knowledge and tools, relying on intellect rather than brute force.";
        case "athleticJock":
            return "Equipment for Athlete: Sports gear, gym equipment, team jersey. Athletes gear up for battle with athletic equipment, ready to charge into the fray with strength and agility.";
        case "gothicArtist":
            return "Equipment for Gothic Artist: Art supplies, ritualistic items, occult artifacts. Gothic Artists arm themselves with dark relics and arcane symbols, channeling their inner darkness into powerful spells.";
        case "preppyCheerleader":
            return "Equipment for Preppy Cheerleader: Pom-poms, megaphone, team banner. Preppy Cheerleaders inspire allies with cheerful accessories and team spirit, boosting morale on the battlefield.";
        case "classClown":
            return "Equipment for Class Clown: Jester hat, prank gadgets, comedy props. Class Clowns equip themselves with humorous gadgets and witty repartee, using laughter as their greatest weapon.";
        case "rebelOutsider":
            return "Equipment for Rebel Outsider: Stealth gear, improvised weapons, rebellion insignia. Rebel Outsiders arm themselves with makeshift weapons and symbols of defiance, embracing their role as agents of chaos.";
        case "overachievingStudentCouncilPresident":
            return "Equipment for Student Council President: Planner, organizational tools, leadership badge. Student Council Presidents equip themselves with tools of command and authority, leading their team with efficiency and resolve.";
        default:
            return "No equipment available.";
    }
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
    const selectedClass = document.getElementById("class").value;
    updateCharacterSheet(selectedClass);
    generatePDF();
});
