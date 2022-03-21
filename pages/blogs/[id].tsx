import type { NextPage, GetStaticProps, GetStaticPaths } from 'next';
import { client } from '../../src/libs/client';
import { BlogDetail } from '../../src/features/Blog/components/BlogDetail';
import { ShareButtons } from '../../src/components/Elements/ShareButtons';
import { Blog } from '../../src/api/types';
import { MicroCMSObjectContent} from 'microcms-js-sdk';

type Props = {
  blog: Blog & MicroCMSObjectContent;
};

const BlogId: NextPage<Props> = ({ blog }) => {
  return (
    <div className="w-full md:w-3/5 justify-center m-auto">
      <div className="mb-10">
        <BlogDetail blog={blog} />
      </div>
      <div className="mb-10">
        <ShareButtons blog={blog} />
      </div>
    </div>
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
  const response = await client.blogs._id(id).$get()

  return {
    props: {
      blog: response,
    },
  };
};
