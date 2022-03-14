import { VFC } from 'react';
import type { Blog } from '../../features/Blog/types';
import {
  TwitterShareButton,
} from 'react-share';
import { FaTwitter } from 'react-icons/fa';

type Props = {
  blog: Blog;
};

export const ShareButtons: VFC<Props> = ({ blog }) => (
  <div className="flex justify-center gap-5">
    <TwitterShareButton title={blog.title} url={`https://hiroblog.vercel.app/blogs/${blog.id}`}>
      <button className="btn btn-lg btn-circle hover:btn-primary shadow-xl">
        <FaTwitter size={30}/>
      </button>
    </TwitterShareButton>
  </div>
);
