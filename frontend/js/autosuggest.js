//https://autosuggest-backend.onrender.com/api/autosuggest?q=a&weighted=true&algorithm=trie&limit=8

var API_URL = "https://autosuggest-backend.onrender.com/api/autosuggest";

var searchBar = document.getElementById("search-bar");
var searchSuggestions = document.getElementById("search-suggestions");

searchBar.addEventListener("input", function () {
    //get user typed data
    //use user typed data in the query in the API call
    //API call
    //Append all the search suggestions to div tag in UI.

    var query = searchBar.value.trim();
    console.log(query);
    fetchSuggestions(query);
});

function fetchSuggestions(query) {
    var fullAPI = API_URL + "?q=" + query + "&weighted=true&algorithm=trie&limit=8";

    fetch(fullAPI)
        .then(function (res) {
            return res.json();
        })
        .then(function (data) {
            showSuggestions(data);
            //console.log(data);
            return;
        })
        .catch(function (err) {
            console.log("Error : " + err);
        });
}

function showSuggestions(data) {
    var values = data.results;

    if (data.count == 0) {
        searchSuggestions.innerHTML =
            "<div>No Matching results found</div>";
    } else {
        var htmlString = "";

        for (var i = 0; i < values.length; i++) {
            //<div> <span>text</span><span>weight</span> </div>

            htmlString +=
                "<div><span class='suggestion-item'>" +
                values[i].text +
                "</span><span class='item-weight'>" +
                values[i].weight +
                "</span></div>";
        }

        searchSuggestions.innerHTML = htmlString;
    }
}