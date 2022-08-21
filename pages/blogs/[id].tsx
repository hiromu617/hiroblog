import type { NextPage, GetStaticProps, GetStaticPaths } from 'next';
import Head from 'next/head';
import { client } from '../../src/libs/client';
import { BlogDetail } from '../../src/features/Blog/components/BlogDetail';
import { ShareButtons } from '../../src/components/Elements/ShareButtons';
import { LikeButton } from '../../src/features/Like/components/LikeButton';
import { Blog } from '../../src/api/types';
import { MicroCMSObjectContent } from 'microcms-js-sdk';
import markdownToHtml from 'zenn-markdown-html';
import { generateOgpUrl } from '../../src/utils/index';

type Props = {
  blog: Blog & MicroCMSObjectContent;
  id: string;
};

const BlogId: NextPage<Props> = ({ blog, id }) => {
  return (
    <>
      <Head>
        <title>{blog.title}</title>
        <meta property="description" content={blog.content} />
        <meta property="og:title" content={blog.title} />
        <meta property="og:description" content={blog.content} />
        <meta property="og:image" content={generateOgpUrl(blog.title)} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <div className="w-full md:w-[720px] justify-center m-auto">
        <div className="mb-10">
          <BlogDetail blog={blog} />
        </div>
        <div className="flex justify-center items-center gap-5 mb-10">
          <ShareButtons blog={blog} />
          <LikeButton blogId={id} />
        </div>
      </div>
    </>
  );
};

export default BlogId;

export const getStaticPaths: GetStaticPaths = async () => {
  const response = await client.blogs.$get();
  const paths = response.contents.map((content) => `/blogs/${content.id}`);

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async (context: any) => {
  const id = context.params.id;
  const response = await client.blogs._id(id).$get();
  response.content = markdownToHtml(response.content);

  return {
    props: {
      blog: response,
      id: id,
    },
  };
};
