const form = document.querySelector('form');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const data = new FormData(form);
  fetch('/api/jobs', {
    method: 'POST',
    body: data,
  });
});