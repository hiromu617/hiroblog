import { VFC } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { PER_PAGE } from '../../const/index';

type Props = {
  totalCount: number;
};

const range = (start: number, end: number) => [...Array(end - start + 1)].map((_, i) => start + i);

export const Pagination: VFC<Props> = ({ totalCount }) => {
  const router = useRouter();
  const { id } = router.query;
  const currentPage: number = id ? +id : 1;

  return (
    <div className="btn-group justify-center drop-shadow-xl">
      {range(1, Math.ceil(totalCount / PER_PAGE)).map((number, index) => (
        <Link href={number === 1 ? '/' : `/blogs/page/${number}`} key={index} passHref>
          <button className={`btn hover:btn-primary ${currentPage === number && 'btn-active'}`}>
            {number}
          </button>
        </Link>
      ))}
    </div>
  );
};
