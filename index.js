'use strict';

$(function() {
  $('h1').css('color', 'red');

  let list1 = $('.shopping-list');

  $('#js-shopping-list-form').submit(event => {
    event.preventDefault();
    let input = $(event.currentTarget).find('input[name="shopping-list-entry"]').val();

    list1.append(`<li>
    <span class="shopping-item">${input}</span>
    <div class="shopping-item-controls">
      <button class="shopping-item-toggle">
        <span class="button-label">check</span>
      </button>
      <button class="shopping-item-delete">
        <span class="button-label">delete</span>
      </button>
    </div>
  </li>`);

    $('#shopping-list-entry').val('');

  });

  list1.on('click', '.shopping-item-toggle', function() {
    $(this).closest('li').find('.shopping-item').toggleClass('shopping-item__checked');
  })

  list1.on('click', '.shopping-item-delete', function() {
    $(this).closest('li').remove();
  })

});
