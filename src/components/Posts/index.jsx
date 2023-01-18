import "./styles.css";

import { PostCard } from "../PostCard";

export const Posts = ({ posts = [] }) => (
  <div className="posts">
    {posts.map((post) => (
      <PostCard
        title={post.title}
        cover={post.cover}
        body={post.body}
        key={post.id}
      />
    ))}
  </div>
);
