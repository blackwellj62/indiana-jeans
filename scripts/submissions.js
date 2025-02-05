import { saveSurveySubmission } from "./transientState.js"

const handleSurveySubmission = (clickEvent) => {
    if(clickEvent.target.id === "saveSubmission") {
        saveSurveySubmission()
    }

}




export const saveSubmission = () => {
    document.addEventListener("click", handleSurveySubmission)
    return "<button id='saveSubmission'>Save Submission</button>"
}