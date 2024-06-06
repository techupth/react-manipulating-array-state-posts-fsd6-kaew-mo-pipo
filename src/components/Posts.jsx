import dataPost from "./dataPosts";
import { useState } from "react";

function Posts() {
  return (
    <div class="app-wrapper">
      <h1 class="app-title">Posts</h1>
      <div class="post-list">
        {dataPost.map((post) => {
          const [countLike, setCountLike] = useState(post.likes);

          const addLike = () => {
            setCountLike(countLike + 1);
          };

          const subtractLike = () =>
            countLike !== 0
              ? setCountLike(countLike - 1)
              : setCountLike(countLike);
          return (
            <div class="post-item">
              <div class="post-header">
                <h2>Post Title #{post.id}</h2>
                <div class="post-social-media-stats">
                  <span class="stats-topic">Likes: </span>
                  <span class="post-likes">{countLike}</span>
                </div>
              </div>
              <p class="post-content">{post.content}</p>
              <div class="post-actions">
                <button class="like-button" onClick={addLike}>
                  Like
                </button>
                <button class="dislike-button" onClick={subtractLike}>
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
