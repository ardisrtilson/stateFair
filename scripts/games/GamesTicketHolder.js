const contentTarget = document.querySelector(".games")
const eventHub = document.querySelector("#state-fair")

export const GameTicketHolders = () => {
    eventHub.addEventListener("rideTicketPurchased", (customEvent) => {
        if (customEvent.detail.name === "gameTicket") {
        contentTarget.innerHTML += `
        <div class="person player"></div>`
        }
    })
}