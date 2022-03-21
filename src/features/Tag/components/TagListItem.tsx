import { VFC } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Tag } from '../../../api/types';
import { MicroCMSListContent } from 'microcms-js-sdk';

type Props = {
  tag: Tag & MicroCMSListContent;
  isActive: boolean;
};

export const TagListItem: VFC<Props> = ({ tag, isActive }) => {
  return (
    <li className="text-center">
      <Link href={`/tags/${tag.id}`}>
        <a className="avatar">
          <div className={`${isActive && "ring ring-offset-base-100 ring-offset-2"} w-16 rounded-full bg-base-100 p-3 shadow-xl`}>
            <div className="w-full h-full relative">
              <Image src={tag.image.url} layout="fill" alt={`${tag.name}のロゴ`} />
            </div>
          </div>
        </a>
      </Link>
      <div className="text-sm font-bold">{tag.name}</div>
    </li>
  );
};
