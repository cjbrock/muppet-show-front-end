document.addEventListener("DOMContentLoaded", function(){
    // do whatever has to happen first in your application
    // for our application, we're going to need to load in our muppet shows
    // this looks like a get fetch request to our back end to load in the shows. This will live in the API class. 
    API.addMuppets()
    // If we have any event listeners that need to get appended to the page when it loads, they should get appendeded here too.
})