import { locationTypeChoices } from "./location.js"
import { ownsJeans } from "./ownsJeans.js"

const container = document.querySelector("#container")

const render = async () => {
    const jeanOwnersHTML = ownsJeans()
    const locationHTML = await locationTypeChoices()
    container.innerHTML = `${jeanOwnersHTML} ${locationHTML}`
}
render()