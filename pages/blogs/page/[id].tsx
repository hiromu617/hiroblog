import type { NextPage } from 'next';
import type { Blog, BlogRes } from '../../../src/features/Blog/types';
import { client } from '../../../src/libs/client';
import { BlogCard } from '../../../src/features/Blog/components/BlogCard';
import { Pagination } from '../../../src/components/Elements/Pagination';
import { PER_PAGE } from '../../../src/const/index';

type Props = {
  blogs: Blog[];
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
  const repos: BlogRes = await client.get({
    endpoint: `blogs`,
  });

  const range = (start: number, end: number) =>
    [...Array(end - start + 1)].map((_, i) => start + i);

  const paths = range(2, Math.ceil(repos.totalCount / PER_PAGE)).map(
    (repo) => `/blogs/page/${repo}`
  );

  return { paths, fallback: false };
};

export const getStaticProps = async (context: any) => {
  const id = context.params.id;

  const data: BlogRes = await client.get({
    endpoint: `blogs?offset=${(id - 1) * PER_PAGE}&limit=${PER_PAGE}`,
  });

  return {
    props: {
      blogs: data.contents,
      totalCount: data.totalCount,
    },
  };
};
