import { useState } from 'react';
import { LikeStyles as s } from './Like.styles';
import { FaHeart } from 'react-icons/fa';
import { FaRegHeart } from 'react-icons/fa';

interface LikeProps {
  getLikesDB: () => number;
  updateLikesDB: (likes: number) => void;
  liked: boolean;
}

export const Like = ({ getLikesDB, updateLikesDB, liked }: LikeProps): JSX.Element => {
  const [localLikes, setLocalLikes] = useState(getLikesDB);
  const [hasLiked, setLiked] = useState(liked);

  function OnClick(): void {
    updateLikesDB(hasLiked ? -1 : 1);
    setLocalLikes(localLikes + (hasLiked ? -1 : 1));
    setLiked(!hasLiked);
  }

  return (
    <s.Wrapper>
      <s.Likes title="Leave a Like!" onClick={OnClick}>
        {hasLiked && <FaHeart />}
        {!hasLiked && <FaRegHeart />}
        <br />
        <div>{typeof localLikes !== 'undefined' ? localLikes : ''}</div>
      </s.Likes>
    </s.Wrapper>
  );
};
