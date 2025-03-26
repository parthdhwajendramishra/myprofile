import { useParams } from "react-router-dom";
import { useState } from "react";
import { useMediaQuery } from "@mui/material";
import { reactQuestions } from "./data/reactjs";

interface Subcategories {
  [key: string]: string[];
}

interface Category {
  id: string;
  name: string;
  icon: string;
  subcategories: Subcategories;
}

const interviewCategories: Category[] = [
  {
    id: "react",
    name: "React Fundamentals",
    icon: "⚛️",
    subcategories: reactQuestions,
  },
  {
    id: "javascript",
    name: "JavaScript",
    icon: "📜",
    subcategories: {
      basics: ["ES6+", "Async", "DOM", "OOP"],
      advanced: ["Closures", "Prototypes", "Event Loop", "Memory Management"],
      patterns: ["Module Pattern", "Singleton", "Factory", "Observer"],
    },
  },
  {
    id: "css",
    name: "CSS & HTML",
    icon: "🎨",
    subcategories: {
      fundamentals: ["Selectors", "Box Model", "Flexbox", "Grid"],
      advanced: ["Animations", "Transforms", "Custom Properties"],
      architecture: ["BEM", "CSS Modules", "Styled Components"],
    },
  },
  {
    id: "system-design",
    name: "System Design",
    icon: "🏗️",
    subcategories: {
      frontend: ["Component Architecture", "State Management", "API Design"],
      performance: ["Lazy Loading", "Caching", "Bundle Optimization"],
      security: ["Auth", "CORS", "XSS Prevention"],
    },
  },
  {
    id: "behavioral",
    name: "Behavioral",
    icon: "💬",
    subcategories: {
      methods: ["STAR Method", "SOAR Method", "CAR Method"],
      scenarios: ["Teamwork", "Conflict", "Leadership", "Failure"],
    },
  },
];

const CategoryPage = () => {
  const { categoryId } = useParams<{ categoryId: string }>();
  const category = interviewCategories.find((cat) => cat.id === categoryId);
  const [selectedSubcategory, setSelectedSubcategory] = useState<string>("");
  const [selectedTopic, setSelectedTopic] = useState<string>("");
  const [expandedGroups, setExpandedGroups] = useState<Record<string, boolean>>(
    {}
  );

  // Media query for responsiveness
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
      {/* Left Sidebar - Subcategory Groups */}
      <div
        className={`${
          isSmallScreen ? "w-full" : "w-1/4"
        } bg-blue-100 p-4 border-r border-gray-300 overflow-y-auto`}
        style={{ maxHeight: "calc(100vh - 64px)" }}
      >
        <h2 className="text-xl font-bold mb-4 text-gray-800">
          {category.name}
        </h2>

        {/* Render collapsible subcategory groups */}
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

            {/* Topics list - conditionally rendered */}
            {expandedGroups[group] && (
              <ul className="space-y-1 pl-4 mt-1">
                {topics.map((topic, index) => (
                  <li
                    key={`${group}-${index}`}
                    className={`cursor-pointer p-2 rounded ${
                      selectedTopic === topic
                        ? "bg-blue-500 text-white"
                        : "hover:bg-blue-200 text-gray-800"
                    }`}
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedSubcategory(group);
                      setSelectedTopic(topic);
                    }}
                  >
                    {topic}
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>

      {/* Right Content Area */}
      <div
        className={`${
          isSmallScreen ? "w-full" : "w-3/4"
        } p-6 bg-white text-gray-800`}
      >
        {selectedTopic ? (
          <div>
            <h3 className="text-2xl font-bold mb-2">{selectedTopic}</h3>
            <p className="text-gray-600 mb-4 capitalize">
              {selectedSubcategory} • {category.name}
            </p>
            <div className="mt-4">
              <p>
                Content for <strong>{selectedTopic}</strong> goes here.
              </p>
            </div>
          </div>
        ) : (
          <div className="text-gray-500">Select a topic to view details</div>
        )}
      </div>
    </div>
  );
};

export default CategoryPage;
