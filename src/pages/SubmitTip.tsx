import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

interface DisclaimerData {
  title: string;
  contents: { text: string }[];
}

const disclaimerData: DisclaimerData[] = [
  {
    title: "Disclaimer",
    contents: [
      {
        text: "MANAS – National Narcotics Helpline portal is a project of the Narcotics Control Bureau, Ministry of Home Affairs, Government of India to facilitate victims / citizens to report drug-related issues / complaints by 24*7. This portal caters to complaints pertaining to drug-related matters only. Drug-related matters including drug trafficking, illegal sale / purchase / storage / manufacturing and illicit cultivation of narcotic drugs or psychotropic substances. The information provided will be reviewed promptly by NCB officers. The identity of the informer / citizen will be kept secret.",
      },
      {
        text: "NOTE: If you witness an event that may lead to an immediate threat to human health or safety, you should report it to your local police, dial 112 or share it with the concerned law enforcement authority.",
      },
    ],
  },
  {
    title: "Terms & Conditions",
    contents: [
      {
        text: "As per provisions of Section 68 of the NDPS Act, 1985 identity of the informers is intact and no one can compel a Drug Law officer to disclose the identity under any circumstances. NCB is committed to protecting the identity of the informers/callers. Narcotics Control Bureau won’t be liable to provide any kind of status / monitor or tracking details on the complaints submitted by the user on the MANAS-National Narcotics Helpline portal. NCB shall verify the details provided and initiate the action as deemed fit under the established procedures of Indian law and as per the NDPS Act, 1985.",
      },
      {
        text: "Police, upon receiving confidential information, are not required to reveal the source of the intelligence. To carry out any raid, recording information in the General Diary is crucial. However, those who provide the police with secretive information are protected from disclosure under Section 125 of the Indian Evidence Act, 1872. This means that if someone were to ask a police officer directly how he obtained this information, the officer could not be forced to answer.",
      },
      {
        text: "Punishment for false Information: Section 58(2) of NDPS Act, 1985 makes giving false information wilfully and maliciously which leads to a search or an arrest, a punishable offence inviting a prison term of two years or fine or both.",
      },
    ],
  },
];

export const SubmitTip = () => {
  const [currentId, setCurrentId] = useState(0);
  const [hasAcceptedDisclaimer, setHasAcceptedDisclaimer] = useState(false);
  const [hasAcceptedTerms, setHasAcceptedTerms] = useState(false);

  const navigate = useNavigate();

  return (
    <div>
      <p className="text-center mt-10 text-red-600 font-semibold">
        The identity & all the information provided by citizens will remain
        confidential.
      </p>

      <div className="max-w-4xl mx-auto mt-8 p-6">
        <p className="text-left mb-2">
          Please read the disclaimer before proceeding.
        </p>
        <Card>
          <CardHeader className="bg-gray-100">
            <h2 className="text-lg font-semibold">
              {disclaimerData[currentId].title}
            </h2>
          </CardHeader>
          <CardContent className="py-4 space-y-4">
            {disclaimerData[currentId].contents.map((content, index) => (
              <p key={index} className="text-sm text-gray-700">
                {content.text}
              </p>
            ))}
          </CardContent>
          <CardFooter className="flex flex-col items-center">
            <div className="flex gap-2 items-center justify-center">
              {currentId === 0 ? (
                <Checkbox
                  id="acceptDisclaimer"
                  checked={hasAcceptedDisclaimer}
                  onClick={() =>
                    setHasAcceptedDisclaimer(!hasAcceptedDisclaimer)
                  }
                />
              ) : (
                <Checkbox
                  id="acceptTerms"
                  checked={hasAcceptedTerms}
                  onClick={() => setHasAcceptedTerms(!hasAcceptedTerms)}
                />
              )}
              <Label
                htmlFor={currentId === 0 ? "acceptDisclaimer" : "acceptTerms"}
              >
                <span className="text-sm">
                  I have read and understood the{" "}
                  {currentId === 0 ? "Disclaimer" : "Terms & Conditions"}.
                </span>
              </Label>
            </div>
            <div>
              <Button
                className="mt-4"
                disabled={
                  (currentId === 0 && !hasAcceptedDisclaimer) ||
                  (currentId === 1 && !hasAcceptedTerms)
                }
                onClick={() => {
                  if (currentId < disclaimerData.length - 1) {
                    setCurrentId(currentId + 1);
                  } else {
                    navigate("/select-category");
                  }
                }}
              >
                {currentId < disclaimerData.length - 1 ? "Next" : "Submit"}
              </Button>
            </div>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};
