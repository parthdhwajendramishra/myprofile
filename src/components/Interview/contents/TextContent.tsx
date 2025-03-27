import { ContentBlock } from "../../../types/categoryTypes";

export const TextContent = ({ block }: { block: ContentBlock }) => {
  return <p className="text-gray-700 whitespace-pre-line">{block.content}</p>;
};
