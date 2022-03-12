export type Blog = {
  readonly id: string;
  readonly title: string;
  readonly content: string;
  readonly createdAt: string;
  readonly publishedAt: string;
  readonly reviseAt: string;
};

export type BlogRes = {
  readonly contents: Blog[];
  readonly totalCount: number;
  readonly offset: number;
  readonly limit: number;
};
