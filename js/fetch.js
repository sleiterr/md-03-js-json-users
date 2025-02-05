export const fetchPosts = async () => {
  try {
    const response = await fetch("./Data/usersInfo.json");
    const posts = await response.json();
    return posts;
  } catch {
    console.error("Error fetching or parsing data:", error);
  }
};
