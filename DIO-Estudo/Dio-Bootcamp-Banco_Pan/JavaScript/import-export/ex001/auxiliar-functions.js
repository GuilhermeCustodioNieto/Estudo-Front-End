let myArray = [125,12,4,5,23,45,47];

function getMax() {
    let max = myArray[0]
    for (let i= 0; i< myArray .length; i++) {
        if (myArray[i] > max){
            max = myArray[i];
        }
    }

    return max;
}

module.exports = {getMax}