import { Card, CardContent } from "@/components/ui/card";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

interface Category {
  title: string;
  imageUrl: string;
  description: string;
}

const categories: Category[] = [
  {
    title: "Drugs Related Tips",
    imageUrl: "/safety1.svg",
    description:
      "Report drug trafficking, peddling, illegal sale, purchase, storage, manufacturing, smuggling, or illicit cultivation of substances.",
  },
  {
    title: "Child Marriage Related Tips",
    imageUrl: "/safety2.svg",
    description:
      "Report cases of child marriage, planned ceremonies, or any activities that violate child protection laws.",
  },
  {
    title: "Miscellaneous",
    imageUrl: "/safety3.svg",
    description:
      "Other social issues, community concerns, or matters that require attention from authorities but don't fall into the above categories.",
  },
];

export const SelectCategory = () => {
  const [selectedCategory, setSelectedCategory] = useState<number | null>(null);
  const navigate = useNavigate();

  const handleCategorySelect = (index: number) => {
    setSelectedCategory(index);
  };

  return (
    <div>
      <p className="text-center mt-10 text-red-600 font-semibold">
        The identity & all the information provided by citizens will remain
        confidential.
      </p>

      <div className="max-w-5xl mx-auto mt-8 p-6">
        <h2 className="text-lg font-semibold mb-4">Select a Category</h2>
        <p className="text-sm text-gray-700 mb-6">
          Please select the category that best describes your tip.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {categories.map((category, index) => (
            <button
              key={index}
              onClick={() => handleCategorySelect(index)}
              className="w-full"
            >
              <Card
                className={`h-[320px] cursor-pointer transition-all duration-300 flex flex-col justify-between ${
                  selectedCategory === index
                    ? "border-2 border-primary bg-primary/5 shadow-lg transform scale-105"
                    : "border border-gray-200 hover:shadow-lg hover:border-primary/50"
                }`}
              >
                <CardContent className="relative flex flex-col items-center h-full p-6">
                  {/* Selection indicator */}
                  <div
                    className={`w-5 h-5 rounded-full absolute top-4 right-4 border-2 transition-all duration-200 ${
                      selectedCategory === index
                        ? "border-primary bg-primary"
                        : "border-gray-400 bg-transparent"
                    }`}
                  >
                    {selectedCategory === index && (
                      <div className="w-full h-full rounded-full bg-white scale-50 transform"></div>
                    )}
                  </div>

                  <img
                    src={category.imageUrl}
                    alt={category.title}
                    className="w-24 h-24 mt-6 object-contain"
                  />

                  <h1
                    className={`font-semibold mt-6 text-lg text-center ${
                      selectedCategory === index
                        ? "text-primary"
                        : "text-gray-800"
                    }`}
                  >
                    {category.title}
                  </h1>

                  <p
                    className={`text-sm mt-4 text-center leading-relaxed ${
                      selectedCategory === index
                        ? "text-gray-700"
                        : "text-gray-600"
                    }`}
                  >
                    {category.description}
                  </p>
                </CardContent>
              </Card>
            </button>
          ))}
        </div>

        {/* Continue Button */}
        {selectedCategory !== null && (
          <div className="mt-8 text-center">
            <button
              className="bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors duration-200"
              onClick={() => {
                navigate(`/create-ticket/${selectedCategory + 1}`);
              }}
            >
              Continue with {categories[selectedCategory].title}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
