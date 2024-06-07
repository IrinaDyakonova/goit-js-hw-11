import searchImages from './js/pixabay-api.js';


document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault(); 
    var inputValue = document.getElementById('input').value; 

    window.onload = searchImages(inputValue);

    document.getElementById('input').value = '';
  });