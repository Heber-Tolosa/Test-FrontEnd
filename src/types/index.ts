export type authorItem = {
  name: string;
  email?: string;
  id: string;
};

export type BookItem = {
  name: string;
  id: string;
  author_id: authorItem["id"];
  pages?: number;
};
