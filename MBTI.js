const readline = require('node:readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let mbti = '';

function askQuestion(question, callback) {
    rl.question(question, (answer) => {
        if (answer.toLowerCase() === 'o' || answer.toLowerCase() === 'x') {
            callback(answer);
        } else {
            console.log('잘못된 입력입니다. o 또는 x로 답변해 주세요.');
            askQuestion(question, callback);  // 잘못된 입력 시 질문을 다시 합니다.
        }
    });
}

function startTest() {
    askQuestion('고등학교에서 유명한가요? (o/x) ', (answer1) => {
        mbti += answer1.toLowerCase() === 'o' ? 'E' : 'I';
        askQuestion('스포츠를 하나요? (o/x) ', (answer2) => {
            mbti += answer2.toLowerCase() === 'o' ? 'S' : 'N';
            askQuestion('수학을 잘하나요? (o/x) ', (answer3) => {
                mbti += answer3.toLowerCase() === 'o' ? 'T' : 'F';
                askQuestion('지금 방이 깨끗한가요? (o/x) ', (answer4) => {
                    mbti += answer4.toLowerCase() === 'o' ? 'J' : 'P';
                    console.log(`당신의 MBTI 성향은 ${mbti}입니다.`);
                    rl.close();
                });
            });
        });
    });
}

console.log("MBTI 테스트에 오신 것을 환영합니다.");
askQuestion('테스트를 시작하시겠습니까? (o/x) ', (startAnswer) => {
    if (startAnswer.toLowerCase() === 'o') {
        startTest();
    } else {
        console.log('테스트를 시작하지 않았습니다. 프로그램을 종료합니다.');
        rl.close();
    }
});
