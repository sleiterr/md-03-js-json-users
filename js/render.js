import { postTemplateGrid, postTemplateList } from "./template.js";
import { fetchPosts} from './fetch.js'

export const renderPost = async () => {
  const usersBox = document.querySelector(".users-box");
  const listContainer = document.querySelector(".list-container");

  const btnGrid = document.querySelector(".btn-grid");
  const btnList = document.querySelector(".btn-list");
  const posts = await fetchPosts();

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

  //   console.log(posts);
};
