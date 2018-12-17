
var button = document.getElementById("quiz_button");

document.getElementById("enemy1").checked = true;

console.log('form:  ', document.getElementById('form').enemy);
console.log('form:  ', document.getElementById('form').time);

function handleSubmit() {
    if (!checkAnswers()) {
        return;
    }
    var total = totalValues();
    postResults(total).then(function() {
        location.replace("/turtle")
    });
}

function checkAnswers() {
    if (document.getElementById('form').enemy.value == "" ||
    document.getElementById('form').time.value == "" ||
    document.getElementById('form').hate.value == "" ||
    document.getElementById('form').ally.value == "" ||
    document.getElementById('form').pizza.value == "") {
        alert("Answer all questions!")
        return false;
    } else {
        return true;
    }
}

function totalValues() {
    var total = 0;
    total += parseInt(document.getElementById('form').enemy.value);
    total += parseInt(document.getElementById('form').time.value); 
    total += parseInt(document.getElementById('form').hate.value); 
    total += parseInt(document.getElementById('form').ally.value); 
    total += parseInt(document.getElementById('form').pizza.value);
    return total;
}

function postResults(result) {
    return fetch("/results", {
        method: 'POST',
        body: JSON.stringify({result: result}),
        headers:{
            'Content-Type': 'application/json'
        }
    })
}