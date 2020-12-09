class API {
    // static (class level) function that is going to be a fetch request to the back end to the index that will load in all my shows
    static addMuppets(){
        fetch("http://localhost:3000/shows")
        .then(resp => resp.json())
        .then(shows => {
            shows.forEach(show => {
                const{id, show_name, episode_name, episode_number, date, link, availability} = show
                new Show(id, show_name, episode_name, episode_number, date, link, availability)
            })
        })
    }
}