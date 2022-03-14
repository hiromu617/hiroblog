import type { Tag } from '../../Tag/types';

export type Blog = {
  readonly id: string;
  readonly title: string;
  readonly content: string;
  readonly createdAt: string;
  readonly publishedAt: string;
  readonly reviseAt: string;
  readonly tags: Tag[];
};

export type BlogRes = {
  readonly contents: Blog[];
  readonly totalCount: number;
  readonly offset: number;
  readonly limit: number;
};
