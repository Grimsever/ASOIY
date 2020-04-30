var arr = [2, 3, 4, 5, "test"];
alert(`Результат поиска в массиве числа 23 : ${find(arr, 23) === -1 ?"не найдено":"найдено"} `);

map(incremet, [1, 3, 3]);


function find(arr, value) {
    var index = arr.indexOf(value, 0);
    if (index == null) {
        return -1;
    } else {
        return index;
    }
}

function make_random(A, B, size) {
    var p = document.getElementById('result');
    p.style.visibility = 'visible';
    p.sty
    var arr = new Array();
    p.innerText += "Result";
    p.innerHTML += "<br>"
    for (var i = 0; i <= size; i++) {
        arr.push(B * Math.random() - A * Math.random());
        p.innerText += `${arr[i]} `;
        if (i % 5 === 0 && i !== 0) {
            p.innerHTML += "<br>"
        }
    }
    console.log(arr.length);
}

function map(fun, arr) {
    var newAr = arr.map(item => (fun(item)));
    console.log(newAr);
}

function incremet(x) {
    return ++x
}