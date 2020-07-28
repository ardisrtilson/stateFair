const contentTarget = document.querySelector(".food")
const eventHub = document.querySelector("#state-fair")

export const FoodTicketHolders = () => {
    eventHub.addEventListener("rideTicketPurchased", (customEvent) => {
        if (customEvent.detail.name === "foodTicket") { 
        contentTarget.innerHTML += `
        <div class="person eater"></div>`
        }
    })
}