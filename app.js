import { fetchPosts } from "./api.js";
import { renderPosts } from "./view.js";

const loadButton = document.querySelector("#load-posts");
const statusMessage = document.querySelector("#posts-status");
const postList = document.querySelector("#posts-list");

async function loadPosts() {
  if (loadButton.disabled) {
    return;
  }

  loadButton.disabled = true;
  statusMessage.textContent = "Loading posts…";

  try {
    const { posts, status } = await fetchPosts();
    renderPosts(postList, posts);
    statusMessage.textContent = posts.length === 0
      ? "No posts were returned."
      : "Loaded " + posts.length + " posts (HTTP " + status + ").";
  } catch (error) {
    const listStatus = postList.children.length > 0
      ? "Showing posts from the last successful load."
      : "No posts are currently displayed.";

    statusMessage.textContent = error.message + " " + listStatus + " You can try again.";
  } finally {
    loadButton.disabled = false;
  }
}

loadButton.addEventListener("click", loadPosts);
