import { useState } from "react";
import postsList from "../data/posts";

function Posts() {
  // const [likes, setLikes] = useState(0);
  const data = postsList.map((item) => {
    return item.likes;
  });
  // const data = postsList.map(() => {
  //   return 0;
  // });

  const [likesList, setLikesList] = useState(data);

  function handleLike(index) {
    const newLikesList = [...likesList];
    if (newLikesList[index] >= 0) {
      newLikesList[index] = newLikesList[index] + 1;
    } else {
      newLikesList[index] = 1;
    }

    setLikesList(newLikesList);
  }

  function handleDisLike(index) {
    const newLikesList = [...likesList];
    if (newLikesList[index] > 0) {
      newLikesList[index] = newLikesList[index] - 1;
    } else {
      newLikesList[index] = 0;
    }
    setLikesList(newLikesList);
  }
  return (
    <div class="app-wrapper">
      <h1 class="app-title">Posts</h1>
      <div class="post-list">
        {postsList.map((item, index) => {
          return (
            <div class="post-item" key={index}>
              <div class="post-header">
                <h2>
                  {item.title} #{item.id}
                </h2>
                <div class="post-social-media-stats">
                  <span class="stats-topic">Likes: </span>
                  <span class="post-likes">{likesList[index]}</span>
                </div>
              </div>
              <p class="post-content">{item.content}</p>
              <div class="post-actions">
                <button
                  class="like-button"
                  onClick={() => {
                    handleLike(index);
                  }}
                >
                  Like
                </button>
                <button
                  class="dislike-button"
                  onClick={() => {
                    handleDisLike(index);
                  }}
                >
                  Dislike
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Posts;
