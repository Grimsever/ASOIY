function getTr(a, b, c){
    a=parseInt(a);
    b=parseInt(b);
    c=parseInt(c);
    var p=(a+b+c)/2;
    console.log(p);
    var sq=Math.sqrt(p * (p - a)*(p - b)*(p - c));
    console.log(sq);
    alert(`Площадь треугольника ${sq}`);
}