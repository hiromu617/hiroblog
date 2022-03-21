import type { NextPage } from 'next';
import { client } from '../../../src/libs/client';
import { BlogCard } from '../../../src/features/Blog/components/BlogCard';
import { Pagination } from '../../../src/components/Elements/Pagination';
import { PER_PAGE } from '../../../src/const/index';
import { Blog, Tag } from '../../../src/api/types';
import { MicroCMSListContent } from 'microcms-js-sdk';
import { TagList } from '../../../src/features/Tag/components/TagList';

type Props = {
  tagId: string,
  blogs: (Blog & MicroCMSListContent)[];
  tags: (Tag & MicroCMSListContent)[];
  totalCount: number;
};

const BlogPageId: NextPage<Props> = ({ tagId, blogs, tags, totalCount }) => {
  return (
    <div className="w-full md:w-3/5 justify-center m-auto">
      <div className="mb-7">
        <TagList tags={tags} />
      </div>
      <ul className="flex flex-col gap-5 w-full mb-10">
        {blogs.map((blog, i) => (
          <BlogCard blog={blog} key={blog.id} isNew={i === 0} />
        ))}
      </ul>
      <div className="mb-10">
        <Pagination totalCount={totalCount} />
      </div>
    </div>
  );
};

export default BlogPageId;

export const getServerSideProps = async (context: any) => {
  const tagId = context.params.tagId;
  const response = await client.blogs.$get({
    query: { offset: 0, limit: PER_PAGE, filters: `tags[contains]${tagId}` },
  });
  const tagResponse = await client.tags.$get();

  return {
    props: {
      tagId: tagId,
      blogs: response.contents,
      tags: tagResponse.contents,
      totalCount: response.totalCount,
    },
  };
};
