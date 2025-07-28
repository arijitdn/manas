import { useParams } from "react-router-dom";
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  CalendarIcon,
  MapPin,
  Shield,
  AlertTriangle,
  FileText,
} from "lucide-react";
import { format } from "date-fns";

interface FormData {
  name: string;
  mobile: string;
  complaintType: string;
  description: string;
  place: string;
  postOffice: string;
  policeStation: string;
  pinCode: string;
  latitude: string;
  longitude: string;
  date: Date | undefined;
}

const categories = [
  { id: "0", name: "Drug Related", type: "Drugs" },
  { id: "1", name: "Child Marriage Related", type: "Child Marriage" },
  { id: "2", name: "Miscellaneous", type: "Other" },
];

export const CreateTicket = () => {
  const { categoryId } = useParams<{ categoryId: string }>();
  const [formData, setFormData] = useState<FormData>({
    name: "",
    mobile: "",
    complaintType: "",
    description: "",
    place: "",
    postOffice: "",
    policeStation: "",
    pinCode: "",
    latitude: "",
    longitude: "",
    date: undefined,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const selectedCategory = categories.find((cat) => cat.id === categoryId);

  const handleInputChange = (field: keyof FormData, value: string | Date) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const getCurrentLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setFormData((prev) => ({
            ...prev,
            latitude: position.coords.latitude.toString(),
            longitude: position.coords.longitude.toString(),
          }));
        },
        (error) => {
          console.error("Error getting location:", error);
          alert(
            "Unable to get current location. Please enter coordinates manually.",
          );
        },
      );
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Here you would typically make an API call to submit the form
      console.log("Form submitted:", formData);

      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000));

      alert(
        "Your tip has been submitted successfully. Thank you for helping make our community safer!",
      );

      // Reset form
      setFormData({
        name: "",
        mobile: "",
        complaintType: "",
        description: "",
        place: "",
        postOffice: "",
        policeStation: "",
        pinCode: "",
        latitude: "",
        longitude: "",
        date: undefined,
      });
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("There was an error submitting your tip. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">
            Submit a Tip
          </h1>
          <p className="text-red-600 font-semibold mb-2">
            🔒 Your identity and all information provided will remain completely
            confidential
          </p>
          {selectedCategory && (
            <div className="inline-flex items-center space-x-2 bg-primary/10 px-4 py-2 rounded-lg">
              {selectedCategory.type === "Drugs" && (
                <AlertTriangle className="h-5 w-5 text-primary" />
              )}
              {selectedCategory.type === "Child Marriage" && (
                <Shield className="h-5 w-5 text-destructive" />
              )}
              {selectedCategory.type === "Other" && (
                <FileText className="h-5 w-5 text-gov-green" />
              )}
              <span className="font-medium text-gray-700">
                Category: {selectedCategory.name}
              </span>
            </div>
          )}
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <FileText className="h-6 w-6 text-primary" />
              <span>Tip Submission Form</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Personal Information (Optional) */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Name (Optional)</Label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={(e) => handleInputChange("name", e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="mobile">Mobile Number (Optional)</Label>
                  <Input
                    id="mobile"
                    type="tel"
                    placeholder="Enter your mobile number"
                    value={formData.mobile}
                    onChange={(e) =>
                      handleInputChange("mobile", e.target.value)
                    }
                  />
                </div>
              </div>

              {/* Complaint Details */}
              <div className="space-y-2">
                <Label htmlFor="complaintType">Complaint Type *</Label>
                <Select
                  value={formData.complaintType}
                  onValueChange={(value) =>
                    handleInputChange("complaintType", value)
                  }
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select complaint type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="drugs">Drugs</SelectItem>
                    <SelectItem value="child-marriage">
                      Child Marriage
                    </SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">Description *</Label>
                <Textarea
                  id="description"
                  placeholder="Provide detailed description (e.g., drug consumption/selling activities, child's age in case of child marriage, etc.)"
                  value={formData.description}
                  onChange={(e) =>
                    handleInputChange("description", e.target.value)
                  }
                  rows={4}
                  required
                />
              </div>

              {/* Location Information */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-800">
                  Location Information
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="place">Place *</Label>
                    <Input
                      id="place"
                      type="text"
                      placeholder="Enter location/place"
                      value={formData.place}
                      onChange={(e) =>
                        handleInputChange("place", e.target.value)
                      }
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="postOffice">Post Office *</Label>
                    <Input
                      id="postOffice"
                      type="text"
                      placeholder="Enter post office"
                      value={formData.postOffice}
                      onChange={(e) =>
                        handleInputChange("postOffice", e.target.value)
                      }
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="policeStation">Police Station *</Label>
                    <Input
                      id="policeStation"
                      type="text"
                      placeholder="Enter nearest police station"
                      value={formData.policeStation}
                      onChange={(e) =>
                        handleInputChange("policeStation", e.target.value)
                      }
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="pinCode">PIN Code *</Label>
                    <Input
                      id="pinCode"
                      type="text"
                      placeholder="Enter PIN code"
                      value={formData.pinCode}
                      onChange={(e) =>
                        handleInputChange("pinCode", e.target.value)
                      }
                      required
                    />
                  </div>
                </div>

                {/* Coordinates */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <Label>Location Coordinates (Optional)</Label>
                    <Button
                      type="button"
                      variant="outline"
                      size="sm"
                      onClick={getCurrentLocation}
                      className="flex items-center space-x-2"
                    >
                      <MapPin className="h-4 w-4" />
                      <span>Get Current Location</span>
                    </Button>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="latitude">Latitude</Label>
                      <Input
                        id="latitude"
                        type="text"
                        placeholder="e.g., 28.6139"
                        value={formData.latitude}
                        onChange={(e) =>
                          handleInputChange("latitude", e.target.value)
                        }
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="longitude">Longitude</Label>
                      <Input
                        id="longitude"
                        type="text"
                        placeholder="e.g., 77.2090"
                        value={formData.longitude}
                        onChange={(e) =>
                          handleInputChange("longitude", e.target.value)
                        }
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Date */}
              <div className="space-y-2">
                <Label>Date of Incident *</Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className="w-full justify-start text-left font-normal"
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {formData.date
                        ? format(formData.date, "PPP")
                        : "Select date"}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0">
                    <Calendar
                      mode="single"
                      selected={formData.date}
                      onSelect={(date) => handleInputChange("date", date)}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
              </div>

              {/* Submit Button */}
              <div className="pt-6">
                <Button
                  type="submit"
                  className="w-full py-3 text-lg font-semibold"
                  disabled={
                    isSubmitting ||
                    !formData.description ||
                    !formData.place ||
                    !formData.complaintType
                  }
                >
                  {isSubmitting ? "Submitting..." : "Submit Tip Confidentially"}
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>

        {/* Footer Note */}
        <div className="mt-8 p-4 bg-blue-50 border border-blue-200 rounded-lg">
          <p className="text-sm text-blue-800 text-center">
            <strong>Note:</strong> Upon submission, your tip will be securely
            stored and an alert will be sent to the District Magistrate (DM) and
            Superintendent of Police (SP) via WhatsApp for immediate action.
          </p>
        </div>
      </div>
    </div>
  );
};
