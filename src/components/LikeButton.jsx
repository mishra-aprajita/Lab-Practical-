import { useState } from 'react';

export default function LikeButton() {
  const [isLiked, setIsLiked] = useState(false);

  return (
    <div>
      <h2>Toggle Like</h2>
      <button 
      
        onClick={() => setIsLiked(prev => !prev)}
      
      >
        {isLiked ? '❤️' : '🤍'}
      </button>
      <p>{isLiked ? "You liked this!" : "Click the heart to like"}</p>
    </div>
  );
}
