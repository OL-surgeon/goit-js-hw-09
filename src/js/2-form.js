const form = document.querySelector('.feedback-form');
const formData = { email: '', message: '' };
const storageKey = 'feedback-form-state';

const saveToLocalStorage = () => {
  localStorage.setItem(storageKey, JSON.stringify(formData));
};

form.addEventListener('input', event => {
  formData[event.target.name] = event.target.value;
  saveToLocalStorage();
});

document.addEventListener('DOMContentLoaded', () => {
  const savedData = localStorage.getItem(storageKey);
  if (savedData) {
    const parsedData = JSON.parse(savedData);
    form.email.value = parsedData.email || '';
    form.message.value = parsedData.message || '';
    formData.email = parsedData.email || '';
    formData.message = parsedData.message || '';
  }
});

form.addEventListener('submit', event => {
  event.preventDefault();

  if (!formData.email || !formData.message) {
    alert('Fill please all fields');
    return;
  }

  console.log(formData);

  localStorage.removeItem(storageKey);
  formData.email = '';
  formData.message = '';
  form.reset();
});
