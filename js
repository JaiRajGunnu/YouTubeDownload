// Wait for the document to be ready before executing JavaScript
$(document).ready(function () {
  // Click event handler for the "click-btn-down" button
  $(".click-btn-down").click(function () {
    // Get the values of the link and format fields
    var link = $(".link").val();
    var format = $(".formte").val(); // Use .val() to get the selected option's value

    // Check if both link and format are provided
    if (link && format) {
      // Generate the download URL
      var downloadUrl = "https://loader.to/api/button/?url=" + link + "&f=" + format;

      // Create an iframe element for the download button
      var iframe = $('<iframe>', {
        style: "width:100%;height:60px;border:0;overflow:hidden;color:#fff;border-color:none;",
        scrolling: "no",
        src: downloadUrl,
      });

      // Replace the content of the "download-video" element with the iframe
      $(".download-video").html(iframe);
    } else {
      // Handle the case where either the link or format is missing
      alert("Please provide both a link and a format.");
    }
  });

  // Prevent default behavior for elements with the class "click"
  $(document).on("click", ".click", function (e) {
    e.preventDefault();
    e.stopImmediatePropagation();
    return false;
  });
});
