import { movies } from './movies.js';
const qidiruvInp = document.getElementById("qidiruv")
const ota = document.getElementById("ota")
const selectAll = document.getElementById("all")
const selectSort = document.getElementById("sort")
const button = document.getElementById("Search")

console.log(movies[0]);

function moviesView(data) {
    ota.innerHTML = "";
    data.forEach(e => {
        const div = document.createElement("div");
        div.classList.add("bola_card");
        div.innerHTML = `
        <img class="movie" src="https://st2.depositphotos.com/1653909/8228/i/450/depositphotos_82283940-stock-photo-movie-theater-with-empty-seats.jpg" alt="movie" width="220">
    <h4>${e.title}</h4>
    <div class="ota_p">
        <p>${e.score}</p>
        <p>${e.year}</p>
        <p>${e.duration}</p>
    </div>
    <p>${e.genre}</p>
    <button><a href="https://www.netflix.com/uz-ru/" target="_blank">More info</a></button>
             `;
        ota.appendChild(div)
    });
}
moviesView(movies)


qidiruvInp.addEventListener("input", () => {
    if (qidiruvInp.value.trim().length < 0) {
        alert("Error 102 line File not found !!")
    } else {
        let searchPk = movies.filter(e => e.title.toLowerCase().includes(qidiruvInp.value.toLowerCase().trim()));
        moviesView(searchPk);
    }
})


all.addEventListener("change", () => {
    if (all.value == "All") {
        moviesView(movies)
    } else {
        let searchPk = movies.filter(e => e.genre.toString().includes(all.value));
        moviesView(searchPk)
    }
})


selectSort.addEventListener("change", () => {
    let filteredMovies;
    if(selectSort.value === "A-Z") {
        filteredMovies = movies.sort((a, b) => a.title.localeCompare(b.title));
    }else if (selectSort.value === "Z-A") {
        filteredMovies = movies.sort((a, b) => b.title.localeCompare(a.title));
    }else if (selectSort.value === "1-10") {
        filteredMovies = movies.sort((a, b) => a.year - b.year);
    }else if (selectSort.value === "10-1") {
        filteredMovies = movies.sort((a, b) => b.year - a.year);
    }else if (selectSort.value === "1900-1950") {
        filteredMovies = movies.filter(movie => movie.year >= 1900 && movie.year <= 1950);
    }else if (selectSort.value === "1950-2000") {
        filteredMovies = movies.filter(movie => movie.year > 1950 && movie.year <= 2000);
    }else if (selectSort.value === "2000-2024") {
        filteredMovies = movies.filter(movie => movie.year > 2000 && movie.year <= 2024);
    }
    moviesView(filteredMovies);
});