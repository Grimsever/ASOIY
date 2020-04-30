function test() {
    const elements = document.form.elements;
    var cost = 0;
    var countAll = 0;
    if (document.getElementById("tovar1").checked) {
        let count = Number(elements.count1.value);
        countAll = countAll + count;
        let subCost = count * 2;
        if (elements.package.checked) {
            subCost += 1;
        }
        cost += subCost;
        document.getElementById("tovar1Cost").value = subCost;
    }

    if (document.getElementById("tovar2").checked) {
        let count = Number(elements.count2.value);
        countAll = countAll + count;
        let subCost = count * 2;

        if (elements.package2.checked) {
            subCost += 1;
        }
        document.getElementById("tovar2Cost").value = subCost;
    }

    if (document.getElementById("tovar3").checked) {
        let count = Number(elements.count3.value);
        countAll = countAll + count;
        let subCost = count * 3;

        if (elements.package3.checked) {
            subCost += 1;
        }
        cost += subCost;
        document.getElementById("tovar3Cost").value = subCost;
    }
    if (document.getElementById("tovar4").checked) {
        let count = Number(elements.count4.value);
        countAll = countAll + count;
        let subCost = count * 4;

        if (elements.package4.checked) {
            subCost += 1;
        }

        cost += subCost;
        document.getElementById("tovar4Cost").value = subCost;
    }
    if (document.getElementById("tovar5").checked) {
        let count = Number(elements.count5.value);
        countAll = countAll + count;
        let subCost = count * 1;

        if (elements.package5.checked) {
            subCost += 1;
        }
        cost += subCost;
        document.getElementById("tovar5Cost").value = subCost;
    }
    console.log(cost)
    if (elements.arrive.checked) {
        cost += cost * 0.05;
    }
    if (countAll >= 30) {
        form.discount.value = "20%"
        cost -= cost * 0.2;
    } else {
        form.discount.value = "0%"
    }
    form.result.value = "Стоимость " + cost + " р.";
}