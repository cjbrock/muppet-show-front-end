class Show {
    constructor(id, show_name, episode_name, episode_number, date, link, availability){
        this.id = id
        this.show_name = show_name
        this.episode_name = episode_name
        this.episode_number = episode_number
        this.date = date
        this.link = link
        this.availability = availability
        this.renderShow()
        // render the instance to the page somehow
    }

    // render method that will create a div, append it to the page, add relevant classes and IDs and other stuff
    // possibly event delegation, event listeners, other stuff, haven't decided what's happening yet

    renderShow(){
        const showHolder = document.getElementById("muppet-show-list")
        const showContainer = document.createElement('div')
        showContainer.dataset.id = this.id
        showContainer.id = this.id
        showContainer.classList.add = "muppet-show-rocks"
        showContainer.innerHTML += this.showHTML()
        showHolder.appendChild(showContainer)
        showContainer.addEventListener("click", e => {
            if (e.target.className === "muppet-button") this.showMupppets(e)
        })
    }

    showHTML(){
        // debugger
        let available = this.availability == true ? "yes" : "no"
        return `
        <h2 class="headline">${this.episode_name}</h2>
        <h3 class="show_name">${this.show_name}</h3>
        <p>Episode number: ${this.episode_number}</p>
        <p>Episode date: ${this.episode_date}</p>
        <p>Is this episode available to watch? ${available}</p>
        <a href="${this.link}">Watch me!</a><br />
        <button type="button" class="muppet-button" data-id=${this.id}>See the muppets!</button>
         `
    }

    showMuppets(e){
        // initiate a fetch request to the show page of the show in question to get the scoped muppets OR we can initate a fetch request to the muppet controller index method and scope it by the parameter (either way we have to scope it)
        // return the muppets for the show in question
        // create new muppet objects
        // wipe everything off the page
        // show the new muppet objects
        // have a link to go "back" to the homepage
    }


}