import axios from "axios";

const BASE_URL = "https://api.github.com/users";

export const searchUser = async (query) => {
  const Response = await axios.get(
    `https://api.github.com/search/users?q=${query}`,
  );
  return Response.data.items;
};

export const getUserProfile = async (username) => {
  const Response = await axios.get(`${BASE_URL}/${username}`);

  return Response.data;
};

export const getRepositories = async (username) => {
  const Response = await axios.get(
    `${BASE_URL}/${username}/repos?per_page=20&sort=updated`,
  );

  return Response.data;
};

export const getFollowers = async (username) => {
  const Response = await axios.get(`${BASE_URL}/${username}/followers`);

  return Response.data;
};

export const getFollowing = async (username) => {
  const Response = await axios.get(`${BASE_URL}/${username}/following`);

  return Response.data;
};

// export const getGists = async (username) => {
//   const Response = await axios.get(`${BASE_URL}/${username}/gists`);

//   return Response.data;
// };

export const getGists = async (username) => {
  const response = await axios.get(
    `https://api.github.com/gists?username=${username}`,
  );

  return response.data;
};
