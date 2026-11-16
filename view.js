export function renderPosts(postList, posts) {
  const fragment = document.createDocumentFragment();

  for (const post of posts) {
    const item = document.createElement("li");
    const title = document.createElement("h3");
    const details = document.createElement("p");
    const body = document.createElement("p");

    title.textContent = post.title;
    details.textContent = `Post ID ${post.id} · User ID ${post.userId}`;
    body.textContent = post.body;

    item.append(title, details, body);
    fragment.append(item);
  }

  postList.replaceChildren(fragment);
}
