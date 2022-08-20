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
          <div
            className={`${
              isActive && 'ring ring-primary ring-offset-base-100 ring-offset-2'
            } w-16 rounded-full bg-base-100 p-3 shadow-xl hover:ring hover:ring-offset-base-100 hover:ring-offset-2`}
          >
            <div className="w-full h-full relative">
              {tag.image ? (
                <Image src={tag.image.url} layout="fill" alt={`${tag.name}のロゴ`} />
              ) : (
                <div className="text-3xl absolute justify-center align-middle items-center w-full h-full">
                  {tag.emoji}
                </div>
              )}
            </div>
          </div>
        </a>
      </Link>
      <div className="text-sm font-bold">{tag.name}</div>
    </li>
  );
};
