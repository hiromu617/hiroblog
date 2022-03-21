import { VFC } from 'react';
import Link from 'next/link';
import { format } from 'date-fns';
import ReactMarkdown from 'react-markdown';
import { Blog } from '../../../../src/api/types';
import { MicroCMSListContent} from 'microcms-js-sdk';

type Props = {
  blog: Blog & MicroCMSListContent;
};

export const BlogDetail: VFC<Props> = ({ blog }) => {
  return (
    <main className="w-full bg-base-100 shadow-xl rounded-2xl px-2 md:px-5 py-10 text-base-content">
      <h1 className="text-2xl md:text-3xl font-bold text-center pb-3">{blog.title}</h1>
      <div className="text-center mb-5">
        {format(new Date(blog.publishedAt), 'yyyy.MM.dd hh:mm')}
      </div>
      {blog.tags.length !== 0 && (
        <div className="flex flex-wrap w-full gap-1 md:gap-3 mb-10 justify-center">
          {blog.tags.map((tag) => (
            <div key={tag.id} className="badge badge-secondary badge-lg">
              {tag.name}
            </div>
          ))}
        </div>
      )}
      <article className="prose">
        <ReactMarkdown>{blog.content}</ReactMarkdown>
      </article>
    </main>
  );
};
