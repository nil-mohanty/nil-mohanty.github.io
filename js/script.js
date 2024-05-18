function downloadCV() {
    var link = document.createElement("a");
    link.href = "pdfs/Resume.pdf";
    link.download = "Nil_Mohanty_SDE_Resume.pdf";
    link.target = "_blank"; // Open in a new tab
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
  
  document.addEventListener("DOMContentLoaded", function() {
    var searchInput = document.getElementById("blog-search-query");
    var tagLinks = document.querySelectorAll(".tag-cloud-link");

    // Filter blog snippets based on search query
    searchInput.addEventListener("input", function() {
        var query = searchInput.value.toLowerCase();
        var snippets = document.querySelectorAll(".blog-snippet");

        snippets.forEach(function(snippet) {
            var snippetText = snippet.textContent.toLowerCase();
            if (snippetText.includes(query)) {
                snippet.style.display = "block";
            } else {
                snippet.style.display = "none";
            }
        });
    });

    // Filter blog snippets based on selected tag
    tagLinks.forEach(function(link) {
        link.addEventListener("click", function(event) {
            event.preventDefault();
            var selectedTag = link.textContent.toLowerCase();
            var snippets = document.querySelectorAll(".blog-item");

            snippets.forEach(function(snippet) {
                if (snippet.classList.contains(selectedTag)) {
                    snippet.style.display = "block";
                } else {
                    snippet.style.display = "none";
                }
            });
        });
    });
});
