function cookingByNum(arr){
    let number = arr[0];
    let operations = {
        "chop": number => number/2,
        "dice": number => Math.sqrt(number),
        "spice": number => ++number,
        "bake": number=> number*3,
        "fillet": number => number -= number*0.2
    }
    for (let i = 1; i < arr.length; i++) {
        let currentOperation = arr[i];
        number = operations[currentOperation](number);
        console.log(number);

    }
}
cookingByNum([32, "chop", "chop", "chop", "chop", "chop"])
