// .startsWith polyfill for IE
if (!String.prototype.startsWith) {
  String.prototype.startsWith = function(searchString, position) {
    position = position || 0;
    return this.indexOf(searchString, position) === position;
  };
}

    // lightbox2 (Lokesh Dhakar, https://lokeshdhakar.com/projects/lightbox2, MIT License)
  $("article img").each(function() {
    var $e = $(this);
    var title = $e.attr("title") || $e.attr("alt") || "";
    $e.wrap("<a data-lightbox='image' data-title='" + title + "' href='" + $e.attr("src") + "' class='expand-img'></a>");
  });

  $(document).ready(function() {
    $("#tipue_search_input").tipuesearch();
  });