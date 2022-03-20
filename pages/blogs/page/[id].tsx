import type { NextPage } from 'next';
import { client } from '../../../src/libs/client';
import { BlogCard } from '../../../src/features/Blog/components/BlogCard';
import { Pagination } from '../../../src/components/Elements/Pagination';
import { PER_PAGE } from '../../../src/const/index';
import { Blog } from '../../../src/api/types';
import { MicroCMSListContent} from 'microcms-js-sdk';

type Props = {
  blogs: (Blog & MicroCMSListContent)[];
  totalCount: number;
};

const BlogPageId: NextPage<Props> = ({ blogs, totalCount }) => {
  return (
    <div className="w-full md:w-3/5 justify-center m-auto">
      <ul className="flex flex-col gap-5 w-full mb-10">
        {blogs.map((blog, i) => (
          <BlogCard blog={blog} key={blog.id} isNew={i === 0} />
        ))}
      </ul>
      <div>
        <Pagination totalCount={totalCount} />
      </div>
    </div>
  );
};

export default BlogPageId;

export const getStaticPaths = async () => {
  const repos = await client.blogs.$get();

  const range = (start: number, end: number) =>
    [...Array(end - start + 1)].map((_, i) => start + i);

  const paths = range(2, Math.ceil(repos.totalCount / PER_PAGE)).map(
    (repo) => `/blogs/page/${repo}`
  );

  return { paths, fallback: false };
};

export const getStaticProps = async (context: any) => {
  const id = context.params.id;
  const response = await client.blogs.$get({query :{offset: (id - 1) * PER_PAGE, limit: PER_PAGE}} );

  return {
    props: {
      blogs: response.contents,
      totalCount: response.totalCount,
    },
  };
};
