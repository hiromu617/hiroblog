export type Blog = {
  readonly title: string;
  readonly content: string;
  readonly tags: Tag[];
};

export type Tag = {
  readonly name: string;
};
