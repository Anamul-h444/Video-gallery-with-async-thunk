# About Video Gallery project

---

## Components

- When first time load show all videos (componens/videoGrid/VideoGrid.jsx)
- If click any video play with all description (components/videoDescription/Video.jsx)
  - Play video (VideoPlayer.jsx)
  - Show video descrtiption ( VideoDescription.jsx)
  - Show like and unlike (LikeUnlike.jsx)
- when playing any video related video is showing at right side (components/videoDescription/relatedVideo)
- Filter video by tag and search.
- When filter without homepage with filtering redirected in homepage.

## How to show related videos with tag from playing video

- Fetch tags from API and store in redux state and showing in ui (components/tags/Tag.jsx)
- ReletedVideoList componet get id and tags from playing video (Video.jsx) and pass in api by redux.
- API is below:

```js
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
```

- When tag is mapping he return as ['tags_like=javascript', ['tags_like=react']. So every array join with &.

- `tags_like=javascript` - query with javascript
- `&id_ne=${id}` - not equal - means showing related videos without playing videos which get by id.
- limi set 5

## How to search video by tags

- Selected tag send in filterSlice (components/tags/Tag.js) - See in component
- Navbar search component send searchKey in filterSlice(components/navbar/Search.jsx)
- From filterSlice selected tags and searchkey get videosAPI (redux/videos/videosAPI)

```js
import axiosInstance from "../../../utils/axios";

export const getVideos = async ({ tags, search }) => {
  let queryString = "";
  if (tags?.length > 0) {
    queryString += tags.map((tag) => `tags_like=${tag}`).join("&");
  }
  if (search !== "") {
    queryString += `&q=${search}`;
  }
  const res = await axiosInstance.get(`/videos?${queryString}`);
  return res.data;
};
```

- `&q=${search}` - search with keyword.

## Redirect homepage system

```js
import { useMatch, useNavigate } from "react-router-dom";

const Search = () => {
  const dispatch = useDispatch();
  const { search } = useSelector((state) => state.filters);
  const [input, setInput] = useState(search);

  const match = useMatch("/");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(searched(input));

    //If not in homepage and search redirect in homepage
    if (!match) {
      navigate("/");
    }
  };
```
