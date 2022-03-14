import type { NextPage } from 'next';
import { client } from '../../src/libs/client';
import type { Blog, BlogRes } from '../../src/features/Blog/types';
import { BlogDetail } from '../../src/features/Blog/components/BlogDetail';
import { ShareButtons } from '../../src/components/Elements/ShareButtons';

type Props = {
  blog: Blog;
};

const BlogId: NextPage<Props> = ({ blog }) => {
  return (
    <div className="w-full md:w-3/5 justify-center m-auto">
      <div className="mb-5">
        <BlogDetail blog={blog} />
      </div>
      <div className="mb-5">
        <ShareButtons blog={blog} />
      </div>
    </div>
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
