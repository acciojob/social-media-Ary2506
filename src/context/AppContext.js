import React, { createContext, useContext, useReducer } from "react";

const emptyReactions = { thumbsUp: 0, hooray: 0, heart: 0, rocket: 0, eyes: 0 };

const initialUsers = [
  { id: "0", name: "Alice Johnson" },
  { id: "1", name: "Bob Martin" },
  { id: "2", name: "Charlie Davis" },
];

const initialPosts = [
  {
    id: "1",
    title: "First Post",
    content: "Hello world, this is my first post!",
    author: "0",
    date: "2024-01-01T10:00:00.000Z",
    reactions: { ...emptyReactions },
  },
  {
    id: "2",
    title: "Learning React",
    content: "React hooks make state management so much easier.",
    author: "0",
    date: "2024-01-02T10:00:00.000Z",
    reactions: { ...emptyReactions },
  },
  {
    id: "3",
    title: "Weekend Trip",
    content: "Went hiking over the weekend, the views were amazing!",
    author: "1",
    date: "2024-01-03T10:00:00.000Z",
    reactions: { ...emptyReactions },
  },
  {
    id: "4",
    title: "New Recipe",
    content: "Tried a new pasta recipe today, it turned out great.",
    author: "1",
    date: "2024-01-04T10:00:00.000Z",
    reactions: { ...emptyReactions },
  },
  {
    id: "5",
    title: "Book Review",
    content: "Just finished reading a great sci-fi novel.",
    author: "2",
    date: "2024-01-05T10:00:00.000Z",
    reactions: { ...emptyReactions },
  },
  {
    id: "6",
    title: "Coding Tips",
    content: "Always write clean, readable, and well tested code.",
    author: "2",
    date: "2024-01-06T10:00:00.000Z",
    reactions: { ...emptyReactions },
  },
];

const initialState = {
  posts: initialPosts,
  users: initialUsers,
  notifications: [],
};

const AppStateContext = createContext(null);

function appReducer(state, action) {
  switch (action.type) {
    case "posts/postAdded": {
      const { title, content, author } = action.payload;
      const newPost = {
        id: Date.now().toString(),
        title,
        content,
        author,
        date: new Date().toISOString(),
        reactions: { ...emptyReactions },
      };
      return { ...state, posts: [...state.posts, newPost] };
    }
    case "posts/postUpdated": {
      const { id, title, content } = action.payload;
      return {
        ...state,
        posts: state.posts.map((post) =>
          post.id === id ? { ...post, title, content } : post
        ),
      };
    }
    case "posts/reactionAdded": {
      const { postId, reaction } = action.payload;
      return {
        ...state,
        posts: state.posts.map((post) =>
          post.id === postId
            ? {
                ...post,
                reactions: {
                  ...post.reactions,
                  [reaction]: post.reactions[reaction] + 1,
                },
              }
            : post
        ),
      };
    }
    case "notifications/refreshed": {
      const messages = [
        "New post added by Alice Johnson",
        "Bob Martin reacted to your post",
        "Charlie Davis commented on a post",
      ];
      const notifications = messages.map((message, index) => ({
        id: `${Date.now()}-${index}`,
        message,
        date: new Date().toISOString(),
      }));
      return { ...state, notifications };
    }
    default:
      return state;
  }
}

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  const actions = {
    addPost: (title, content, author) =>
      dispatch({ type: "posts/postAdded", payload: { title, content, author } }),
    updatePost: (id, title, content) =>
      dispatch({ type: "posts/postUpdated", payload: { id, title, content } }),
    addReaction: (postId, reaction) =>
      dispatch({ type: "posts/reactionAdded", payload: { postId, reaction } }),
    refreshNotifications: () => dispatch({ type: "notifications/refreshed" }),
  };

  const value = { ...state, ...actions };

  return (
    <AppStateContext.Provider value={value}>
      {children}
    </AppStateContext.Provider>
  );
};

export const useAppState = () => {
  const context = useContext(AppStateContext);
  if (!context) {
    throw new Error("useAppState must be used within an AppProvider");
  }
  return context;
};
