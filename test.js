const readline = require('node:readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function askQuestion(question) {
    return new Promise((resolve) => {
        rl.question(question, (answer) => {
            resolve(answer);
        });
    });
}

function calculateAverage(number) {
    array = []
    for (let i = 1 ; i <= number; i++) {
        array.push(i)
    }
    console.log(array)
    sum = 0;
    for (let i = 0; i <= array.length -1 ; i++) {
        sum += array[i];
    }
    return sum / array.length;
}

async function main() {
    try {
        const inputNumber = await askQuestion('숫자를 입력하세요: ');
        const number = parseFloat(inputNumber);

        if (isNaN(number) || number <= 0 || !Number.isInteger(number)) {
            console.log('유효한 양의 정수를 입력해 주세요.');
        } else {
            const average = calculateAverage(number);
            console.log(`1부터 ${number}까지의 평균은 ${average}입니다.`);
        }

        rl.close();
    } catch (error) {
        console.error('에러가 발생했습니다:', error);
        rl.close();
    }
}

main();
