const usersBox = document.querySelector(".users-box");
const listContainer = document.querySelector(".list-container");

const btnGrid = document.querySelector(".btn-grid");
const btnList = document.querySelector(".btn-list");

/* template functions */
const postTemplateGrid = (post) => {
  return ` 
    <ul class='users-list'>
      <li class="list-item">
        <div class="img-box">
         <img src="${post.src}" alt="${post.userName}" class="users-img" />
        </div>
        <div class="users-info">
         <h4 class="name-title">${post.userName}</h4>
         <p class="item-subtitle">${post.nickname}</p>
         <a href="mailto:${post.email}" class="users-email"
            >${post.email}</a>
         <a href="#" class="users-link">Se website</a>
        </div>
        </li>
    </ul>
    `;
};

const postTemplateList = (post) => {
  return `
    <ul class='users-list'>
      <li class="list-users">
        <div class="image-box">
         <img src="${post.src}" alt="${post.userName}" class="users-image" />
        </div>
        <div class="user-info">
         <h4 class="list-title">${post.userName}</h4>
         <p class="item-subtitle">${post.nickname}</p>
        </div>
        <a href="mailto:${post.email}" class="list-email">${post.email}</a>
        <a href="#" class="users-link">Se website</a>
      </li>
    </ul>
    `;
};

// get data fom json
const fetchPosts = async () => {
  try {
    const response = await fetch("../usersInfo.json");
    const posts = await response.json();
    return posts;
  } catch {
    console.error("Error fetching or parsing data:", error);
  }
};

const renderPost = async () => {
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

renderPost();
