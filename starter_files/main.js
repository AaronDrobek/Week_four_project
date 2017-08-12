/*
  Here is a rough idea for the steps you could take:
*/

// 1. First select and store the elements you'll be working with
// 2. Create your `submit` event for getting the user's search term
// 3. Create your `fetch` request that is called after a submission
// 4. Create a way to append the fetch results to your page
// 5. Create a way to listen for a click that will play the song in the audio play
let search    = document.getElementById("search");
let results   = document.querySelector(".results")
let searchBar = document.getElementById("searchBar");
let button    = document.querySelector("button");

button.addEventListener('click', function(){
  // console.log("button was clicked");
  let searchBar = document.getElementById("searchBar");

  // let searchBar = searchBar.value;



    while(results.firstChild){
      results.removeChild(results.firstChild);
    }


let bar = searchBar.value;


fetch("https://itunes.apple.com/search?term=" + bar )
.then(
  function(response) {
    if (response.status !== 200) {
      console.log(response.status);
      return;
    }
    response.json().then(function(data) {
      console.log("Here is the data:", data);



      for (var i = 0; i < data.results.length; i++) {

        let el1 = document.createElement("div");
        el1.classList.add("el1");
        el1.innerHTML=
        `<img src=${data.results[i].artworkUrl100}>
        <h4 class= "song_title">${data.results[i].trackName}</h4>
        <h2 class= "artist_title" maxlength= "15">${data.results[i].artistName}</h2>
        </div>`
        results.appendChild(el1);
      }
    })
  })
})
