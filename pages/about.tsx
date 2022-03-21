import type { NextPage } from 'next';
import { client } from '../src/libs/client';
import { BlogCard } from '../src/features/Blog/components/BlogCard';

const About: NextPage = () => {
  return (
    <div className="w-full md:w-3/5 justify-center m-auto">
      about page
    </div>
  );
};

export default About;

// export const getStaticProps = async () => {
//   const blogData: BlogRes = await client.get({
//     endpoint: 'blogs',
//   });

//   return {
//     props: {
//       blogs: blogData.contents,
//     },
//   };
// };
