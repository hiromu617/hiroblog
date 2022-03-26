import { VFC } from 'react';
import { format } from 'date-fns';
import { ZennPost } from '../types';

type Props = {
  post: ZennPost;
  isNew?: boolean;
};

export const ZennPostCard: VFC<Props> = ({ post, isNew }) => {
  return (
    <a href={post.link} target="_blank" rel="noreferrer">
      <li className="card w-full bg-base-100 shadow-xl hover:-translate-y-2 duration-200 ease-in-out hover:shadow-2xl">
        <div className="card-body">
          <h2 className="card-title md:text-3xl">{post.title}</h2>
          <div className="flex flex-wrap w-full gap-1 md:gap-3">
            {isNew && <div className="badge badge-accent badge-lg imary">NEW</div>}
            <div className="badge badge-lg imary">Zenn</div>
          </div>
          <span>{format(new Date(post.pubDate), 'yyyy.MM.dd')}</span>
        </div>
      </li>
    </a>
  );
};
