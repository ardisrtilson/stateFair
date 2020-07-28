const contentTargetA = document.querySelector(".rides")
const contentTargetB = document.querySelector(".food")
const contentTargetC = document.querySelector(".games")
const contentTargetD = document.querySelector(".sideshow")

const eventHub = document.querySelector("#state-fair")

export const BigSpenders = () => {
    eventHub.addEventListener("rideTicketPurchased", (customEvent) => {
        if (customEvent.detail.name === "allTickets") {
        contentTargetA.innerHTML += `
        <div class="person bigSpender"></div>`
        contentTargetB.innerHTML += `
        <div class="person bigSpender"></div>`
        contentTargetC.innerHTML += `
        <div class="person bigSpender"></div>`
        contentTargetD.innerHTML += `
        <div class="person bigSpender"></div>`
        }
    })
}