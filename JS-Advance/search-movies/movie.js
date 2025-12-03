const apiKey = "e6e67678";

async function searchMovie() {
    const movieName = document.getElementById("movieInput").value.trim();

    if (!movieName) {
        console.log("Enter a movie name");
        return;
    }

    try {
        const url = `http://www.omdbapi.com/?t=${movieName}&apikey=${apiKey}`;
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error("Network error");
        }

        const data = await response.json();

        if (data.Response === "False") {
            console.log("Movie not found:", data.Error);
            document.getElementById("title").innerText = "Movie not found!";
            return;
        }

        document.getElementById("poster").src = data.Poster;
        document.getElementById("title").innerText = data.Title;
        document.getElementById("year").innerText = "Year: " + data.Year;
        document.getElementById("plot").innerText = data.Plot;

        console.log(data);

    } catch (err) {
        console.log("Error:", err);
    }
}

document.getElementById("searchBtn").addEventListener("click", searchMovie);
