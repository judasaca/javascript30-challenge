const cities = [];

fetch(
  "https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json"
)
  .then((d) => {
    return d.json();
  })
  .then((data) => cities.push(...data));

function findMatches(word) {
  return cities
    .filter((c) => {
      const regex = new RegExp(word, "gi");
      return c.city.match(regex) || c.state.match(regex);
    })
    .sort((a, b) => {
      a.population - b.population;
    });
}

const search = document.getElementById("search");

const lista = document.getElementById("cities");
search.addEventListener("keyup", (e) => {
  lista.innerHTML = "";
  if (search.value != "") {
    const matches = findMatches(search.value);
    showCities(matches, search.value);
  }
});

function showCities(a, search) {
  //   const lista = document.getElementById("cities");
  a.forEach((element) => {
    const listItem = document.createElement("li");
    const regex = new RegExp(search, "gi");
    let city = element.city.replace(
      regex,
      `<span class="matched">${search}</span>`
    );
    let state = element.state.replace(
      regex,
      `<span class="matched">${search}</span>`
    );

    listItem.innerHTML = `<div>${city}, ${state}</div> <div>${element.population}</div>`;
    lista.appendChild(listItem);
  });
}

// console.log(cities);
