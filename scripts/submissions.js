import { saveSurveySubmission } from "./transientState.js"

export const SubmissionList = async () => {
    // Get the submissions from your API
    const response = await fetch ("http://localhost:8088/submissions")
    const submissions = await response.json()

    let submissionHTML = "<h2>Submissions</h2>"
    // Iterate the submissions and create some <section> representations
    for (const submission of submissions) {
        submissionHTML += `
        <section class="submission">
        <div> Owns Jeans? ${submission.ownsBlueJeans} </div>
        <div> Area Type Id: ${submission.socioLocationId}</div>
        </section>`
    }
    return submissionHTML
    // Return the HTML string
}





const handleSurveySubmission = (clickEvent) => {
    if(clickEvent.target.id === "saveSubmission") {
        saveSurveySubmission()
    }

}




export const saveSubmission = () => {
    document.addEventListener("click", handleSurveySubmission)
    return "<button id='saveSubmission'>Save Submission</button>"
}