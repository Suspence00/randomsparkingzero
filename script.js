const characters = [
    { dp: 1, name: "Hercule (Mr. Satan)" },
    { dp: 2, name: "Videl" },
    { dp: 2, name: "Guldo" },
    { dp: 2, name: "Chiaotzu" },
    { dp: 2, name: "Master Roshi" },
    { dp: 2, name: "Master Roshi Max Power" },
    { dp: 2, name: "Yajirobe" },
    { dp: 2, name: "Saibaman" },
    { dp: 2, name: "Frieza Soldier" },
    { dp: 2, name: "Spopovich" },
    { dp: 3, name: "Teen Goku" },
    { dp: 3, name: "Kid Gohan" },
    { dp: 3, name: "Krillin" },
    { dp: 3, name: "Burter" },
    { dp: 3, name: "Jeice" },
    { dp: 3, name: "Recoome" },
    { dp: 3, name: "Cui" },
    { dp: 3, name: "Babidi" },
    { dp: 3, name: "Zarbon" },
    { dp: 3, name: "Super Zarbon" },
    { dp: 3, name: "Dodoria" },
    { dp: 3, name: "Yamcha" },
    { dp: 3, name: "Nappa" },
    { dp: 3, name: "Raditz" },
    { dp: 3, name: "Pan" },
    { dp: 3, name: "Cell Jr" },
    { dp: 4, name: "Base Teen Gohan" },
    { dp: 4, name: "Base Goku (Early)" },
    { dp: 4, name: "Mini Goku (Daima)" },
    { dp: 4, name: "Vegeta (Scouter)" },
    { dp: 4, name: "Base Adult Gohan" },
    { dp: 4, name: "Base Goten" },
    { dp: 4, name: "Great Saiyaman" },
    { dp: 4, name: "Piccolo (early)" },
    { dp: 4, name: "Nail" },
    { dp: 4, name: "Tien" },
    { dp: 4, name: "Base Sword Trunks" },
    { dp: 4, name: "Kid Trunks" },
    { dp: 4, name: "Uub" },
    { dp: 4, name: "Bardock" },
    { dp: 4, name: "Ginyu" },
    { dp: 4, name: "King Cold" },
    { dp: 4, name: "Android 19" },
    { dp: 4, name: "Dr. Gero" },
    { dp: 4, name: "Super Garlic Jr." },
    { dp: 4, name: "Dr. Wheelo" },
    { dp: 4, name: "Turles" },
    { dp: 4, name: "Lord Slug" },
    { dp: 4, name: "Tapion" },
    { dp: 5, name: "Goku Black" },
    { dp: 5, name: "Base Goku (Z-Mid)" },
    { dp: 5, name: "SSJ Goku (Z-Mid)" },
    { dp: 5, name: "Base Goku (Z-End)" },
    { dp: 5, name: "Base Goku (Super)" },
    { dp: 5, name: "Base Goku (GT)" },
    { dp: 5, name: "Great Ape Vegeta" },
    { dp: 5, name: "Base Vegeta (Early)" },
    { dp: 5, name: "Base Vegeta (End)" },
    { dp: 5, name: "Base Vegeta (Super)" },
    { dp: 5, name: "Base Future Gohan" },
    { dp: 5, name: "Piccolo (Fused w. Kami+Nail)" },
    { dp: 5, name: "SSJ Sword Trunks" },
    { dp: 5, name: "Base Melee Trunks" },
    { dp: 5, name: "Base Future Strunks" },
    { dp: 5, name: "SSJ Kid Trunks" },
    { dp: 5, name: "SSJ Goten" },
    { dp: 5, name: "Frieza First Form" },
    { dp: 5, name: "Frieza Second Form" },
    { dp: 5, name: "Frieza Third Form" },
    { dp: 5, name: "Cell First Form" },
    { dp: 5, name: "Cell Second Form" },
    { dp: 5, name: "Android 16" },
    { dp: 5, name: "Android 17 (Z)" },
    { dp: 5, name: "Android 18" },
    { dp: 5, name: "Base Broly (Z)" },
    { dp: 5, name: "Base Broly (Super)" },
    { dp: 5, name: "Giant Lord Slug" },
    { dp: 5, name: "Android 13" },
    { dp: 5, name: "Bojack" },
    { dp: 5, name: "Janemba" },
    { dp: 5, name: "Baby Vegeta" },
    { dp: 5, name: "Base Goku Black" },
    { dp: 5, name: "Zamasu" },
    { dp: 5, name: "Base Cabba" },
    { dp: 5, name: "Base Caulifla" },
    { dp: 5, name: "Base Kale" },
    { dp: 5, name: "Bergamo" },
    { dp: 5, name: "Ribrianne" },
    { dp: 5, name: "Kakunsa" },
    { dp: 5, name: "Roasie" },
    { dp: 6, name: "Dragon Ball Sparking Zero story mode trailer" },
    { dp: 6, name: "Bandai Namco" },
    { dp: 6, name: "SSJ Goku (Z-End)" },
    { dp: 6, name: "SSJ 2 Goku (Z-End)" },
    { dp: 6, name: "SSJ Goku (Super)" },
    { dp: 6, name: "SSJ Goku (GT)" },
    { dp: 6, name: "SSJ Vegeta (Z-Early)" },
    { dp: 6, name: "Super Vegeta" },
    { dp: 6, name: "SSJ Vegeta (Z-End)" },
    { dp: 6, name: "SSJ Vegeta (Super)" },
    { dp: 6, name: "SSJ Teen Gohan" },
    { dp: 6, name: "SSJ Adult Gohan" },
    { dp: 6, name: "SSJ Future Gohan" },
    { dp: 6, name: "SSJ Melee Trunks" },
    { dp: 6, name: "Super Trunks" },
    { dp: 6, name: "SSJ Future Trunks (Super)" },
    { dp: 6, name: "Base Gotenks" },
    { dp: 6, name: "Frieza Fourth Form" },
    { dp: 6, name: "Mecha Frieza" },
    { dp: 6, name: "Frieza (Super)" },
    { dp: 6, name: "Perfect Cell" },
    { dp: 6, name: "Majin Buu" },
    { dp: 6, name: "Majin Buu (Evil)" },
    { dp: 6, name: "Super Buu" },
    { dp: 6, name: "Majuub" },
    { dp: 6, name: "Android 17 (Super)" },
    { dp: 6, name: "Dabura" },
    { dp: 6, name: "Cooler" },
    { dp: 6, name: "Hirudegarn" },
    { dp: 6, name: "Super Baby 1" },
    { dp: 6, name: "Frost" },
    { dp: 6, name: "SSJ Cabba" },
    { dp: 6, name: "SSJ Kale" },
    { dp: 6, name: "Base Kefla" },
    { dp: 6, name: "Dyspo" },
    { dp: 7, name: "SSJ 2 Goku (Z-End)" },
    { dp: 7, name: "SSJ God Goku" },
    { dp: 7, name: "SSJ 3 Goku (GT)" },
    { dp: 7, name: "Majin Vegeta" },
    { dp: 7, name: "SSJ God Vegeta" },
    { dp: 7, name: "SSJ 2 Teen Gohan" },
    { dp: 7, name: "SSJ 2 Adult Gohan" },
    { dp: 7, name: "Ultimate Gohan" },
    { dp: 7, name: "Base Vegito" },
    { dp: 7, name: "Base Gogeta" },
    { dp: 7, name: "SSJ Gotenks" },
    { dp: 7, name: "Frieza Full Power" },
    { dp: 7, name: "Super Perfect Cell" },
    { dp: 7, name: "Buutenks" },
    { dp: 7, name: "Buuhan" },
    { dp: 7, name: "Kid Buu" },
    { dp: 7, name: "SSJ Broly (Z)" },
    { dp: 7, name: "SSJ Broly (Super)" },
    { dp: 7, name: "Final Form Cooler" },
    { dp: 7, name: "Metal Cooler" },
    { dp: 7, name: "Android 13 (Fusion)" },
    { dp: 7, name: "Full Power Bojack" },
    { dp: 7, name: "Super Janemba" },
    { dp: 7, name: "Super Baby 2" },
    { dp: 7, name: "Great Ape Baby" },
    { dp: 7, name: "Syn Shenron" },
    { dp: 7, name: "SSJ 2 Cabba" },
    { dp: 7, name: "SSJ 2 Caulifla" },
    { dp: 7, name: "SSJ Kale (Berserk)" },
    { dp: 7, name: "SSJ Kefla" },
    { dp: 7, name: "Toppo" },
    { dp: 8, name: "Goku Black story mode" },
    { dp: 8, name: "SSJ Blue Goku" },
    { dp: 8, name: "Ultra Instinct Sign Goku" },
    { dp: 8, name: "SSJ 4 Goku" },
    { dp: 8, name: "SSJ Blue Vegeta" },
    { dp: 8, name: "SSJ 4 Vegeta" },
    { dp: 8, name: "Super Vegito" },
    { dp: 8, name: "Super Gogeta (Z)" },
    { dp: 8, name: "SSJ Gogeta (Super)" },
    { dp: 8, name: "SSJ 3 Gotenks" },
    { dp: 8, name: "Golden Frieza" },
    { dp: 8, name: "Omega Shenron" },
    { dp: 8, name: "SSJ Rose Goku Black" },
    { dp: 8, name: "Fused Zamasu" },
    { dp: 8, name: "HIT" },
    { dp: 8, name: "SSJ 2 Kefla" },
    { dp: 8, name: "Jiren" },
    { dp: 8, name: "God Toppo" },
    { dp: 8, name: "Anilaza" },
    { dp: 9, name: "Ultra Instinct Goku" },
    { dp: 9, name: "Legendary SSJ Broly (Z)" },
    { dp: 9, name: "SSJ Broly Full power (Super)" },
    { dp: 9, name: "Fused Zamasu (Half-Corrupted)" },
    { dp: 9, name: "Jiren Full Power" },
    { dp: 10, name: "Blue Vegito" },
    { dp: 10, name: "Blue Gogeta" },
    { dp: 10, name: "SSJ 4 Gogeta (GT)" },
    { dp: 10, name: "Beerus" },
    { dp: 10, name: "Whis" }
];

// Populate DP Level and DP Exact Value dropdowns (1-10)
const dpLevelSelect = document.getElementById('dpLevel');
const dpExactValueSelect = document.getElementById('dpExactValue');

for (let i = 1; i <= 10; i++) {
    let optionLevel = document.createElement('option');
    optionLevel.value = i;
    optionLevel.text = i;
    dpLevelSelect.add(optionLevel);

    let optionExact = document.createElement('option');
    optionExact.value = i;
    optionExact.text = i;
    dpExactValueSelect.add(optionExact);
}

// Populate DP Range dropdown (0-10)
const dpRangeSelect = document.getElementById('dpRange');

for (let i = 0; i <= 10; i++) {
    let optionRange = document.createElement('option');
    optionRange.value = i;
    optionRange.text = i;
    dpRangeSelect.add(optionRange);
}

// Populate Team DP Value dropdowns
const teamExactDPValueSelect = document.getElementById('teamExactDPValue');
const teamMinDPValueSelect = document.getElementById('teamMinDPValue');
const teamMaxDPValueSelect = document.getElementById('teamMaxDPValue');

function populateTeamDPValues(maxDP) {
    // Clear existing options
    teamExactDPValueSelect.innerHTML = '';
    teamMinDPValueSelect.innerHTML = '';
    teamMaxDPValueSelect.innerHTML = '';

    for (let i = 1; i <= maxDP; i++) {
        let optionExact = document.createElement('option');
        optionExact.value = i;
        optionExact.text = i;
        teamExactDPValueSelect.add(optionExact);

        let optionMin = document.createElement('option');
        optionMin.value = i;
        optionMin.text = i;
        teamMinDPValueSelect.add(optionMin);

        let optionMax = document.createElement('option');
        optionMax.value = i;
        optionMax.text = i;
        teamMaxDPValueSelect.add(optionMax);
    }
}

// Handle DP Restriction Options Display
const dpRestrictionSelect = document.getElementById('dpRestriction');
const dpRestrictionOptionDiv = document.getElementById('dpRestrictionOption');
const exactOptionsDiv = document.getElementById('exactOptions');
const rangeOptionsDiv = document.getElementById('rangeOptions');

dpRestrictionSelect.addEventListener('change', () => {
    const dpRestriction = dpRestrictionSelect.value;
    exactOptionsDiv.style.display = dpRestriction === 'exact' ? 'flex' : 'none';
    rangeOptionsDiv.style.display = dpRestriction === 'range' ? 'flex' : 'none';
});

// Handle Team DP Value Options Display
const teamDPValueOptionDiv = document.getElementById('teamDPValueOption');
const teamDPValueTypeSelect = document.getElementById('teamDPValueType');
const teamExactDPOptionDiv = document.getElementById('teamExactDPOption');
const teamRangeDPOptionDiv = document.getElementById('teamRangeDPOption');

teamDPValueTypeSelect.addEventListener('change', () => {
    const dpValueType = teamDPValueTypeSelect.value;
    teamExactDPOptionDiv.style.display = dpValueType === 'exact' ? 'flex' : 'none';
    teamRangeDPOptionDiv.style.display = dpValueType === 'range' ? 'flex' : 'none';
});

// Handle Fight Type Change
const fightTypeSelect = document.getElementById('fightType');

fightTypeSelect.addEventListener('change', () => {
    const fightType = fightTypeSelect.value;
    if (fightType === 'single') {
        dpRestrictionOptionDiv.style.display = 'flex';
        exactOptionsDiv.style.display = dpRestrictionSelect.value === 'exact' ? 'flex' : 'none';
        rangeOptionsDiv.style.display = dpRestrictionSelect.value === 'range' ? 'flex' : 'none';
        teamDPValueOptionDiv.style.display = 'none';
        teamExactDPOptionDiv.style.display = 'none';
        teamRangeDPOptionDiv.style.display = 'none';
    } else {
        dpRestrictionOptionDiv.style.display = 'none';
        exactOptionsDiv.style.display = 'none';
        rangeOptionsDiv.style.display = 'none';
        teamDPValueOptionDiv.style.display = 'flex';
        teamExactDPOptionDiv.style.display = teamDPValueTypeSelect.value === 'exact' ? 'flex' : 'none';
        teamRangeDPOptionDiv.style.display = teamDPValueTypeSelect.value === 'range' ? 'flex' : 'none';

        const maxDP = fightType === 'dp' ? 15 : 50;
        populateTeamDPValues(maxDP);
    }
});

// Initial population based on default fight type
fightTypeSelect.dispatchEvent(new Event('change'));

// Main functionality
const battleBox = document.getElementById('battleBox');
const battleResultDiv = document.getElementById('battleResult');
const displayCharactersButton = document.getElementById('displayCharactersButton');
const charactersListDiv = document.getElementById('charactersList');

battleBox.addEventListener('click', () => {
    const fightType = fightTypeSelect.value;
    const mirrorMatchesAllowed = document.getElementById('mirrorMatches').checked;

    let filteredCharacters = applyDPRestrictions([...characters]);

    // Check if there are enough characters to form a battle
    if (filteredCharacters.length === 0) {
        alert('No characters match the selected DP restrictions.');
        return;
    }

    // Maximum team size
    const maxTeamSize = 5;

    // Generate battle based on fight type
    if (fightType === 'single') {
        // Single Battle: 1v1
        let fighter1 = getRandomCharacter(filteredCharacters, true);
        let fighter2 = getRandomCharacter(filteredCharacters, !mirrorMatchesAllowed);

        if (!mirrorMatchesAllowed && filteredCharacters.length > 0) {
            // Ensure the two fighters are not the same
            while (fighter2.name === fighter1.name && filteredCharacters.length > 0) {
                fighter2 = getRandomCharacter(filteredCharacters, true);
            }
        }

        // Display battle result with colors and layout, including DP values
        battleResultDiv.innerHTML = `
            <h2>Battle Generated:</h2>
            <div class="team-container">
                <div class="team team1">
                    <p class="team-name">Team 1 (DP: ${fighter1.dp})</p>
                    <p class="character-name">${fighter1.name} (DP: ${fighter1.dp})</p>
                </div>
                <div class="vs">VS</div>
                <div class="team team2">
                    <p class="team-name">Team 2 (DP: ${fighter2.dp})</p>
                    <p class="character-name">${fighter2.name} (DP: ${fighter2.dp})</p>
                </div>
            </div>
        `;
    } else {
        // Team Battles
        let maxTeamDP;
        if (teamDPValueTypeSelect.value === 'exact') {
            maxTeamDP = parseInt(teamExactDPValueSelect.value);
        } else if (teamDPValueTypeSelect.value === 'range') {
            const minDP = parseInt(teamMinDPValueSelect.value);
            const maxDP = parseInt(teamMaxDPValueSelect.value);
            maxTeamDP = getRandomInt(minDP, maxDP);
        } else if (teamDPValueTypeSelect.value === 'random') {
            const maxDP = fightType === 'dp' ? 15 : 50;
            maxTeamDP = getRandomInt(1, maxDP);
        }

        const teamSizeLimit = Math.min(maxTeamSize, Math.floor(filteredCharacters.length / 2));

        const team1 = [];
        const team2 = [];

        let team1DP = 0;
        let team2DP = 0;

        let availableCharactersTeam1 = [...filteredCharacters];
        let availableCharactersTeam2 = mirrorMatchesAllowed ? [...filteredCharacters] : [...availableCharactersTeam1];

        // Build Team 1
        while (team1DP < maxTeamDP && team1.length < teamSizeLimit && availableCharactersTeam1.length > 0) {
            const char = getRandomCharacter(availableCharactersTeam1, true);
            if (team1DP + char.dp > maxTeamDP) {
                continue; // Skip if adding this character exceeds the DP limit
            }
            team1.push(char);
            team1DP += char.dp;
        }

        // Build Team 2
        while (team2DP < maxTeamDP && team2.length < teamSizeLimit && availableCharactersTeam2.length > 0) {
            const char = getRandomCharacter(availableCharactersTeam2, true);
            if (team2DP + char.dp > maxTeamDP) {
                continue; // Skip if adding this character exceeds the DP limit
            }
            team2.push(char);
            team2DP += char.dp;
        }

        // Display battle result with colors and layout, including DP values
        const team1Names = team1.map(char => `<p class="character-name">${char.name} (DP: ${char.dp})</p>`).join('');
        const team2Names = team2.map(char => `<p class="character-name">${char.name} (DP: ${char.dp})</p>`).join('');

        battleResultDiv.innerHTML = `
            <h2>Battle Generated:</h2>
            <div class="team-container">
                <div class="team team1">
                    <p class="team-name">Team 1 (Total DP: ${team1DP})</p>
                    ${team1Names}
                </div>
                <div class="vs">VS</div>
                <div class="team team2">
                    <p class="team-name">Team 2 (Total DP: ${team2DP})</p>
                    ${team2Names}
                </div>
            </div>
        `;
    }

    // Add animation class
    battleResultDiv.classList.remove('fade-in');
    void battleResultDiv.offsetWidth; // Trigger reflow
    battleResultDiv.classList.add('fade-in');

    battleResultDiv.style.display = 'block';

    // Hide characters list if visible
    charactersListDiv.style.display = 'none';
});

// Display Characters Button Functionality
displayCharactersButton.addEventListener('click', () => {
    if (charactersListDiv.style.display === 'none') {
        // Get filtered characters based on selected options
        const filteredCharacters = applyDPRestrictions([...characters]);

        if (filteredCharacters.length === 0) {
            alert('No characters match the selected DP restrictions.');
            return;
        }

        // Populate the characters list
        let charactersHTML = '<h2>Available Characters</h2>';
        charactersHTML += '<ul>';
        filteredCharacters.forEach(char => {
            charactersHTML += `<li class="character-item">${char.name} (DP: ${char.dp})</li>`;
        });
        charactersHTML += '</ul>';
        charactersListDiv.innerHTML = charactersHTML;
        charactersListDiv.style.display = 'block';

        // Hide battle result if visible
        battleResultDiv.style.display = 'none';
    } else {
        // Hide characters list
        charactersListDiv.style.display = 'none';
    }
});

// Function to apply DP Restrictions
function applyDPRestrictions(charactersArray) {
    const fightType = fightTypeSelect.value;
    let filteredCharacters = charactersArray;

    if (fightType === 'single') {
        const dpRestriction = dpRestrictionSelect.value;

        // Apply DP Restrictions for Single Battle
        if (dpRestriction === 'exact') {
            const dpExactValue = parseInt(dpExactValueSelect.value);
            filteredCharacters = filteredCharacters.filter(char => char.dp === dpExactValue);
        } else if (dpRestriction === 'range') {
            const dpLevel = parseInt(dpLevelSelect.value);
            const dpRange = parseInt(dpRangeSelect.value);
            const dpDirection = document.getElementById('dpDirection').value;

            let minDP = dpLevel;
            let maxDP = dpLevel;

            if (dpDirection === 'plus') {
                maxDP = dpLevel + dpRange;
            } else if (dpDirection === 'minus') {
                minDP = dpLevel - dpRange;
            } else {
                minDP = dpLevel - dpRange;
                maxDP = dpLevel + dpRange;
            }

            minDP = Math.max(1, minDP);
            maxDP = Math.min(10, maxDP);

            filteredCharacters = filteredCharacters.filter(char => char.dp >= minDP && char.dp <= maxDP);
        }
        // If dpRestriction is 'random', no filtering is applied.
    }
    // For Team Battle and DP Battle, no DP Restriction is applied to individual characters.

    return filteredCharacters;
}

// Function to get a random character
function getRandomCharacter(array, remove = false) {
    if (array.length === 0) return null;
    const index = Math.floor(Math.random() * array.length);
    if (remove) {
        return array.splice(index, 1)[0];
    } else {
        return array[index];
    }
}

// Function to get a random integer between min and max (inclusive)
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
