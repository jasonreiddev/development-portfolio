import { Dispatch, SetStateAction, useState } from 'react';

import { LikeStyles as s } from './Like.styles';
import { FaHeart, FaRegHeart } from 'react-icons/fa';

export interface LikeProps {
  getLikesDBValue:
    | ((setLikesFunction: Dispatch<SetStateAction<number>>) => Promise<void>)
    | (() => void);
  setLikesDBValue: (likes: number) => void;
  liked: boolean;
}

export const Like = ({
  setLikesDBValue,
  getLikesDBValue = () => {
    console.log('getLikesDBValue');
  },
  liked,
}: LikeProps): JSX.Element => {
  const [hasLiked, setLiked] = useState(liked);
  const [localLikes, setLocalLikes] = useState(0);
  getLikesDBValue(setLocalLikes);

  function OnClick(): void {
    setLiked(!hasLiked);
    getLikesDBValue(setLocalLikes);
    const newLikeValue = localLikes + (hasLiked ? -1 : 1);
    setLikesDBValue(newLikeValue);
    setLocalLikes(newLikeValue);
  }

  return (
    <s.Wrapper>
      <s.Likes title="Leave a Like!" onClick={OnClick} active={hasLiked}>
        <FaHeart className="solid-heart" />
        <FaRegHeart />
        <div>{typeof localLikes !== 'undefined' ? localLikes : ''}</div>
      </s.Likes>
    </s.Wrapper>
  );
};
