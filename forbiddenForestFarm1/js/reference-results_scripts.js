getResults();


function getResults() {
    fetch("/quizResults")
    .then(function(response) {
        return response.json();
      }).then(function(data) {
          console.log('data:', data);
          showTurtle(data.result);
      })
}

function showTurtle(results) {
    if (results > 4 && results < 9) {
         document.getElementById("leo").classList.add('makeVisible');
    } else if (results > 8 && results < 13) {
        document.getElementById("donnie").classList.add('makeVisible');
    } else if (results > 12 && results < 17) {
    document.getElementById("mikey").classList.add('makeVisible');
    } else if (results > 16 && results < 21) {
    document.getElementById("raph").classList.add('makeVisible');
}}