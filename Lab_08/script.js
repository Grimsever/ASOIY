function getnumber(n) {
    let date = new Date(document.getElementById('date' + n).value);
    let surname = document.getElementById('surname' + n).value;

    var options = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        weekday: 'long'
    };

    let vacation_start = new Date();
    vacation_start.setTime(Date.parse(date) + (1000 * 3600 * 24 * 30 * 11));

    let vacation_end = new Date();
    vacation_end.setTime(Date.parse(vacation_start) + (1000 * 3600 * 24 * 30));

    alert(
        'Для ' + surname + "\n" +
        'Начало отпуска: ' + vacation_start.toLocaleString("ru", options) + "\n" +
        'Конец отпуска: ' + vacation_end.toLocaleString("ru", options)
    );
}

function getmonth() {

    let m = Number.parseInt(document.getElementById('month').value);
    let array = [];
    let offer1 = { date: new Date(document.getElementById('date1').value), surname: document.getElementById('surname1').value };
    let offer2 = { date: new Date(document.getElementById('date2').value), surname: document.getElementById('surname2').value };
    let offer3 = { date: new Date(document.getElementById('date3').value), surname: document.getElementById('surname3').value };
    let offer4 = { date: new Date(document.getElementById('date4').value), surname: document.getElementById('surname4').value };
    let offer5 = { date: new Date(document.getElementById('date5').value), surname: document.getElementById('surname5').value };
    let offer6 = { date: new Date(document.getElementById('date6').value), surname: document.getElementById('surname6').value };
    let offer7 = { date: new Date(document.getElementById('date7').value), surname: document.getElementById('surname7').value };

    array.push(offer1);
    array.push(offer2);
    array.push(offer3);
    array.push(offer4);
    array.push(offer5);
    array.push(offer6);
    array.push(offer7);


    if (m > 0 && m < 13) {
        for (i = 0; i < array.length; i++) {
            let v_s = new Date();
            v_s.setTime(Date.parse(array[i].date) + (1000 * 3600 * 24 * 30 * 11));
            let v_e = new Date();
            v_e.setTime(Date.parse(v_s) + (1000 * 3600 * 24 * 30));
            if (v_s.getMonth() == m - 1) {
                alert('Начало отпуска: ' + array[i].surname);
            } else if (v_e.getMonth() == m - 1) {
                alert('Конец отпуска: ' + array[i].surname);
            }
        }
    }
}

function getyear() {

    let y = 2021;
    let array = [];
    let offer1 = { date: new Date(document.getElementById('date1').value), surname: document.getElementById('surname1').value };
    let offer2 = { date: new Date(document.getElementById('date2').value), surname: document.getElementById('surname2').value };
    let offer3 = { date: new Date(document.getElementById('date3').value), surname: document.getElementById('surname3').value };
    let offer4 = { date: new Date(document.getElementById('date4').value), surname: document.getElementById('surname4').value };
    let offer5 = { date: new Date(document.getElementById('date5').value), surname: document.getElementById('surname5').value };
    let offer6 = { date: new Date(document.getElementById('date6').value), surname: document.getElementById('surname6').value };
    let offer7 = { date: new Date(document.getElementById('date7').value), surname: document.getElementById('surname7').value };

    array.push(offer1);
    array.push(offer2);
    array.push(offer3);
    array.push(offer4);
    array.push(offer5);
    array.push(offer6);
    array.push(offer7);

    for (i = 0; i < array.length; i++) {
        let v_s = new Date();
        v_s.setTime(Date.parse(array[i].date) + (1000 * 3600 * 24 * 30 * 11));
        let v_e = new Date();
        v_e.setTime(Date.parse(v_s) + (1000 * 3600 * 24 * 30));

        if (v_s.getFullYear() == y) {
            alert('Отпуск начнеться в следующим году у ' + array[i].surname);
        }
        if (v_e.getFullYear() == y) {
            alert('Отпуск закончиться в следующим году у ' + array[i].surname);
        }
    }
}