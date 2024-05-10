document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault();
    if (validateForm()) {
        alert('Formularz został poprawnie wypełniony!');
    }
});

document.getElementById('sameAddress').addEventListener('change', function() {
    const correspondenceAddressContainer = document.getElementById('correspondenceAddressContainer');
    const correspondenceAddressInput = document.getElementById('correspondenceAddress');
    
    if (this.checked) {
        correspondenceAddressInput.value = ''; 
        correspondenceAddressContainer.style.display = 'none'; 
        correspondenceAddressInput.disabled = true; 
    } else {
        correspondenceAddressContainer.style.display = 'block'; 
        correspondenceAddressInput.disabled = false; 
    }
});

document.getElementById('country').addEventListener('change', function() {
    const provinceInput = document.getElementById('province');
    if (this.value === 'Polska') {
        provinceInput.innerHTML = `
            <option value="">Wybierz</option>
            <option value="dolnośląskie">Dolnośląskie</option>
            <option value="kujawsko-pomorskie">Kujawsko-Pomorskie</option>
            <!-- inne województwa -->
        `;
        provinceInput.disabled = false; 
    } else {
        provinceInput.innerHTML = `<option value="">Wybierz</option>`; 
        provinceInput.disabled = true; 
    }
});

document.getElementById('phone').addEventListener('input', function() {
    this.value = this.value.replace(/\D/g, ''); 
});

function validateForm() {
    let isValid = true;

    isValid &= checkRequired('firstName');
    isValid &= checkRequired('lastName');
    isValid &= checkRequired('email');
    isValid &= checkEmail('email');
    isValid &= checkRequired('password');
    isValid &= checkLength('password', 8);
    isValid &= checkRequired('confirmPassword');
    isValid &= checkPasswordMatch('password', 'confirmPassword');
    isValid &= checkRequired('gender');
    isValid &= checkRequired('phone');
    isValid &= checkPhone('phone');
    isValid &= checkRequired('birthdate');
    isValid &= checkBirthdate('birthdate');
    isValid &= checkRequired('country');
    
    if (!document.getElementById('sameAddress').checked) {
        isValid &= checkRequired('correspondenceAddress');
    }

    return isValid;
}

function checkRequired(inputId) {
    const input = document.getElementById(inputId);
    const error = input.nextElementSibling;
    if (input.value.trim() === '') {
        error.textContent = 'To pole jest wymagane';
        return false;
    } else {
        error.textContent = '';
        return true;
    }
}

function checkLength(inputId, minLength) {
    const input = document.getElementById(inputId);
    const error = input.nextElementSibling;
    if (input.value.trim().length < minLength) {
        error.textContent = `To pole musi zawierać co najmniej ${minLength} znaków`;
        return false;
    } else {
        error.textContent = '';
        return true;
    }
}

function checkEmail(inputId) {
    const input = document.getElementById(inputId);
    const error = input.nextElementSibling;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(input.value.trim())) {
        error.textContent = 'Podaj poprawny adres email';
        return false;
    } else {
        error.textContent = '';
        return true;
    }
}

function checkPasswordMatch(passwordId, confirmPasswordId) {
    const password = document.getElementById(passwordId);
    const confirmPassword = document.getElementById(confirmPasswordId);
    const error = confirmPassword.nextElementSibling;
    if (password.value.trim() !== confirmPassword.value.trim()) {
        error.textContent = 'Hasła nie pasują do siebie';
        return false;
    } else {
        error.textContent = '';
        return true;
    }
}

function checkPhone(inputId) {
    const input = document.getElementById(inputId);
    const error = input.nextElementSibling;
    const phoneRegex = /^\d{9}$/;
    if (!phoneRegex.test(input.value.trim())) {
        error.textContent = 'Podaj poprawny numer telefonu (9 cyfr)';
        return false;
    } else {
        error.textContent = '';
        return true;
    }
}

function checkBirthdate(inputId) {
    const input = document.getElementById(inputId);
    const error = input.nextElementSibling;
    const birthdate = input.value;
    if (!checkAge(birthdate)) {
        error.textContent = 'Musisz być pełnoletni/a';
        return false;
    } else {
        error.textContent = '';
        return true;
    }
}

function checkAge(birthdate) {
    const currentDate = new Date();
    const eighteenYearsAgo = new Date(currentDate.getFullYear() - 18, currentDate.getMonth(), currentDate.getDate());

    const inputDate = new Date(birthdate);
    
    if (inputDate >= eighteenYearsAgo) {
        return false; 
    } else {
        return true; 
    }
}
