import { useMediaQuery } from "@mui/material";
import { Link } from "react-router-dom";
const interviewCategories = [
  {
    id: "react",
    name: "React Fundamentals",
    icon: "⚛️",
    subcategories: ["Hooks", "Components", "State Management", "Performance"],
  },
  {
    id: "javascript",
    name: "JavaScript",
    icon: "📜",
    subcategories: ["ES6+", "Async", "DOM", "OOP"],
  },
  {
    id: "css",
    name: "CSS & HTML",
    icon: "🎨",
    subcategories: ["Layouts", "Responsive", "Animations"],
  },
  {
    id: "system-design",
    name: "System Design",
    icon: "🏗️",
    subcategories: ["Frontend Architecture", "APIs", "Performance"],
  },
  {
    id: "behavioral",
    name: "Behavioral",
    icon: "💬",
    subcategories: ["STAR Method", "Teamwork", "Leadership"],
  },
];

const InterviewPreparation = () => {
  const isSmallScreen = useMediaQuery("(max-width:587px)");
  const isLargeScreen = useMediaQuery("(min-width:1248px)");

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-center mb-8">
        Interview Preparation
      </h1>
      <div
        className={`flex ${
          isSmallScreen ? "flex-col" : isLargeScreen ? "flex-row" : "flex-wrap"
        } justify-center gap-8`}
      >
        {interviewCategories.map((category) => (
          <Link
            to={`/interview-preparation/${category.id}`}
            key={category.id}
            className="bg-white shadow-md rounded-lg p-6 w-80 hover:shadow-lg transition-shadow"
          >
            <div className="flex items-center gap-4 mb-4">
              <span className="text-3xl">{category.icon}</span>
              <h2 className="text-xl font-semibold text-blue-500">
                {category.name}
              </h2>
            </div>
            <ul className="list-disc list-inside text-gray-700">
              {category.subcategories.map((subcategory, index) => (
                <li key={index}>{subcategory}</li>
              ))}
            </ul>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default InterviewPreparation;
