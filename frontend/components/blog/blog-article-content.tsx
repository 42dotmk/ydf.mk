import type { BlogContentBlock } from "@/lib/blog/types";

interface BlogArticleContentProps {
  blocks: BlogContentBlock[];
}

export function BlogArticleContent({ blocks }: BlogArticleContentProps) {
  return (
    <div className="space-y-6 text-base leading-relaxed text-foreground">
      {blocks.map((block, index) => {
        if (block.type === "heading") {
          return (
            <h2
              key={index}
              className="pt-4 text-2xl font-semibold tracking-tight"
            >
              {block.text}
            </h2>
          );
        }

        if (block.type === "list") {
          return (
            <ul
              key={index}
              className="list-disc space-y-2 pl-6 text-muted-foreground"
            >
              {block.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          );
        }

        if (block.type === "quote") {
          return (
            <blockquote
              key={index}
              className="rounded-xl border-l-4 border-primary bg-primary/5 px-5 py-4 text-lg italic text-foreground"
            >
              {block.text}
            </blockquote>
          );
        }

        return (
          <p key={index} className="text-muted-foreground">
            {block.text}
          </p>
        );
      })}
    </div>
  );
}
