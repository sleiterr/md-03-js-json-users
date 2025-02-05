export const postTemplateGrid = (post) => {
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

export const postTemplateList = (post) => {
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
