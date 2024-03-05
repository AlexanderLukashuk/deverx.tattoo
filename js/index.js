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

  function redirectToInstagramDirect() {
    window.location.href = "https://www.instagram.com/direct/t/102650134468655";
    // window.location.href = "https://www.instagram.com/deverx.tattoo/";
}

function redirectToTelegram() {
    window.location.href = "https://t.me/deverxtattoo";
}