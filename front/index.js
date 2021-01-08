const calculate = () => {
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;
    let operator = document.getElementById("operator").value;

    fetch("http://localhost:5000/calculate.json", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            num1,
            num2,
            operator
        }
        ) 
    }).then(res => {
        return res.json();
    })
        .then(resData => {
            document.getElementById("calculated").innerHTML = resData;
        })
            .catch(error => console.log(error));
}