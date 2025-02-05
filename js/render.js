import { postTemplateGrid, postTemplateList } from "./template.js";
import { fetchPosts } from "./fetch.js";

// retur promise
export const renderPost = async () => {
  const userContainer = document.querySelector(".users-container");

  const usersBox = document.querySelector(".users-box");
  const listContainer = document.querySelector(".list-container");

  const btnGrid = document.querySelector(".btn-grid");
  const btnList = document.querySelector(".btn-list");

  // Get post
  const posts = await fetchPosts();

  if (userContainer) { 

    posts.forEach((post) => {
      usersBox.innerHTML += postTemplateGrid(post);
  });

  btnGrid.addEventListener("click", () => {
    listContainer.innerHTML = "";
    usersBox.innerHTML = "";
    posts.forEach((post) => {
      usersBox.innerHTML += postTemplateGrid(post);
    });
  });

  btnList.addEventListener("click", () => {
    listContainer.innerHTML = "";
    usersBox.innerHTML = "";
    posts.forEach((post) => {
      listContainer.innerHTML += postTemplateList(post);
    });
  });

  }
  //   console.log(posts);
  const pagePost = document.querySelector(".singel-post");

  if (pagePost) {
    const search = location.search;
    console.log(search);
                                         // retur string
    const postID = new URLSearchParams(search).get("id");

    const foundPost = posts.find((post) => post.id == postID);
    console.log(foundPost);
    pagePost.innerHTML = `<p>${foundPost.userName}</p>`;
  }
};
