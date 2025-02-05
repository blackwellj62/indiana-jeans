import { locationTypeChoices } from "./location.js"
import { ownsJeans } from "./ownsJeans.js"
import { saveSubmission } from "./submissions.js"
import { SubmissionList } from "./submissions.js"

const container = document.querySelector("#container")

const render = async () => {
    const jeanOwnersHTML = ownsJeans()
    const locationHTML = await locationTypeChoices()
    const buttonHTML = saveSubmission()
    const submissionHTML = await SubmissionList()

    container.innerHTML = `${jeanOwnersHTML} ${locationHTML} ${buttonHTML} ${submissionHTML}`
}
document.addEventListener("newSubmissionCreated", render)

render()