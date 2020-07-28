const contentTarget = document.querySelector(".sideshow")
const eventHub = document.querySelector("#state-fair")

export const SideshowTicketHolders = () => {
    eventHub.addEventListener("rideTicketPurchased", (customEvent) => {
        if (customEvent.detail.name === "sideshowTicket") {
        contentTarget.innerHTML += `
        <div class="person gawker"></div>`
        }
    })
}