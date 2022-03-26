import { VFC } from 'react';
import { Tag } from '../../../api/types';
import { MicroCMSListContent } from 'microcms-js-sdk';
import { TagListItem } from './TagListItem';
import { useRouter } from 'next/router';
import { ZennTagListItem } from './ZennTagListItem';

type Props = {
  tags: (Tag & MicroCMSListContent)[];
};

export const TagList: VFC<Props> = ({ tags }) => {
  const router = useRouter();
  const { tagId } = router.query;

  return (
    <ul className="flex flex-nowrap w-full gap-3 md:gap-5 overflow-x-auto pt-2">
      {tags.map((tag, i) => (
        <TagListItem key={tag.id} tag={tag} isActive={tagId === tag.id} />
      ))}
      <ZennTagListItem isActive={router.pathname === '/zenn'} />
    </ul>
  );
};
