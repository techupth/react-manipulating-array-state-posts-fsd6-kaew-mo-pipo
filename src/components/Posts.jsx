import { useState } from "react";
import PostData from "../data/post";

function Posts() {
  const [postDataState, setPostDataState] = useState(PostData);

  // const plusLike = (index) => {
  //   let newPost = [...postDataState];
  //   newPost[index].likes = newPost[index].likes + 1;
  //   setPostDataState(newPost);
  // };
  // const minusLike = (index) => {
  //   let newPost = [...postDataState];
  //   newPost[index].likes = newPost[index].likes - 1;
  //   setPostDataState(newPost);
  // };

  const calculateLike = (text, index) => {
    let newPost = [...postDataState];
    if (text === "like") {
      newPost[index].likes = newPost[index].likes + 1;
    } else if (text === "dislike") {
      if (newPost[index].likes === 0) {
        return;
      }
      newPost[index].likes = newPost[index].likes - 1;
    }
    setPostDataState(newPost);
  };
  return (
    <div class="app-wrapper">
      <h1 class="app-title">Posts</h1>
      <div class="post-list">
        {postDataState.map((item, index) => (
          <div class="post-item" key={index}>
            <div class="post-header">
              <h2>{item.title}</h2>
              <div class="post-social-media-stats">
                <span class="stats-topic">Likes: </span>
                <span class="post-likes">{item.likes}</span>
              </div>
            </div>
            <p class="post-content">{item.content}</p>
            <div class="post-actions">
              <button
                class="like-button"
                onClick={() => {
                  calculateLike("like", index);
                }}
              >
                Like
              </button>
              <button
                class="dislike-button"
                onClick={() => {
                  calculateLike("dislike", index);
                }}
              >
                Dislike
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Posts;
