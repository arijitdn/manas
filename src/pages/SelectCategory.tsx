import { Card, CardContent } from "@/components/ui/card";

interface Category {
  title: string;
  imageUrl: string;
  description: string;
}

const categories: Category[] = [
  {
    title: "Drug Trafficking / Peddling",
    imageUrl: "/safety1.svg",
    description:
      "Complaints / Inputs directly related to drug trafficking / illegal sale / purchase / storage / manufacturing / smuggling / smugglers",
  },
  {
    title: "Counselling / Rehabilitation",
    imageUrl: "/safety2.svg",
    description:
      "For any information regarding Counselling & Rehabilitation centers.",
  },
  {
    title: "Illicit Cultivation",
    imageUrl: "/safety3.svg",
    description:
      "Complaints / Inputs directly related to the illicit cultivation of Cannabis / Poppy Plant / Coca Plant only",
  },
  {
    title: "Miscellaneous / Others",
    imageUrl: "/safety4.svg",
    description:
      "Complaints / Inputs related to smuggling of various articles which are not covered under the NDPS Act i.e Alcohol, tobacco, Bhang, fluid / thinner and others.",
  },
];

export const SelectCategory = () => {
  return (
    <div>
      <div className="w-full bg-primary text-white py-4 text-center text-xl">
        समग्र भारत में ड्रग्स के विरुद्ध , आओ मिलकर लड़ें निर्णायक युद्ध
      </div>
      <p className="text-center mt-10 text-red-600 font-semibold">
        The identity & all the information provided by citizens will remain
        confidential.
      </p>

      <div className="max-w-5xl mx-auto mt-8 p-6">
        <h2 className="text-lg font-semibold mb-4">Select a Category</h2>
        <p className="text-sm text-gray-700 mb-6">
          Please select the category that best describes your tip.
        </p>
        <div className="grid grid-cols-2 place-items-center gap-4">
          {categories.map((category, index) => (
            <Card
              key={index}
              className="w-[400px] h-[320px] cursor-pointer hover:shadow-lg transition-shadow duration-200 flex flex-col justify-between"
            >
              <CardContent className="relative flex flex-col items-center h-full">
                <div className="border-2 border-black/50 w-4 h-4 rounded-full absolute top-4 right-4 bg-transparent" />
                <img
                  src={category.imageUrl}
                  alt={category.title}
                  className="w-28 mt-8"
                />
                <h1 className="font-semibold mt-4">{category.title}</h1>
                <p className="text-sm text-gray-600 mt-4 text-center">
                  {category.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};
