function showModal() {
    console.log("working");
    $("#modal_" + $(this).attr("data-id")).show();

    function closeModal() {
        $("#modal_" + $(this).attr("data-id")).hide();
    };

    $(document).on("click", ".modalClose", closeModal);
};
//Create on click events for comments on articles
$(document).on("click", ".comment-button", showModal);

$(document).on("click", "#savecomment", function() {
  // Grab the id associated with the article from the submit button
  console.log("click firing");
  var thisId = $(this).attr("data-id");
  console.log("pre-comment-body");
  var commentBody = $("#bodyinput-"+$(this).attr("data-id")).val();
  console.log(commentBody);

  // Run a POST request to change the note, using what's entered in the inputs
  $.ajax({
    method: "POST",
    url: "/articles/" + thisId,
    data: {
      body: commentBody
    }
  })
    // With that done
    .done(function(data) {
      // Log the response
      console.log(data);
      // Empty the notes section
      location.reload();
    });
    
});

$(document).on("click", "#deletecomment", function() {
  console.log("working");
  var id = $(this).attr("data-comment");
  $.ajax({
    method: "POST",
    url: "/articles/delete/" + id,
    data: {
    }
  })

    .done(function(data) {
      console.log(data);
      location.reload();
    });
});

//Save article on click event
$(document).on("click", ".save-button", function() {
  var id = $(this).attr("data-id");
  $.ajax({
    method: "POST",
    url: "/articles/save/" + id,
    data: {
    }
  })

    .done(function(data) {
      console.log(data);
      location.reload();
    });
});

//Don't save on click event
$(document).on("click", ".unsave-button", function() {
  var id = $(this).attr("data-id");
  $.ajax({
    method: "POST",
    url: "/articles/unsave/" + id,
    data: {
    }
  })

    .done(function(data) {
      console.log(data);
      location.reload();
    });
});