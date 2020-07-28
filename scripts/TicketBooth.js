const contentTarget = document.querySelector(".entry")
const eventHub = document.querySelector("#state-fair")

contentTarget.addEventListener("click", (changeEvent) => {
    const rideTicketEvent = new CustomEvent ("rideTicketPurchased", {
    detail:
    {
        name: changeEvent.target.id
    }
    })
eventHub.dispatchEvent(rideTicketEvent)
}) 


export const TicketBooth = () => {
    contentTarget.innerHTML = `
        <div class="ticketBooth">
        <button id="rideTicket">Ride Ticket</button>
        <button id="foodTicket">Food Ticket</button>
        <button id="gameTicket">Game Ticket</button>
        <button id="sideshowTicket">Sideshow Ticket</button>
        <button id="allTickets">All Tickets</button>
        </div>
    `
}

