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
export const saveSurveySubmission = async () => {
    const postOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(transientState)
    }
    const response = await fetch("http://localhost:8088/submissions", postOptions)

    const customEvent = new CustomEvent("newSubmissionCreated") 
    document.dispatchEvent(customEvent)
}