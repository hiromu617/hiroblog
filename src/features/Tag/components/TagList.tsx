import { VFC } from 'react';
import { Tag } from '../../../api/types';
import { MicroCMSListContent } from 'microcms-js-sdk';
import { TagListItem } from './TagListItem';

type Props = {
  tags: (Tag & MicroCMSListContent)[];
};

export const TagList: VFC<Props> = ({ tags }) => {
  return (
    <ul className="flex flex-wrap w-full gap-5">
      {tags.map((tag, i) => (
        <TagListItem key={tag.id} tag={tag} isActive={i === 1} />
      ))}
    </ul>
  );
};
