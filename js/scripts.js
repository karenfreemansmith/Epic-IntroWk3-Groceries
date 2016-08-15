$(document).ready(function() {
  $("form").submit(function(event) {
    var groceries = [$("#item1").val(),$("#item2").val(),$("#item3").val(),$("#item4").val()];
    groceries.sort();
    var storeItems = groceries.map(function(storeItem)
      {return storeItem.toUpperCase();
    });
    storeItems.forEach(function(storeItem) {
      $("ul").append("<li>"+ storeItem+"</li>");
    });
    $("#groceryList").show();
    $("#inputList").hide();
    event.preventDefault();
  });
});
