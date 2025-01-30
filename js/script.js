const usersBox = document.querySelector(".users-box");

const userstemplete = (post) => {
  return `
    <ul class='users-list'>
      <li class="list-item">
        <div class="img-box">
         <img src="${post.src}" alt="${post.userName}" class="users-img" />
        </div>
        <div class="users-info">
         <h4 class="name-title">${post.title}</h4>
         <p class="item-subtitle">${post.nickname}</p>
         <a href="mailto:${post.email}" class="users-email"
            >${post.email}</a>
         <a href="#" class="users-link">Se website</a>
        </div>
        </li>
    </ul>
    `;
};


