import React from 'react';

export type postInfo = {
  id: number,
  title: string,
  content: string,
}
type blogProps = {
  posts: Array<postInfo>
}
function Blog(props: blogProps) {
  const { posts } = props;

  const sidebar = (
    <ul>
      {posts.map((post) => (
        <li key={post.id}>
          {post.title}
        </li>
      ))}
    </ul>
  );
  const content = posts.map((post) => (
    <div key={post.id}>
      <h3>{post.title}</h3>
      <p>{post.content}</p>
      {sidebar}
    </div>
  ));
  return (
    <div>
      {content}
    </div>
  );
}
export default Blog;
