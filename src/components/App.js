import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./../styles/App.css";
import { AppProvider } from "../context/AppContext";
import Navigation from "./Navigation";
import PostsPage from "./PostsPage";
import AddPostForm from "./AddPostForm";
import UsersList from "./UsersList";
import UserPage from "./UserPage";
import SinglePostPage from "./SinglePostPage";
import NotificationsPage from "./NotificationsPage";

const App = () => {
  return (
    <div className="App">
      {/* Do not remove the main div */}
      <AppProvider>
        <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
          <Navigation />
          <main>
            <Routes>
              <Route path="/" element={<PostsPage />} />
              <Route path="/addPost" element={<AddPostForm />} />
              <Route path="/users" element={<UsersList />} />
              <Route path="/users/:userId" element={<UserPage />} />
              <Route path="/posts/:postId" element={<SinglePostPage />} />
              <Route path="/notifications" element={<NotificationsPage />} />
            </Routes>
          </main>
        </BrowserRouter>
      </AppProvider>
    </div>
  );
};

export default App;
