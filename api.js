const postsUrl = "https://jsonplaceholder.typicode.com/posts";

function isValidPost(post) {
  return post !== null && typeof post === "object" &&
    Number.isInteger(post.id) && Number.isInteger(post.userId) &&
    typeof post.title === "string" && typeof post.body === "string";
}

export async function fetchPosts() {
  let response;
  try {
    response = await fetch(postsUrl, { method: "GET", cache: "no-store" });
  } catch {
    throw new Error("Could not reach the posts server. Check your connection.");
  }

  if (!response.ok) {
    throw new Error(response.status === 404
      ? "The posts endpoint was not found (HTTP 404)."
      : "The server returned HTTP " + response.status + ".");
  }

  const posts = await response.json();
  if (!Array.isArray(posts) || !posts.every(isValidPost)) {
    throw new Error("The server returned posts in an unexpected format.");
  }

  return { posts, status: response.status };
}
