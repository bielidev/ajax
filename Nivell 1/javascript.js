function joke() {
  const url = 'http://api.icndb.com/jokes/random';
  $.ajax({
    type: 'get',
    url: url,
    success: function (response) {
      const joke = response.value.joke;
      document.getElementById('jokeText').innerHTML = joke;
    },
  });
}
