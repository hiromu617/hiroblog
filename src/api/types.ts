import { MicroCMSListContent } from 'microcms-js-sdk';

export type Blog = {
  readonly title: string;
  content: string;
  readonly tags: (Tag & MicroCMSListContent)[];
};

export type Tag = {
  readonly name: string;
  readonly slug: string;
  readonly image: {
    url: string;
    width: number;
    height: number;
  };
};
