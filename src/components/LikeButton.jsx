import { useState } from 'react';

export default function LikeButton() {
  const [isLiked, setIsLiked] = useState(false);

  return (
    <div style={{ padding: '20px', textAlign: 'center', border: '1px solid pink' }}>
      <h2>Toggle Like</h2>
      <button 
      
        onClick={() => setIsLiked(prev => !prev)}
        style={{ fontSize: '50px', cursor: 'pointer', background: 'none', border: 'none' }}
      >
        {isLiked ? '❤️' : '🤍'}
      </button>
      <p>{isLiked ? "You liked this!" : "Click the heart to like"}</p>
    </div>
  );
}