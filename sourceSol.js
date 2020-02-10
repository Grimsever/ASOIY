var name;
var secName;
var fullName;
var getName=prompt("Введите имя");
var getSecName=prompt("Введите Фамилию");
var getFullNames=prompt("Введите Отчество");
var getConfirm;
getFullName();

function getFullName()
{
    if(getName!=null)
    {
        console.log(getName);
        name=getName;
    }
    if(getSecName!=null)
    {
        console.log(getSecName);
        secName=getSecName;
    }
    if(getFullNames!=null)
    {
        console.log(getFullNames);
        fullName=getFullNames;
        getConfirm=confirm(name+" "+secName+" "+fullName+" Всё верно?");
    }
    if(getConfirm)
    {
        alert("Всё ок!");
    }
    else
    {
        alert("Не ок!");
    }
}