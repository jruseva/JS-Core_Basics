function modifyAverage(num){
    let numAsString = num.toString();
    let getAverage = (numAsString) => {
        let sum = 0;
        for (let i = 0; i < numAsString.length; i++) {
            let element = Number(numAsString[i]);
            sum += element;
        }
        return sum / numAsString.length;
    }
    while (getAverage(numAsString)<= 5 ){
        numAsString += '9';
    }
    console.log(numAsString);
}
modifyAverage(101);