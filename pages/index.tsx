import type { NextPage, GetStaticProps } from 'next';
import Head from 'next/head';
import { Blog, Tag } from '../src/api/types';
import { client } from '../src/libs/client';
import { BlogCard } from '../src/features/Blog/components/BlogCard';
import { TagList } from '../src/features/Tag/components/TagList';
import { PER_PAGE } from '../src/const';
import { Pagination } from '../src/components/Elements/Pagination';
import { MicroCMSListContent } from 'microcms-js-sdk';
import { differenceInDays } from 'date-fns';
import { generateOgpUrl } from '../src/utils/index';

type Props = {
  blogs: (Blog & MicroCMSListContent)[];
  tags: (Tag & MicroCMSListContent)[];
  totalCount: number;
};

const Home: NextPage<Props> = ({ blogs, tags, totalCount }) => {
  return (
    <>
      <Head>
        <title>blog.hiromu617</title>
        <meta property="description" content="hiromu617のブログです" />
        <meta property="og:title" content="blog.hiromu617" />
        <meta property="og:description" content="hiromu617のブログです" />
        <meta name="twitter:card" content="summary" />
      </Head>
      <div className="w-full md:w-3/5 justify-center m-auto">
        <div className="mb-7">
          <TagList tags={tags} />
        </div>
        <ul className="flex flex-col gap-5 w-full mb-10">
          {blogs.map((blog, i) => (
            <BlogCard
              blog={blog}
              key={blog.id}
              isNew={differenceInDays(new Date(), new Date(blog.publishedAt)) <= 7}
            />
          ))}
        </ul>
        <div className="mb-10">
          <Pagination totalCount={totalCount} />
        </div>
      </div>
    </>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  const response = await client.blogs.$get({ query: { offset: 0, limit: PER_PAGE } });
  const tagResponse = await client.tags.$get();

  return {
    props: {
      blogs: response.contents,
      tags: tagResponse.contents,
      totalCount: response.totalCount,
    },
  };
};
