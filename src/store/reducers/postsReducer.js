import { ADD_POST, UPDATE_POST, REMOVE_POST, FETCH_POST } from "../constants";

const initialState = {
  posts: [
    {
      userId: 1,
      id: 1,
      title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
      content:
        "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
      category: "News"
    },
    {
      userId: 1,
      id: 2,
      title: "qui est esse",
      content:
        "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla",
      category: "News",
      featured: true
    },
    {
      userId: 1,
      id: 3,
      title: "ea molestias quasi exercitationem repellat qui ipsa sit aut",
      content:
        "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut",
      category: "General",
      featured: true
    },
    {
      userId: 1,
      id: 4,
      title: "eum et est occaecati",
      content:
        "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit",
      category: "General"
    },
    {
      userId: 1,
      id: 5,
      title: "nesciunt quas odio",
      content:
        "repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque",
      category: "General"
    },
    {
      userId: 1,
      id: 6,
      title: "dolorem eum magni eos aperiam quia",
      content:
        "ut aspernatur corporis harum nihil quis provident sequi\nmollitia nobis aliquid molestiae\nperspiciatis et ea nemo ab reprehenderit accusantium quas\nvoluptate dolores velit et doloremque molestiae",
      category: "Sports"
    }
  ]
};

const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      return {
        ...state,
        posts: [...state.posts, action.data]
      };
    case UPDATE_POST:
      return {
        ...state,
        posts: [...state.posts, action.data]
      };
    case REMOVE_POST:
      return {
        ...state,
        posts: state.posts
      };
    case FETCH_POST:
      return {
        ...state
      };
    default:
      return state;
  }
};

export default postsReducer;
