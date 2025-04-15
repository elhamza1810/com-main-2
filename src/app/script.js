document.addEventListener('DOMContentLoaded', () => {
  const items = document.querySelectorAll('.item'); // Assuming items have a class 'item'
  const leftButton = document.querySelector('.left-button'); // Assuming left button has a class 'left-button'
  const rightButton = document.querySelector('.right-button'); // Assuming right button has a class 'right-button'
  let currentIndex = 0;

  function updateItems() {
    items.forEach((item, index) => {
      item.style.display = (index === currentIndex) ? 'block' : 'none';
    });
  }

  leftButton.addEventListener('click', () => {
    currentIndex = (currentIndex === 0) ? items.length - 1 : currentIndex - 1;
    updateItems();
  });

  rightButton.addEventListener('click', () => {
    currentIndex = (currentIndex === items.length - 1) ? 0 : currentIndex + 1;
    updateItems();
  });

  updateItems(); // Initial call to display the first item
});
