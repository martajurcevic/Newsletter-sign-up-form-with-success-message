const main = document.getElementById('main')
const modal = document.getElementById('modal')

const emailInput = document.getElementById('emailInput');
const subscribeButton = document.getElementById('subscribeToNewsletter')
const dismissButton = document.getElementById('dismissButton')
const emailWarning = document.getElementById('email-warning')

const userMail = document.getElementById('userMail')

// Subscribe to newsletter
subscribeButton.addEventListener('click', (e) => {
    e.preventDefault();
    const email = emailInput.value.trim()
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email) || !email) {
        emailInput.classList.add('invalid');
        emailWarning.removeAttribute('hidden')
    } else {
        emailInput.classList.remove('invalid');
        emailWarning.setAttribute('hidden', '')
        userMail.textContent = emailInput.value.trim()
        main.classList.add('hidden')
        modal.classList.remove('hidden')
    }
})

// Dismiss message in modal
dismissButton.addEventListener('click', (e) => {
    e.preventDefault();
    main.classList.remove('hidden');
    modal.classList.add('hidden');
    emailInput.value = ''
})