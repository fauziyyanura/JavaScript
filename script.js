document.addEventListener('DOMContentLoaded', () => {
    const studentForm = document.getElementById('studentForm');
    const studentNameInput = document.getElementById('studentName');
    const schoolNameInput = document.getElementById('schoolName');
    const courseInput = document.getElementById('course');
    const formMessage = document.getElementById('formMessage');

    const cardResult = document.getElementById('cardResult');
    const cardStudentName = document.getElementById('cardStudentName');
    const cardSchoolName = document.getElementById('cardSchoolName');
    const cardCourse = document.getElementById('cardCourse');
    const cardNumber = document.getElementById('cardNumber');

    // Generate a constant card number for this session
    const constantCardNo = `Card No: SC-2026-${Math.floor(1000 + Math.random() * 9000)}`;
    cardNumber.innerText = constantCardNo;

    studentForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const nameVal = studentNameInput.value.trim();
        const schoolVal = schoolNameInput.value.trim();
        const courseVal = courseInput.value.trim();

        // Validation: If any space/field is left empty
        if (!nameVal || !schoolVal || !courseVal) {
            formMessage.textContent = '⚠️ Please fill in all fields before generating the card.';
            formMessage.style.color = '#dc2626'; // Red warning
            cardResult.hidden = true;
            return;
        }

        // Clear warning and show success
        formMessage.textContent = '✅ Card generated successfully!';
        formMessage.style.color = '#16a34a'; // Green success

        // Update card text with input values
        cardStudentName.textContent = nameVal;
        cardSchoolName.textContent = schoolVal;
        cardCourse.textContent = courseVal;

        // Reveal the result card directly under the form
        cardResult.hidden = false;
    });
});