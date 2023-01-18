import { string, number } from 'prop-types';

import './styles.css';

export const PostCard = ({ title, cover, body }) => (
  <div className="post">
    <img src={cover} alt={title} />
    <div className="post-content">
      <h2>{title}</h2>
      <p>{body}</p>
    </div>
  </div>
);

PostCard.propTypes = {
  title: string.isRequired,
  cover: string.isRequired,
  body: string.isRequired,
  id: number.isRequired,
};
