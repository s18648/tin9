const express = require("express");
const router = express.Router();

router.post("/calculate.json", (req, res) => {
    let {num1, num2, operator} = req.body;
    num1 = Number.parseFloat(num1);
    num2 = Number.parseFloat(num2);

    if (typeof num1 !== "number" || typeof num2 !== "number") {
        res.json(JSON.stringify("Invalid input"));
    } else {
        let result = -1;

        switch(operator) {
            case "+":
                result = num1 + num2;
                break;
            case "-":
                result =  num1 - num2;
                break;
            case "*":
                result =  num1 * num2;
                break;
            case "/":
                result =  num1 / num2;
                break;
            default:
                throw Error("Invalid operation2");
        }
        res.json(JSON.stringify(result));
    }

});

module.exports = router;
