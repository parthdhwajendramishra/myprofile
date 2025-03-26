import { Highlight, themes } from "prism-react-renderer";
import { ContentBlock } from "../../types/categoryTypes";

export const AnswerContent = ({
  contentBlocks,
}: {
  contentBlocks: ContentBlock[];
}) => {
  console.log("AAAAA", contentBlocks);
  return (
    <div className="space-y-6">
      {contentBlocks?.map((block, index) => {
        switch (block.type) {
          case "text":
            return (
              <p key={index} className="text-gray-700 whitespace-pre-line">
                {block.content}
              </p>
            );
          case "code":
            return (
              <div
                key={index}
                className="rounded-lg overflow-hidden bg-[#282a36] my-4"
              >
                <Highlight
                  language={block.language || "javascript"}
                  theme={themes.vsDark}
                  code={block.content}
                >
                  {({
                    className,
                    style,
                    tokens,
                    getLineProps,
                    getTokenProps,
                  }) => (
                    <pre style={style}>
                      {tokens.map((line, i) => (
                        <div key={i} {...getLineProps({ line })}>
                          <span>{i + 1}</span>
                          {line.map((token, key) => (
                            <span key={key} {...getTokenProps({ token })} />
                          ))}
                        </div>
                      ))}
                    </pre>
                  )}
                </Highlight>
              </div>
            );
          case "image":
            return (
              <div key={index} className="flex justify-center my-4">
                <img
                  src={block.content}
                  alt={block.alt || "Diagram"}
                  className="max-w-full h-auto rounded-lg border border-gray-200"
                />
              </div>
            );
          default:
            return null;
        }
      })}
    </div>
  );
};
