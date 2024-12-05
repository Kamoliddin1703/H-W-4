// Обновление кода при выборе страны
function updatePhoneCode() {
  const countrySelect = document.getElementById('country');
  const phoneCode = document.getElementById('phone-code');
  const selectedCountry = countrySelect.value;

  if (selectedCountry === "USA") {
    phoneCode.textContent = "+1";
  } else if (selectedCountry === "UK") {
    phoneCode.textContent = "+44";
  } else if (selectedCountry === "Russia") {
    phoneCode.textContent = "+7";
  } else if (selectedCountry === "India") {
    phoneCode.textContent = "+91";
  } else if (selectedCountry === "Japan") {
    phoneCode.textContent = "+81";
  } else if (selectedCountry === "Uzbekistan") {
    phoneCode.textContent = "+998";
  } else {
    phoneCode.textContent = "";
  }
}

// Определение страны по введенному коду
function detectCountry() {
  const phoneInput = document.getElementById('phone');
  const countrySelect = document.getElementById('country');
  const phoneCode = document.getElementById('phone-code');
  const inputValue = phoneInput.value.trim();

  if (inputValue.startsWith("+1")) {
    countrySelect.value = "USA";
    phoneCode.textContent = "+1";
  } else if (inputValue.startsWith("+44")) {
    countrySelect.value = "UK";
    phoneCode.textContent = "+44";
  } else if (inputValue.startsWith("+7")) {
    countrySelect.value = "Russia";
    phoneCode.textContent = "+7";
  } else if (inputValue.startsWith("+91")) {
    countrySelect.value = "India";
    phoneCode.textContent = "+91";
  } else if (inputValue.startsWith("+81")) {
    countrySelect.value = "Japan";
    phoneCode.textContent = "+81";
  } else if (inputValue.startsWith("+998")) {
    countrySelect.value = "Uzbekistan";
    phoneCode.textContent = "+998";
  } else {
    countrySelect.value = "";
    phoneCode.textContent = "";
  }
}