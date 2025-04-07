import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Blog() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get('https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2F%40blairckirkpatrick')
      .then(response => {
        setPosts(response.data.items);
      })
      .catch(error => {
        console.error('Failed to fetch Medium posts', error);
      });
  }, []);

  return (
    <div>
      <h1>Blog</h1>
      {posts.map((post) => (
        <div key={post.guid} style={{ marginBottom: '1.5rem' }}>
          <h3><a href={post.link} target="_blank" rel="noopener noreferrer">{post.title}</a></h3>
          <p dangerouslySetInnerHTML={{ __html: post.description.substring(0, 200) + '...' }} />
        </div>
      ))}
    </div>
  );
}

export default Blog;
