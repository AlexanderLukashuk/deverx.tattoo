function toggleInfo() {
    var additionalInfo = document.querySelector('.additional-info');
    var button = document.querySelector('button');
  
    if (additionalInfo.style.display === 'none') {
      additionalInfo.style.display = 'block';
      button.textContent = 'Показать меньше';
    } else {
      additionalInfo.style.display = 'none';
      button.textContent = 'Показать больше';
    }
  }
  
  function toggleInfoPreparation() {
    var additionalInfo = document.querySelector('.right .additional-info');
    var button = document.querySelector('.right button');
  
    if (additionalInfo.style.display === 'none') {
      additionalInfo.style.display = 'block';
      button.textContent = 'Скрыть';
    } else {
      additionalInfo.style.display = 'none';
      button.textContent = 'Показать';
    }
  }