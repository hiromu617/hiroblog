import { MicroCMSListContent } from 'microcms-js-sdk';

export type Blog = {
  readonly title: string;
  readonly content: string;
  readonly tags: (Tag & MicroCMSListContent)[];
};

export type Tag = {
  readonly name: string;
};
