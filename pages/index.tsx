import type { NextPage, GetStaticProps } from 'next';
import { Blog } from '../src/api/types';
import { client } from '../src/libs/client';
import { BlogCard } from '../src/features/Blog/components/BlogCard';
import { PER_PAGE } from '../src/const';
import { Pagination } from '../src/components/Elements/Pagination';
import { MicroCMSListContent } from 'microcms-js-sdk';

type Props = {
  blogs: (Blog & MicroCMSListContent)[];
  totalCount: number;
};

const Home: NextPage<Props> = ({ blogs, totalCount }) => {
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

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  const response = await client.blogs.$get({ query: { offset: 0, limit: PER_PAGE } });

  return {
    props: {
      blogs: response.contents,
      totalCount: response.totalCount,
    },
  };
};
