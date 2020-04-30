function test() {
    const elements = document.form.elements;
    var cost = 0;
    if (document.getElementById("tovar1").checked) {
        let subCost =
            Number(document.getElementById("info").value) +
            Number(elements.infoHours.value) +
            Number(elements.infoLanguage.value) +
            Number(elements.infoTest.value);
        cost = cost + subCost;
        document.getElementById("infoCost").value = subCost;
    }

    if (document.getElementById("DB").checked) {
        let subCost =
            Number(document.getElementById("DB").value) +
            Number(elements.DBHours.value) +
            Number(elements.DBLanguage.value) +
            Number(elements.DBTest.value);
        cost = cost + subCost;
        document.getElementById("DBCost").value = subCost;
    }

    if (document.getElementById("net").checked) {
        let subCost =
            Number(document.getElementById("net").value) +
            Number(elements.netHours.value) +
            Number(elements.netLanguage.value) +
            Number(elements.netTest.value);
        cost = cost + subCost;
        document.getElementById("netCost").value = subCost;
    }
    if (document.getElementById("logic").checked) {
        let subCost =
            Number(document.getElementById("logic").value) +
            Number(elements.logicHours.value) +
            Number(elements.logicLanguage.value) +
            Number(elements.logicTest.value);
        cost = cost + subCost;
        document.getElementById("logicCost").value = subCost;
    }
    form.ww.value = "Стоимость " + cost + " р.";
}