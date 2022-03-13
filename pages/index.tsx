import type { NextPage } from 'next';
import Link from 'next/link';
import type { Blog, BlogRes } from '../src/features/Blog/types';
import { client } from '../src/libs/client';

type Props = {
  blogs: Blog[];
};

const Home: NextPage<Props> = ({ blogs }) => {
  return (
    <div className="w-full md:w-2/3 justify-center m-auto">
      <ul className="flex flex-col gap-5 w-full">
        {blogs.map((blog) => (
          <Link href={`/blogs/${blog.id}`} key={blog.id} passHref>
            <a>
              <li className="card w-full bg-base-100 shadow-xl hover:bg-primary hover:text-white">
                <div className="card-body">
                  <h2 className="card-title">{blog.title}</h2>
                  <p>If a dog chews shoes whose shoes does he choose?</p>
                </div>
              </li>
            </a>
          </Link>
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
