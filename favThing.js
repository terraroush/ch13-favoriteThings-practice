const container = document.querySelector("#wishlist")

document.querySelector("#save").addEventListener("click", event => {
 
    const favThing = document.querySelector("#favThing").value
    const store = document.querySelector("#store").value

 
    container.innerHTML += `
        <section>
            <h1>I can purchase ${favThing} at ${store}.</h1>
        </section>
    `

})