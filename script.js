function updateClass() {
    const selectedClass = document.getElementById("class").value;

    // Update ability scores based on selected class
    switch (selectedClass) {
        case "nerdyScholar":
            updateAbilityScores([12, 15, 13, 14, 10, 8]);
            break;
        case "athleticJock":
            updateAbilityScores([15, 14, 13, 10, 12, 8]);
            break;
        case "gothicArtist":
            updateAbilityScores([10, 12, 14, 15, 13, 8]);
            break;
        case "preppyCheerleader":
            updateAbilityScores([10, 14, 13, 12, 15, 8]);
            break;
        case "classClown":
            updateAbilityScores([8, 14, 12, 10, 13, 15]);
            break;
        case "rebelOutsider":
            updateAbilityScores([12, 14, 15, 10, 8, 13]);
            break;
    }

    // Update skills based on selected class
    // Implement this logic
}

function updateAbilityScores(scores) {
    // Update ability score fields in the form
    const abilityFields = ["strength", "dexterity", "constitution", "intelligence", "wisdom", "charisma"];
    abilityFields.forEach((field, index) => {
        document.getElementById(field).value = scores[index];
    });
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
