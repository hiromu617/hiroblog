import { VFC } from 'react';
import type { Blog } from '../../features/Blog/types';
import { TwitterShareButton } from 'react-share';
import { FaTwitter, FaShare } from 'react-icons/fa';

type Props = {
  blog: Blog;
};

export const ShareButtons: VFC<Props> = ({ blog }) => (
  <div className="text-center">
    <div className="text-base-content mb-2 flex justify-center items-center gap-1 drop-shadow-xl">
      <div className="text-xl font-bold">Share</div>
      <FaShare size={20} />
    </div>
    <TwitterShareButton title={blog.title} url={`https://hiroblog.vercel.app/blogs/${blog.id}`}>
      <button className="btn btn-circle hover:btn-primary shadow-xl">
        <FaTwitter size={24} />
      </button>
    </TwitterShareButton>
  </div>
);
