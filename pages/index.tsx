import type { NextPage } from 'next';
import type { Blog, BlogRes } from '../src/features/Blog/types';
import { client } from '../src/libs/client';
import { BlogCard } from '../src/features/Blog/components/BlogCard';

type Props = {
  blogs: Blog[];
};

const Home: NextPage<Props> = ({ blogs }) => {
  return (
    <div className="w-full md:w-3/5 justify-center m-auto">
      <ul className="flex flex-col gap-5 w-full">
        {blogs.map((blog) => (
          <BlogCard blog={blog} key={blog.id} />
        ))}
      </ul>
    </div>
  );
};

export default Home;

export const getStaticProps = async () => {
  const blogData: BlogRes = await client.get({
    endpoint: 'blogs',
  });

  return {
    props: {
      blogs: blogData.contents,
    },
  };
};
