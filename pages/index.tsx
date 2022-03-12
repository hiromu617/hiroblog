import type { NextPage } from 'next';
import Link from "next/link";
import type { Blog, BlogRes } from '../src/features/Blog/types';
import { client } from '../src/libs/client';

type Props = {
  blogs: Blog[]
}

const Home: NextPage<Props> = ({blogs}) => {
  return (
    <div>
      <h1 className="text-3xl font-bold underline text-red-600">Hello world!</h1>
      <button className="btn">Button</button>
      <div>
        <ul>
          {blogs.map((blog) => (
            <li key={blog.id}>
              <Link href={`/blogs/${blog.id}`}>
                <a>{blog.title}</a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
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
