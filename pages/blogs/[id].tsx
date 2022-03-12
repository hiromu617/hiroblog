import type { NextPage } from 'next';
import Link from 'next/link';
import { client } from '../../src/libs/client';
import type { Blog, BlogRes } from '../../src/features/Blog/types';

type Props = {
  blog: Blog;
};

const BlogId: NextPage<Props> = ({ blog }) => {
  return (
    <main>
      <h1>{blog.title}</h1>
      <p>{blog.publishedAt}</p>
      <div>{blog.content}</div>
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
  console.log(data);
  return {
    props: {
      blog: data,
    },
  };
};
