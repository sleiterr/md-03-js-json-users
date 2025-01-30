const usersBox = document.querySelector(".users-box");

const userstemplete = (post) => {
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

// get data fom json
const fetchPosts = async () => {
  try {
    const response = await fetch("../Data.json/usersInfo.json");
    const posts = await response.json();
    return posts;
  } catch {
    console.error("Error fetching or parsing data:", error);
  }
};

const renderPost = async () => {
  const posts = await fetchPosts();

  posts.forEach((post) => {
    usersBox.innerHTML += userstemplete(post);
  });
  console.log(posts);
};

renderPost();
