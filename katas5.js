const reverseString = (input) => {
    return input.split("").reverse().join("");
};

const testReverseString1 = () => {
    let result = reverseString("Kenzie Academy");
    let expected = "ymedacA eizneK";
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`);
};
testReverseString1();

const testReverseString2 = () => {
    let result = reverseString("Testando a funcao");
    let expected = "oacnuf a odnatseT";
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`);
};
testReverseString2();



const reverseSentence = (input) => {
    return input.split(" ").reverse().join(" ");
};

const testReverseSentence1 = () => {
    let result = reverseSentence("bob likes dogs");
    let expected = "dogs likes bob";
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`);
};
testReverseSentence1();
const testReverseSentence2 = () => {
    let result = reverseSentence("testando a função para ver se funciona");
    let expected = "funciona se ver para função a testando";
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`);
};
testReverseSentence2();




const minimumValue = (input) => {
    return Math.min(...input);
};

const testMinimumValue1 = () => {
    let result = minimumValue([1,2,3,4,5,6,7,8,9]);
    let expected = 1;
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`);
};
testMinimumValue1();

const testMinimumValue2 = () => {
    let result = minimumValue([3,9,12,7,510,0,99]);
    let expected = 0;
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`);
};
testMinimumValue2();




const maximumValue = (input) => {
    return Math.max(...input);
};

const testMaximumValue1 = () => {
    let result = maximumValue([23,15,667,12,9,82,09]);
    let expected = 667;
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`);
};
testMaximumValue1();

const testMaximumValue2 = () => {
    let result = maximumValue([99,105,5,12,9,852,09]);
    let expected = 852;
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`);
};
testMaximumValue2();




const calculateRemainder = (num, den) => {
    return (num % den);
};

const testcalculateRemainder1 = () => {
    let result = calculateRemainder(30,15);
    let expected = 0;
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`);
};
testcalculateRemainder1();

const testcalculateRemainder2 = () => {
    let result = calculateRemainder(13,5);
    let expected = 3;
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`);
};
testcalculateRemainder2();




const distinctValues  = (input) => {
    let result = input.split(" ");;
    result = [...new Set(result)];
    result =  result.join(" ");
    return result;
};

const testDistinctValues1 = () => {
    let result = distinctValues('1 3 5 3 7 3 1 1 5');
    let expected = '1 3 5 7';
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`);
};
testDistinctValues1();

const testDistinctValues2 = () => {
    let result = distinctValues('75 75 79 61 75 20 20 75 61 75');
    let expected = '75 79 61 20';
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`);
};
testDistinctValues2();




const countValues = (input) => {
    let array = input.split(" ");
    let obj = {};
    
    array.forEach(saida => {
        let i = saida;
        if(obj[i] === undefined) {
            obj[i] = 1;
        } else {
            obj[i] +=1;
        }
    })
    
    let result = "";
    for(let numbers in obj){
        result += ` ${numbers}(${obj[numbers]})`;
    };
    return result;
};

const testCountValues1 = () => {
    let result = countValues('1 3 5 3 7 3 1 1 5');
    let expected = " 1(3) 3(3) 5(2) 7(1)";
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`);
};
testCountValues1();

const testCountValues2 = () => {
    let result = countValues('12 1 5 12 9 18 7 352 18 2 12 9 9 9 352 18');
    let expected = " 1(1) 2(1) 5(1) 7(1) 9(4) 12(3) 18(3) 352(2)";
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`);
};
testCountValues2();


const evaluateExpression = (string, objeto) => {
    let array = string.split(' ');
    let result = objeto[array[0]];

    for(let i = 1; i < array.length; i += 2){

        let prox = array[i + 1];

        if(array[i] === '+'){
            result += objeto[prox];
        }   
        if(array[i] === '-'){
            result -= objeto[prox];
        }
    }
    return result;
};



const testEvaluateExpression1 = () => {
    let result = evaluateExpression("a + b + c - d", {a: 1, b: 7, c: 3, d: 14});
    let expected = -3;
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`);
};
testEvaluateExpression1();

const testEvaluateExpression2 = () => {
    let result = evaluateExpression("a - b + c + d", {a: 10, b: 2, c: 9, d: 5});
    let expected = 22;
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`);
};
testEvaluateExpression2();