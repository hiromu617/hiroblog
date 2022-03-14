import { VFC } from 'react';
import Link from 'next/link';
import type { Blog } from '../../../features/Blog/types';
import { format } from 'date-fns';

type Props = {
  blog: Blog;
  isNew?: boolean;
};

export const BlogCard: VFC<Props> = ({ blog, isNew }) => {
  return (
    <Link href={`/blogs/${blog.id}`}>
      <a>
        <li className="card w-full bg-base-100 shadow-xl hover:-translate-y-2 duration-200 ease-in-out hover:shadow-2xl">
          <div className="card-body">
            <h2 className="card-title md:text-3xl">{blog.title}</h2>
            <div className="flex flex-wrap w-full gap-3">
              {isNew && (
                <div className="badge badge-accent badge-lg imary">
                  NEW
                </div>
              )}
              {blog.tags.map((tag) => (
                <div key={tag.id} className="badge badge-secondary badge-lg imary">
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
