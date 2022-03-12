import type { NextPage } from 'next';
import Link from 'next/link';
import { client } from '../../src/libs/client';
import type { Blog, BlogRes } from '../../src/features/Blog/types';
import ReactMarkdown from 'react-markdown';

type Props = {
  blog: Blog;
};

const BlogId: NextPage<Props> = ({ blog }) => {
  return (
    <main>
      <h1>{blog.title}</h1>
      <p>{blog.publishedAt}</p>
      <article className="prose">
        <ReactMarkdown>{blog.content}</ReactMarkdown>
      </article>
    </main>
  );
};

export default BlogId;

export const getStaticPaths = async () => {
  const data: BlogRes = await client.get({ endpoint: 'blogs' });
  const paths = data.contents.map((content) => `/blogs/${content.id}`);

  return { paths, fallback: false };
};

export const getStaticProps = async (context: any) => {
  const id = context.params.id;
  const data: Blog = await client.get({ endpoint: 'blogs', contentId: id });
  return {
    props: {
      blog: data,
    },
  };
};
