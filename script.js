$(document).ready(function() {
    // Add a task when the add button is clicked
    $("#add").click(function() {
      // Get the value of the input field
      var task = $("#task").val();
      // Check if the input is not empty
      if (task) {
        // Create a new list item with a span and a delete button
        var li = $("<li><span>" + task + "</span><button class='delete'>X</button></li>");
        // Append the list item to the list
        $("#list").append(li);
        // Clear the input field
        $("#task").val("");
      }
    });
  
    // Delete a task when the delete button is clicked
    $(document).on("click", ".delete", function() {
      // Get the parent list item of the delete button
      var li = $(this).parent();
      // Remove the list item from the list
      li.remove();
    });
  
    // Mark a task as done when the list item is clicked
    $(document).on("click", "li", function() {
      // Toggle the done class on the list item
      $(this).toggleClass("done");
    });
  });
  