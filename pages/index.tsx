import type { NextPage } from 'next';
import Link from "next/link";
import { client } from '../src/libs/client';

type Blog = {
  readonly id: string;
  readonly title: string;
  readonly content: string;
  readonly createdAt: string;
  readonly publishedAt: string;
  readonly reviseAt: string;
};

type BlogRes = {
  readonly contents: Blog[];
  readonly totalCount: number;
  readonly offset: number;
  readonly limit: number;
};

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
