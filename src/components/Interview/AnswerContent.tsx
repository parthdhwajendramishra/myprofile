import { ContentBlock } from "../../types/categoryTypes";
import { CodeContent } from "./contents/CodeContent";
import { ImageContent } from "./contents/ImageContent";
import { TextContent } from "./contents/TextContent";

export const AnswerContent = ({
  contentBlocks,
}: {
  contentBlocks: ContentBlock[];
}) => {
  return (
    <div className="space-y-6">
      {contentBlocks?.map((block, index) => {
        switch (block.type) {
          case "text":
            return <TextContent key={index} block={block} />;
          case "code":
            return <CodeContent key={index} block={block} />;
          case "image":
            return <ImageContent key={index} block={block} />;
          default:
            return null;
        }
      })}
    </div>
  );
};
