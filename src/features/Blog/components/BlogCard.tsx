import { VFC } from 'react';
import Link from 'next/link';
import type { Blog } from '../../../features/Blog/types';
import { format } from 'date-fns';

type Props = {
  blog: Blog;
};

export const BlogCard: VFC<Props> = ({ blog }) => {
  return (
    <Link href={`/blogs/${blog.id}`}>
      <a>
        <li className="card w-full bg-base-100 shadow-xl hover:bg-primary-focus hover:text-white">
          <div className="card-body">
            <h2 className="card-title md:text-3xl">{blog.title}</h2>
            <div className="flex flex-wrap w-full gap-3">
              <div className="badge badge-primary badge-lg imary">React</div>
              <div className="badge badge-primary badge-lg imary">TypeScript</div>
              <div className="badge badge-primary badge-lg imary">Next.js</div>
            </div>
            <span>{format(new Date(blog.publishedAt), 'yyyy.MM.dd')}</span>
          </div>
        </li>
      </a>
    </Link>
  );
};
