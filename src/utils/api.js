export const getPosts = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  if (!res.ok) {
    throw { message: "Failure fetching post", status: 500 };
  }
  return res.json();
};

export const getPost = async (id) => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts/" + id);
  if (!res.ok) {
    throw { message: "Failure fetching post", status: 500 };
  }
  return res.json();
};
