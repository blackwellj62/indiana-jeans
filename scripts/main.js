import { locationTypeChoices } from "./location.js"
import { ownsJeans } from "./ownsJeans.js"
import { saveSubmission } from "./submissions.js"

const container = document.querySelector("#container")

const render = async () => {
    const jeanOwnersHTML = ownsJeans()
    const locationHTML = await locationTypeChoices()
    const buttonHTML = saveSubmission()

    container.innerHTML = `${jeanOwnersHTML} ${locationHTML} ${buttonHTML}`
}
render()