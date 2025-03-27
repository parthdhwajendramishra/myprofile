import { useParams } from "react-router-dom";
import { useState } from "react";
import { useMediaQuery } from "@mui/material";
import { AnswerContent } from "./AnswerContent";
import { reactData } from "./data/reactjs";
import { Category, QA } from "../../types/categoryTypes";

const interviewCategories: Category[] = [
  {
    id: "react",
    name: "React Fundamentals",
    icon: "⚛️",
    subcategories: reactData,
  },
  // More categories...
];

const CategoryPage = () => {
  const { categoryId } = useParams<{ categoryId: string }>();
  const category = interviewCategories.find((cat) => cat.id === categoryId);
  const [selectedQA, setSelectedQA] = useState<QA | null>(null);
  const [expandedGroups, setExpandedGroups] = useState<Record<string, boolean>>(
    {}
  );

  const isSmallScreen = useMediaQuery("(max-width:768px)");

  const toggleGroup = (group: string) => {
    setExpandedGroups((prev) => ({
      ...prev,
      [group]: !prev[group],
    }));
  };

  if (!category) {
    return (
      <div className="p-6 text-center text-gray-800">Category not found</div>
    );
  }

  // Initialize expanded groups if not set
  if (Object.keys(expandedGroups).length === 0) {
    const initialExpandedState = Object.keys(category.subcategories).reduce(
      (acc, group) => {
        acc[group] = false;
        return acc;
      },
      {} as Record<string, boolean>
    );
    setExpandedGroups(initialExpandedState);
  }

  return (
    <div
      className={`flex ${
        isSmallScreen ? "flex-col" : "flex-row"
      } min-h-screen bg-gray-50`}
    >
      {/* Left Sidebar */}
      {/* <div
        className={`${
          isSmallScreen ? "w-full" : "w-1/4"
        } bg-blue-100 p-4 border-r border-gray-300 overflow-y-auto`}
      >
        <h2 className="text-xl font-bold mb-4 text-gray-800">
          {category.name}
        </h2>

        {Object.entries(category.subcategories).map(([group, topics]) => (
          <div key={group} className="mb-2">
            <div
              className="flex items-center justify-between p-2 rounded cursor-pointer hover:bg-blue-200"
              onClick={() => toggleGroup(group)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === "Enter" && toggleGroup(group)}
            >
              <h3 className="font-semibold text-gray-700 capitalize">
                {group}
              </h3>
              <span className="text-gray-600">
                {expandedGroups[group] ? "−" : "+"}
              </span>
            </div>

            {expandedGroups[group] && (
              <ul className="space-y-1 pl-4 mt-1">
                {topics.map((topic, index) => (
                  <li
                    key={`${group}-${index}`}
                    className={`cursor-pointer p-2 rounded ${
                      selectedTopic?.q === topic.q
                        ? "bg-blue-500 text-white"
                        : "hover:bg-blue-200 text-gray-800"
                    }`}
                    onClick={(e) => {
                      e.stopPropagation();
                      console.log("Group", group);
                      //   setSelectedSubcategory(group);

                      setSelectedTopic(topic);
                    }}
                  >
                    {topic.q}
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div> */}
      <div
        className={`${
          isSmallScreen ? "w-full" : "w-1/4"
        } bg-blue-100 p-4 border-r border-gray-300 overflow-y-auto`}
      >
        <h2 className="text-xl font-bold mb-4 text-gray-800">
          {category.name}
        </h2>

        {Object.entries(category.subcategories).map(([group, qaList]) => (
          <div key={group} className="mb-2">
            <div
              className="flex items-center justify-between p-2 rounded cursor-pointer hover:bg-blue-200"
              onClick={() => toggleGroup(group)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === "Enter" && toggleGroup(group)}
            >
              <h3 className="font-semibold text-gray-700 capitalize">
                {group}
              </h3>
              <span className="text-gray-600">
                {expandedGroups[group] ? "−" : "+"}
              </span>
            </div>

            {expandedGroups[group] && (
              <ul className="space-y-1 pl-4 mt-1">
                {qaList.map((qa, index) => (
                  <li
                    key={`${group}-${index}`}
                    className={`cursor-pointer p-2 rounded ${
                      selectedQA?.q === qa.q
                        ? "bg-blue-500 text-white"
                        : "hover:bg-blue-200 text-gray-800"
                    }`}
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedQA(qa);
                    }}
                  >
                    {qa.q}
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>

      {/* Right Content Area */}
      {/* <div
        className={`${
          isSmallScreen ? "w-full" : "w-3/4"
        } p-6 bg-white text-gray-800`}
      >
        {selectedTopic ? (
          <div>
            <h3 className="text-2xl font-bold mb-2">{selectedTopic.q}</h3>
            <p className="text-gray-600 mb-4 capitalize">
              {selectedSubcategory} • {category.name}
            </p>
            <div className="mt-4 p-4 bg-gray-50 rounded-lg">
              <h4 className="font-semibold mb-2">Answer:</h4>
              <p className="whitespace-pre-line">{selectedTopic.a}</p>
            </div>
          </div>
        ) : (
          <div className="text-gray-500">
            Select a question to view its answer
          </div>
        )}
      </div> */}

      <div
        className={`${
          isSmallScreen ? "w-full" : "w-3/4"
        } p-6 bg-white text-gray-800`}
      >
        {selectedQA ? (
          <div className="space-y-6">
            <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
              <h3 className="text-2xl font-bold text-gray-800">
                {selectedQA.q}
              </h3>
              <p className="text-blue-600 capitalize">• {category?.name}</p>
            </div>

            <div className="prose max-w-none">
              <AnswerContent contentBlocks={selectedQA?.a} />

              {/* Additional resources section */}
              <div className="mt-8 pt-6 border-t border-gray-200">
                <h4 className="font-semibold text-lg text-gray-800 mb-3">
                  Additional Resources
                </h4>
                <ul className="space-y-2 text-blue-600">
                  <li>
                    <a href="#" className="hover:underline">
                      Official Documentation
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">
                      Related Articles
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">
                      Video Tutorials
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex items-center justify-center h-64 text-gray-500">
            <div className="text-center">
              <svg
                className="mx-auto h-12 w-12 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1}
                  d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                />
              </svg>
              <h3 className="mt-2 text-lg font-medium">Select a question</h3>
              <p className="mt-1">
                Choose a question from the sidebar to view its content
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CategoryPage;
