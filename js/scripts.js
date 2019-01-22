var items = [];

$(document).ready(function(){

  $("#formOne").submit(function(event){
    event.preventDefault();
    var inputedValue = $("input#inputItem").val();
    items.push(inputedValue);
    $("ul#unsortedList").append("<li>"+inputedValue+"</li>")
  });

  $("#sortingButton").click(function(){
    var capList= items.map(function(item){
      return item.toUpperCase();
    });
    var sortedItems = capList.sort();
    sortedItems.forEach(function(item){
      $("ul#sortedList").append("<li>"+item+"</li>")
    })
  });
});
