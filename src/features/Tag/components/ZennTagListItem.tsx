import { VFC } from 'react';
import Image from 'next/image';
import Link from 'next/link';

type Props = {
  isActive: boolean;
};

export const ZennTagListItem: VFC<Props> = ({ isActive }) => {
  return (
    <li className="text-center">
      <Link href={`/zenn`}>
        <a className="avatar">
          <div
            className={`${
              isActive && 'ring ring-primary ring-offset-base-100 ring-offset-2'
            } w-16 rounded-full bg-base-100 p-3 shadow-xl hover:ring hover:ring-offset-base-100 hover:ring-offset-2`}
          >
            <div className="w-full h-full relative">
              <Image src="/logo-only.svg" layout="fill" alt={`zennのロゴ`} />
            </div>
          </div>
        </a>
      </Link>
      <div className="text-sm font-bold">Zenn</div>
    </li>
  );
};
