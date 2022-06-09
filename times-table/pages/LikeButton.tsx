import React, { useState } from 'react';
const LikeButton: React.FC = () => {
  const [like, setLike] = useState(false);
  return (
    <div>
      <button onClick={() => setLike(!like)}>{like ? 'liked' : 'like'}</button>
    </div>
  );
};
export default LikeButton;
