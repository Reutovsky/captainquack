$(document).ready(function(){
  
    var $selectButton = $('#select-status'),
        $dropmenu = $('#drop-menu'),
        button1Text = "В наличии",
        button2Text = "Ожидается",
        button3Text = "Нет в наличии",
        $button1 = $('#button1'),
        $button2 = $('#button2'),
        $button3 = $('#button3');
    
    $selectButton.on('click', function(){
      $dropmenu.toggleClass('drop-menu-visible');
    });
  
    
    $button1.on('click', function(){
      $selectButton.text(button1Text);
      hideAll();
    });
    $button2.on('click', function(){
      $selectButton.text(button2Text);
      hideAll();
    });
    $button3.on('click', function(){
      $selectButton.text(button3Text);
      hideAll();
    });
    
    function hideAll(){
      if ($dropmenu.hasClass('drop-menu-visible')) $dropmenu.removeClass('drop-menu-visible')
    };
  });