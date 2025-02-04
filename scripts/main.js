import { ownsJeans } from "./ownsJeans.js"

const container = document.querySelector("#container")

const render = () => {
    const jeanOwnersHTML = ownsJeans()
    container.innerHTML = jeanOwnersHTML
}
render()