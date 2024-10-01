function fun() {
    var val = document.getElementById("data").value
    var val1 = document.getElementById("data1").value
    var val2 = document.getElementById("data2").value

    var a1 = val * val;
    var a2 = val1 * val1;
    var a3 = val2 * val2;

    var sum = a1 + a2 + a3;

    // console.log("the sum of all square numbers is=" + sum);

    console.log(a1);
    console.log(a2);
    console.log(a3);
    console.log(sum);

    

    var val3 = document.getElementById("h1").innerText= `Sum of squares: ${sum}`

}



