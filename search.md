<html>
  <form action="search.html">
    <div class="tipue_search_group">
      <input
        type="text"
        name="q"
        id="tipue_search_input"
        pattern=".{3,}"
        title="At least 3 characters"
        required
      /><button type="submit" class="tipue_search_button">
        <div class="tipue_search_icon">&#9906;</div>
      </button>
    </div>
  </form>
  <div id="tipue_search_content"></div>
</html>
<script>
  $(document).ready(function() {
    $("#tipue_search_input").tipuesearch();
  });
</script>
