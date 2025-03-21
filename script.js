document.getElementById('comboBox').addEventListener('change', function() {
    const additionalFields = document.getElementById('additionalFields');
    additionalFields.innerHTML = ''; // 기존 필드 초기화

    if (this.value === '영혼각차') {
        const fields = [
            '신청', '이름', '성별', '음력생일', '사주팔자', '한자수소', '피드백', '요구', '통령사지정'
        ];

        fields.forEach(field => {
            const label = document.createElement('label');
            label.textContent = field + ':';
            const input = document.createElement('input');
            input.type = 'text';
            input.name = field;
            input.required = true;
            additionalFields.appendChild(label);
            additionalFields.appendChild(input);
            additionalFields.appendChild(document.createElement('br'));
            additionalFields.appendChild(document.createElement('br'));
        });
    }
});

document.getElementById('submissionForm').addEventListener('submit', function(event) {
    event.preventDefault(); // 폼 제출 기본 동작 방지

    const formData = new FormData(this);
    const emailContent = Array.from(formData.entries()).map(entry => `${entry[0]}: ${entry[1]}`).join('\n');

    emailjs.send("service_5fe2i95", "template_q2w2mt8", {
        to_email: formData.get('email'), // 폼에서 입력된 이메일 주소
        reply_to: formData.get('email'), // 회신 이메일 주소
        bcc: "jazzgiant9@gmail.com"
        content: emailContent // 폼 데이터 내용
    }).then(function(response) {
        alert('이메일이 성공적으로 전송되었습니다!');
    }, function(error) {
        console.error('이메일 전송에 실패했습니다.', error);
        alert('이메일 전송에 실패했습니다.');
    });
});

