function filterPosts() {
  var input = document.getElementById("searchInput").value.toLowerCase();
  var posts = document.querySelectorAll(".listItem");
  posts.forEach(function (post) {
    var title = post.querySelector(".postTitle").textContent.toLowerCase();
    if (title.includes(input)) {
      post.style.display = "";
    } else {
      post.style.display = "none";
    }
  });
}

filterPosts();
