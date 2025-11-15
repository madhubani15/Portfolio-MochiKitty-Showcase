// Append new recommendation and show confirmation popup
document.getElementById('rec-form').addEventListener('submit', function(e){
  e.preventDefault();
  const input = document.getElementById('rec-input');
  const text = input.value.trim();
  if(!text) return;
  // append to list
  const li = document.createElement('li');
  li.className = 'rec';
  li.textContent = text;
  document.getElementById('rec-list').appendChild(li);
  input.value = '';
  // show popup confirmation (modal or alert)
  // simple alert works for popup.png requirement:
  alert('Thank you for leaving a recommendation!');
});
