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
