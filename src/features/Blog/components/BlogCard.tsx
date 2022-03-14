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
              {blog.tags.map((tag) => (
                <div key={tag.id} className="badge badge-primary badge-lg imary">
                  {tag.name}
                </div>
              ))}
            </div>
            <span>{format(new Date(blog.publishedAt), 'yyyy.MM.dd')}</span>
          </div>
        </li>
      </a>
    </Link>
  );
};
