/*
    Object Practice

    Gardening!

    You were hired to work as a landscaper for a large estate.

    See garden.jpg

    The owner wants you to help them organize their gardens.

    They have decided there will be three gardens: the rose arbor, 
    the perennial garden, and the slope planters.

    You want to use your newly learned programming skills to make
    this job easier.  

    Complete the following exercises to make your work on the garden easier.
*/

/*
    Note, To run the tests for an exercise run the entire file!
    Do not just highlight a section and try to run it, because the tests will
    throw an exception 
    ReferenceError: compareArray is not defined

    If you see that exception, make sure you deselect any text and then click Run Code again

    Remember to Save the file before you click Run Code!
*/

/* ---------------------------------------------------------------------------
    Exercise One

    Creating a plant

    In order to keep track of your plants, you need to store them in your program.
    Complete the getPlant() function, which returns an object representing a plant.
    It should include all of the properties listed in the comment above the function.
*/

/**
 * getPlant - Produces an object respresenting a plant.  It should have the following properties:
 * @param {string} type - The Type of plant.  Possible values are [ "rose", "orchid", "lily", "lavender", "poppy", "begonia", "snapdragon", "marigold"] 
 * @param {boolean} isPerennial - A boolean showing if the plant is a perennial or not
 * @param {string} leafDescription - A visual description of the leaves
 * @param {string} leafColor - A string representing the leaf color
 * @param {string} flowerColor - A string representing the color of the flower
 * @param {string} flowerDescription - A visual description of the flower
 * @param {number} gallonsWaterPerWeek - 0.0 to 3.0, representing the number of gallons of water needed per week for the plant
 * @param {number} amountOfSunNeeded - 0 to 10, representing the amount of sun needed
 */
function getPlant(type, isPerennial, leafDescription, leafColor, flowerColor, flowerDescription, gallonsWaterPerWeek, amountOfSunNeeded) {
    // Your Code Here!
    // Create a plant object, populate it with all of those values, and return it
}
/* 
   -------TESTS---------------------------------------------------------------
   Run these commands to make sure you did it right. They should all be true.
*/
console.log("-----Tests for Exercise One-----");
let plantProperties = getAllTestPlants()[0];
console.log("* Get a rose");
let plant1 = getPlant(...plantProperties); // this is called a "spread" operator, it takes every value in the array and passes each into the function as a parameter
let values1 = Object.values(plant1);
let hasEveryProperty = true;
for (let property of plantProperties) {
    if (!values1.includes(property)) {
        hasEveryProperty = false;
        console.log(`ERROR - The plant is missing a value: ${property}`);
    }
}
console.log(hasEveryProperty);

/* ------------------------------------------------
    Exercise Two

    The owner wants you to decide where to put every new plant they get.

    Each plant must go in one of the three gardens of the estate.

    The getEstate() has already been written for you, which returns an object representing the entire estate.
    The estate contains three collections of plants: 
    the roseArbor, the perennialGarden, and the slopePlanters.

    Now complete the function addPlantToEstate()
    This should decide, based upon the plant's properties, where to put the plant in the estate.  

    The rose arbor should contain all of the roses.
    The perennial garden should contain only perennials.  However, the perennial garden doesn't get that much sun.  
    No plants with an amountOfSunNeeded greater than 5 should be placed in the perennial garden.
    The rest of the plans should be placed in the slop planters.
*/

function getEstate() {
    let estate = {
        roseArbor: [],
        perennialGarden: [],
        slopePlanters: [],
    };
    return estate;
}

function addPlantToEstate(estate, plant) {
    // Your Code Here!
    // decide where to put the plant according to its features
}


/* 
   -------TESTS----------------------------------------------------------------
   Run these commands to make sure you did it right. They should all be true.
*/
console.log("-----Tests for Exercise Two-----");
let plants2 = getAllTestPlants();
let estate2 = getEstate();

console.log("* Add a rose");
let rose2 = getPlant(...plants2[0]);
addPlantToEstate(estate2, rose2);
console.log(estate2.roseArbor.length === 1 && estate2.perennialGarden.length === 0 && estate2.slopePlanters.length === 0 && estate2.roseArbor[0] === rose2);

console.log("* Add another rose");
addPlantToEstate(estate2, rose2);
console.log(estate2.roseArbor.length === 2 && estate2.perennialGarden.length === 0 && estate2.slopePlanters.length === 0 && estate2.roseArbor[1] === rose2);

console.log("* Add a perrenial");
let orchid2 = getPlant(...plants2[1]);
addPlantToEstate(estate2, orchid2);
console.log(estate2.roseArbor.length === 2 && estate2.perennialGarden.length === 1 && estate2.slopePlanters.length == 0 && estate2.perennialGarden[0] === orchid2);

console.log("* Add a high sun perrenial");
let lavender2 = getPlant(...plants2[3]);
addPlantToEstate(estate2, lavender2);
console.log(estate2.roseArbor.length === 2 && estate2.perennialGarden.length === 1 && estate2.slopePlanters.length == 1 && estate2.slopePlanters[0] === lavender2);

console.log("* Add a non-perrenial");
let marigold2 = getPlant(...plants2[7]);
addPlantToEstate(estate2, marigold2);
console.log(estate2.roseArbor.length === 2 && estate2.perennialGarden.length === 1 && estate2.slopePlanters.length == 2 && estate2.slopePlanters[1] === marigold2);


/* ------------------------------------------------
    Exercise Three

    The owner wants to have an easy way to hear about the plants in their garden.

    So you decide to write some functions which describe the plants.

    Complete the describePlant(), describePlants(), and describeGarden() functions below.

    They should each return a string, which is a readible english paragraph that nicely describes
    the visual features of the plant or a list of plants, or the entire estate.

    Feel free to be as elaborate as you wish!

    If you want examples of different plants, set a breakpoint and run the test. 
    It will go through several example plants.
    
    Try to have as little redundent code as possible! 
    
    Hint: describeEstate can call describeGarden which can call describePlant

    Hint2: Use Template literals here to make this easy! If you have not used those yet,
    read up on them here: https://flaviocopes.com/javascript-template-literals/
*/

// Example: "A Rose plant which has green leaves that are rounded with a point.  The flowers are red concentric circles of pedals. "
function describePlant(plant) {
    let description = "";
    // Your Code Here!
    // Return a string describing all the visual features of the given plant
    return description;
}

// Example: "The Rose Garden has 10 types of plants in it.  It contains: "
function describeGarden(gardenName, listOfPlants) {
    let description = "";
    // Your Code Here!
    // Given a list of plants, describe every plant in the list.
    return description;
}

function describeEstate(estate) {
    let description = "";
    // Your Code Here!
    // Return a string describing all the different visual features of all the gardens in the estate.
    return description
}

/* 
   -------TESTS----------------------------------------------------------------
   Run these commands to make sure you did it right. They should all be true.
*/
console.log("-----Tests for Exercise Three-----");
let estate3 = populateEstate();
console.log("* describePlant works and includes the flower color");
let plantDescription3 = describePlant(estate3.roseArbor[0]);
console.log(plantDescription3);
console.log(plantDescription3 && plantDescription3.length > 0 && plantDescription3.indexOf(estate3.roseArbor[0].flowerColor) > -1);

console.log("* describeGarden works and includes the flower color");
let gardenDescription3 = describeGarden("Rose Arbor", estate3.roseArbor);
console.log(gardenDescription3);
console.log(gardenDescription3 && gardenDescription3.length > 0 && gardenDescription3.indexOf(estate3.roseArbor[0].flowerColor) > -1);

console.log("* describeEstate works");
let estateDescription3 = describeEstate(estate3);
console.log(estateDescription3);
console.log(estateDescription3 && estateDescription3.length > 0 && estateDescription3.indexOf(estate3.roseArbor[0].flowerColor) > -1);


/* ---------------------------------------------------------------------------
    Exercise Four

    The owner wants you to tell them how much water the entire garden is going
    to need per week.

    Complete the calculateWaterUsagePerWeek() function.

    This should return a number which is the total number of gallons of water
    needed for the whole estate.

    Try not to create too much duplicate code!
    
    Hint: One way to avoid duplicate code is to create another function which 
    tallies the gallons used in an array of plants, then use that for each garden.
*/

function calculateWaterUsagePerWeek(estate) {
    let numGallons = 0;
    // Your Code Here!

    return numGallons;
}


/* 
   -------TESTS---------------------------------------------------------------
   Run these commands to make sure you did it right. They should all be true.
*/
console.log("-----Tests for Exercise Four-----");
let estate4 = getEstate();
console.log("* Empty Estate");
let emptyGallons = calculateWaterUsagePerWeek(estate4);
console.log(emptyGallons === 0);

console.log("* Calculate Whole Estate is equal to 12.");
estate4 = populateEstate();
let totalGallons = calculateWaterUsagePerWeek(estate4);
console.log(totalGallons === 12);

/* ---------------------------------------------------------------------------
    Exercise Five

    Clone a plant

    The owner wants more colors of roses, so they have devised a way to
    alter the color of a plant.
    They want you to clone each of the roses in the garden giving them more
    elaborate colors.

    First, comple cloneARose().
    Given a plant, this should clone it and return a copy.

    Complete cloneAllTheRoses().  
    This function should go attempt to clone all the roses in the garden, and then change the clone's color
    using the owner's algorithm.

    However!  Due to a flaw in the color changing process, there is a chance that a rose will become flawed
    after changing the color.
    If you attempt to modify a flawed flower, it will produce a flowerless
    plant.

    Make sure your algorithm does not clone or change the color of flawed plants.
*/

// The Owner's proprietary color changing algorithm.
// DO NOT CHANGE ANYTHING IN THIS
function changeColorOfPlant(plant) {
    let newColors = ["Amber", "Crimson", "Aqua", "Cerulean Blue", "Flamingo", "Gun Smoke", "Jade", "Merigold", "Mustard", "Periwinkle"];
    // ~~ Magic Genetic Engineering ~~
    let randIndex = Math.floor(Math.random() * newColors.length);

    if (plant.isFlawed) {
        plant.flowerDescription = "wilted sad buds with no pedals.";
        plant.flowerColor = null;
    } else {
        plant.flowerColor = newColors[randIndex];
    }

    let randomChance = Math.floor(Math.random() * 3);
    if (randomChance < 1) {
        plant.isFlawed = true;
    }
}
// DO NOT CHANGE ANYTHING IN THIS


function cloneRose(plant) {
    let clone = {};
    // Your Code Here!
    // Given a plant, clone it and return the new plant
    return clone;
}


function cloneAllTheRoses(estate) {
    // Your Code Here! 
    // This should attempt to clone every plant, modify the clone's color, and add the plant to the garden.
    // Just watch out for flawed plants

    // Also, watch out for modifying an array you are currently looping through!  How can you avoid that?
    // Hint: Maybe don't put the new plants immediately into the rose arbor, maybe store them somewhere
    // until you have finished iterating?
}


/* 
   -------TESTS---------------------------------------------------------------
   Run these commands to make sure you did it right. They should all be true.
*/
console.log("-----Tests for Exercise Four-----");
let estate5 = populateEstate();

console.log("* Clone Rose");
let rose5 = estate5.roseArbor[0];
let rose5Copy = cloneRose(rose5);
console.log(rose5Copy &&
    rose5Copy.type === rose5.type &&
    rose5Copy.isPerennial === rose5.isPerennial &&
    rose5Copy.leafDescription === rose5.leafDescription &&
    rose5Copy.leafColor === rose5.leafColor &&
    rose5Copy.flowerColor === rose5.flowerColor &&
    rose5Copy.flowerDescription === rose5.flowerDescription &&
    rose5Copy.gallonsWaterPerWeek === rose5.gallonsWaterPerWeek &&
    rose5Copy.amountOfSunNeeded === rose5.amountOfSunNeeded);


console.log("* Clone All Roses - First Run");
let initialNumRoses = estate5.roseArbor.length;
cloneAllTheRoses(estate5);
console.log(estate5.roseArbor.length === initialNumRoses * 2);

console.log("* Clone All Roses - After a few runs... - No flawed roses.");
cloneAllTheRoses(estate5);
cloneAllTheRoses(estate5);
cloneAllTheRoses(estate5);
let hasNoRuinedRoses = true;
for (let rose of estate5.roseArbor) {
    if (rose.flowerColor == null) {
        hasNoRuinedRoses = false;
    }
}
console.log(hasNoRuinedRoses);

/*
   -------TEST UTILITIES------------------------------------------------------
   These are utilities for the tests.

   Do not modify anything below this line.

   But read through these and try to understand what they  do.
*/

function populateEstate() {
    let estate = getEstate();
    let plants = getAllTestPlants();

    for (let plant of plants) {
        let plantObj = getPlant(...plant);
        addPlantToEstate(estate, plantObj);
    }

    return estate;
}

function getAllTestPlants() {
    return [
        ["rose", true, "rounded with a point", "green", "red", "concentric circles of pedals", 0.8, 4],
        ["orchid", true, "long and wide with a point at the end", "green", "fuscia", "pedals surrounding a central mouth", 1.2, 2],
        ["lily", true, "small and rounded", "green", "pink, white, blue, or orange", "brightly colored pedals surrounding a lighter center", 2, 4],
        ["lavender", true, "long and skinny", "green", "purple", "fragrant rod-like clusters of many tiny pedals", 2.5, 8],
        ["poppy", true, "long and jagged at the base of the plant", "green", "orange or red", "concentric circles of ruffled pedals surrounding a central core", 0.8, 4],
        ["begonia", false, "large with jagged edges and visible veins", "purple and green", "pink", "a few gently ruffled pedals with a central cluster of yellow pistils", 1.8, 5],
        ["snapdragon", false, "long and skinny along the entire stem", "green", "red, yellow, or orange", "many groups of ruffled pedals all along the stem", 0.5, 4],
        ["marigold", false, "thin and jagged along branches", "green", "yellow and orange", "rounded pedals in groups of five with a darker orange center", 0.8, 4],
        ["rose", true, "rounded with a point", "green", "purple", "concentric circles of pedals", 0.8, 4],
        ["rose", true, "rounded with a point", "green", "blue", "concentric circles of pedals", 0.8, 4]
    ]
}