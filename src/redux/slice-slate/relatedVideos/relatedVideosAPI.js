import axiosInstance from "../../../utils/axios";

export const getRelatedVideos = async ({ tags, id }) => {
  const limit = 5;
  let queryString =
    tags?.length > 0
      ? tags.map((tag) => `tags_like=${tag}`).join("&") +
        `&id_ne=${id}&_limit=${limit}`
      : `&id_ne=${id}&_limit=${limit}`;
  const res = await axiosInstance.get(`/videos?${queryString}`);
  return res.data;
};

//http://localhost:9000/videos?tags_like=vscode&tags_like=tips&id_ne=2&_limit=5
//?tags_like=javascript&tags_like=react&id_ne=4&_limit=5
//['tags_like=javascript', ['tags_like=react']]
