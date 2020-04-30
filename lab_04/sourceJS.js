solution_1();
solution_2();
function solution_1()
{
    var mes=document.getElementById('sol1');
    var message=confirm("Нажмите любую кнопку");
    if(message)
    {
        mes.innerText="Была нажата кнопка `Да`";
    }
    else{
        mes.innerText="Была нажата кнопка `Нет`";
    }
}
function solution_2()
{
    var pp=document.getElementById('sol2');
    var str="";
    var num=prompt("Введите размер доски");
    for(var j=0;j<num;j++)
    {   
        for(var i=0;i<num;i++)
        {
            if(j%2==0)
            {
                if(i%2==0){
                    str+="\ ";
                }
                else
                {
                    str+="#";
                }            
            }
            else if(j%2!=0)
            {
                if(i%2!=0)
                {
                    str+="\ ";
                }
                else{
                    str+="#";
                }
            }
        }
        str+="\n";
    }
    pp.innerText=str;   
}