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

async function main() {
    try {
        const name1 = await askQuestion('첫 번째 사람의 이름은 무엇인가요? ');
        const weight1 = await askQuestion(`${name1}의 몸무게는 몇 kg인가요? `);
        
        const name2 = await askQuestion('두 번째 사람의 이름은 무엇인가요? ');
        const weight2 = await askQuestion(`${name2}의 몸무게는 몇 kg인가요? `);

        const weight1Num = parseFloat(weight1);
        const weight2Num = parseFloat(weight2);

        if (isNaN(weight1Num) || isNaN(weight2Num)) {
            console.log('몸무게는 숫자로 입력해 주세요.');
        } else {
            if (weight1Num > weight2Num) {
                console.log(`${name1}의 몸무게가 ${name2}의 몸무게보다 더 많이 나갑니다.`);
            } else if (weight1Num < weight2Num) {
                console.log(`${name2}의 몸무게가 ${name1}의 몸무게보다 더 많이 나갑니다.`);
            } else {
                console.log(`${name1}와 ${name2}의 몸무게는 같습니다.`);
            }
        }
        rl.close();
    } catch (error) {
        console.error('에러가 발생했습니다:', error);
        rl.close();
    }
}

main();
