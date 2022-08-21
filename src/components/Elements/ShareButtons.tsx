import { VFC } from 'react';
import type { Blog } from '../../api/types';
import { TwitterShareButton } from 'react-share';
import { FaTwitter, FaShare } from 'react-icons/fa';
import { MicroCMSObjectContent } from 'microcms-js-sdk';
import { useRouter } from 'next/router';
import { SITE_URL } from '../../const/index';

type Props = {
  blog: Blog & MicroCMSObjectContent;
};

export const ShareButtons: VFC<Props> = ({ blog }) => {
  const router = useRouter();

  return (
    <div className="text-center">
      <div className="text-base-content mb-2 flex justify-center items-center drop-shadow-xl">
        <FaShare size={20} />
      </div>
      <TwitterShareButton title={blog.title} url={`${SITE_URL}${router.asPath}`}>
        <div className="btn btn-circle hover:btn-primary shadow-xl">
          <FaTwitter size={24} />
        </div>
      </TwitterShareButton>
    </div>
  );
};
