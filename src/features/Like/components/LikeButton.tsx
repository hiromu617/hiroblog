import { FC, useState } from 'react';

type Props = {
  blogId: string;
};

export const LikeButton: FC<Props> = ({ blogId }) => {
  const [count, setCount] = useState(0);
  const handleClick = () => {
    setCount((count) => count + 1);
  };
  return (
    <div>
      <div className="text-base-content mb-2 flex justify-center items-center gap-1 drop-shadow-xl">
        <div className="text-xl font-bold">{count}</div>
      </div>
      <button
        onClick={handleClick}
        type="button"
        className="btn btn-circle hover:btn-primary shadow-xl text-xl"
      >
        👍
      </button>
    </div>
  );
};
