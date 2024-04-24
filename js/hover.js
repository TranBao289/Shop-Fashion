const image = document.querySelector('img');
const tooltip = document.querySelector('#tooltip');

image.addEventListener('mouseover', function() {
  tooltip.style.display = 'block';
});

image.addEventListener('mouseout', function() {
  tooltip.style.display = 'none';
});
