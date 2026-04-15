export type BlogContentBlock =
  | {
      type: "heading";
      text: string;
    }
  | {
      type: "paragraph";
      text: string;
    }
  | {
      type: "list";
      items: string[];
    }
  | {
      type: "quote";
      text: string;
    };

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  content: BlogContentBlock[];
  image: string;
  author: string;
  date: string;
  readingTime: string;
  featured: boolean;
}
