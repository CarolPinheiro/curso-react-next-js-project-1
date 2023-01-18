import { string, number, arrayOf, shape } from 'prop-types';

import './styles.css';

import { PostCard } from '../PostCard';

export const Posts = ({ posts = [] }) => (
  <div className="posts">
    {posts.map((post) => (
      <PostCard title={post.title} cover={post.cover} body={post.body} key={post.id} />
    ))}
  </div>
);

Posts.defaultProps = {
  posts: [],
};

Posts.propTypes = {
  posts: arrayOf(
    shape({
      title: string.isRequired,
      cover: string.isRequired,
      body: string.isRequired,
      id: number.isRequired,
    }),
  ),
};
