function joke() {
  const url = 'http://api.icndb.com/jokes/random';
  fetch(url, { method: 'GET' })
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      const joke = data.value.joke;
      document.getElementById('jokeText').innerText = joke;
    });
}
