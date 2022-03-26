import type { NextPage, GetStaticProps } from 'next';
import { Blog, Tag } from '../src/api/types';
import { client } from '../src/libs/client';
import { BlogCard } from '../src/features/Blog/components/BlogCard';
import { TagList } from '../src/features/Tag/components/TagList';
import { PER_PAGE } from '../src/const';
import { Pagination } from '../src/components/Elements/Pagination';
import { MicroCMSListContent } from 'microcms-js-sdk';
import { differenceInDays } from 'date-fns';
import posts from '../src/rss/posts.json';
import { ZennPost } from '../src/features/ZennPost/types';
import { ZennPostCard } from '../src/features/ZennPost/components/ZennPostCard';

type Props = {
  tags: (Tag & MicroCMSListContent)[];
};

const Home: NextPage<Props> = ({ tags }) => {
  return (
    <div className="w-full md:w-3/5 justify-center m-auto">
      <div className="mb-7">
        <TagList tags={tags} />
      </div>
      <ul className="flex flex-col gap-5 w-full mb-10">
        {(posts as ZennPost[]).map((post) => (
          <ZennPostCard
            post={post}
            key={post.link}
            isNew={differenceInDays(new Date(), new Date(post.pubDate)) <= 7}
          />
        ))}
      </ul>
      <div className="mb-10">
        <Pagination totalCount={posts.length} />
      </div>
    </div>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  const tagResponse = await client.tags.$get();

  return {
    props: {
      tags: tagResponse.contents,
    },
  };
};
