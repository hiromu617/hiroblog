import type { NextPage } from 'next';
import type { Blog, BlogRes } from '../src/features/Blog/types';
import { client } from '../src/libs/client';
import { BlogCard } from '../src/features/Blog/components/BlogCard';
import { PER_PAGE } from '../src/const';
import { Pagination } from '../src/components/Elements/Pagination';

type Props = {
  blogs: Blog[];
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

export const getStaticProps = async () => {
  const blogData: BlogRes = await client.get({
    endpoint: `blogs?offset=0&limit=${PER_PAGE}`,
  });

  return {
    props: {
      blogs: blogData.contents,
      totalCount: blogData.totalCount,
    },
  };
};
