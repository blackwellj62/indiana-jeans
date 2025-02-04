// Set up the transient state data structure and provide initial values
const transientState = {
    "ownsBlueJeans": false,
    "socioLocationId": 0
}


// Functions to modify each property of transient state
export const setOwnsBlueJeans = (ownerChoice) => {
    transientState.ownsBlueJeans = ownerChoice
    console.log(transientState)
}

export const setSocioLocationId = (locationChoice) => {
    transientState.socioLocationId = locationChoice
    console.log(transientState)
}

// Function to convert transient state to permanent state