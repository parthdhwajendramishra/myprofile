import { ContentBlock } from "../../../types/categoryTypes";

export const ImageContent = ({ block }: { block: ContentBlock }) => {
  return (
    <div className="flex justify-center my-4">
      <img
        src={
          Array.isArray(block.content) ? block.content.join("") : block.content
        }
        alt={block.alt || "Diagram"}
        className="max-w-full h-auto rounded-lg border border-gray-200"
      />
    </div>
  );
};
