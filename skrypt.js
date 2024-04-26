document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault();
    if (validateForm()) {
        alert('Formularz został poprawnie wypełniony!');
    }
});

function validateForm() {
    let isValid = true;

    const firstName = document.getElementById('firstName');
    const lastName = document.getElementById('lastName');
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    const confirmPassword = document.getElementById('confirmPassword');
    const gender = document.getElementById('gender');
    const phone = document.getElementById('phone');
    const birthdate = document.getElementById('birthdate');
    const country = document.getElementById('country');

    isValid &= checkRequired(firstName, 'firstNameError');
    isValid &= checkRequired(lastName, 'lastNameError');
    isValid &= checkRequired(email, 'emailError');
    isValid &= checkEmail(email, 'emailError');
    isValid &= checkRequired(password, 'passwordError');
    isValid &= checkLength(password, 8, 'passwordError');
    isValid &= checkRequired(confirmPassword, 'confirmPasswordError');
    isValid &= checkPasswordMatch(password, confirmPassword, 'confirmPasswordError');
    isValid &= checkRequired(gender, 'genderError');
    isValid &= checkRequired(phone, 'phoneError');
    isValid &= checkPhone(phone, 'phoneError');
    isValid &= checkRequired(birthdate, 'birthdateError');
    isValid &= checkBirthdate(birthdate, 'birthdateError');
    isValid &= checkRequired(country, 'countryError');

    return isValid;
}

function checkRequired(input, errorId) {
    const error = document.getElementById(errorId);
    if (input.value.trim() === '') {
        error.textContent = 'To pole jest wymagane';
        return false;
    } else {
        error.textContent = '';
        return true;
    }
}

function checkLength(input, minLength, errorId) {
    const error = document.getElementById(errorId);
    if (input.value.trim().length < minLength) {
        error.textContent = `To pole musi zawierać co najmniej ${minLength} znaków`;
        return false;
    } else {
        error.textContent = '';
        return true;
    }
}

function checkEmail(input, errorId) {
    const error = document.getElementById(errorId);
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(input.value.trim())) {
        error.textContent = 'Podaj poprawny adres email';
        return false;
    } else {
        error.textContent = '';
        return true;
    }
}

function checkPasswordMatch(password, confirmPassword, errorId) {
    const error = document.getElementById(errorId);
    if (password.value.trim() !== confirmPassword.value.trim()) {
        error.textContent = 'Hasła nie pasują do siebie';
        return false;
    } else {
        error.textContent = '';
        return true;
    }
}

function checkPhone(input, errorId) {
    const error = document.getElementById(errorId);
    const phoneRegex = /^\d{9}$/;
    if (!phoneRegex.test(input.value.trim())) {
        error.textContent = 'Podaj poprawny numer telefonu (9 cyfr)';
        return false;
    } else {
        error.textContent = '';
        return true;
    }
}

function checkBirthdate(input, errorId) {
    const error = document.getElementById(errorId);
    const birthdate = new Date(input.value);
    const currentDate = new Date();
    const eighteenYearsAgo = new Date(currentDate.getFullYear() - 18, currentDate.getMonth(), currentDate.getDate());

    if (birthdate >= eighteenYearsAgo) {
        error.textContent = 'Musisz być pełnoletni/a';
        return false;
    } else {
        error.textContent = '';
        return true;
    }
}
