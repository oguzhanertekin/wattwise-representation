import { Badge } from "./ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import image from "../assets/building.png";
import image3 from "../assets/device.png";
import image4 from "../assets/user.png";
import image2 from "../assets/stats.png";

interface FeatureProps {
  title: string;
  description: string;
  image: string;
}

const features: FeatureProps[] = [
  {
    title: "Department Management",
    description:
      "The buildings in the region you belong to, the floors of the buildings and the rooms on those floors can be easily created and edited thanks to this platform.",
    image: image,
  },
  {
    title: "Device Management",
    description:
      "Devices connected to the power lines of the building you belong to and the sensors of these devices can be listed and arranged. Additionally, alarms can be assigned to these devices, so that alarms are triggered and notifications are received when the electrical current is incorrect.",
    image: image3,
  },
  {
    title: "User Management",
    description:
      "Department managers can be assigned for certain buildings and users can be assigned for rooms in the building. With admin authority, you can take part in all management departments.",
    image: image4,
  },
  {
    title: "Statistics",
    description:
      "Electrical current data from sensors connected to devices can be displayed in graphic form. If there is a triggered alarm among the data within a certain date range or recently, it can be seen instantly on the chart. These graphics and data can be exported.",
    image: image2,
  },
];

const featureList: string[] = [
  "Dark/Light theme",
  "Minimalist",
  "Reviews",
  "Statistics",
  "Export Data",
  "Notifications",
  "Department Management",
  "Device Management",
  "User Management",
];

export const Features = () => {
  return (
    <section id="features" className="container py-24 sm:py-32 space-y-8">
      <h2 className="text-3xl lg:text-4xl font-bold md:text-center">
        Many{" "}
        <span className="bg-[#C0F603] from-primary/60 to-primary text-transparent bg-clip-text">
          Great Features
        </span>
      </h2>

      <div className="flex flex-wrap md:justify-center gap-4">
        {featureList.map((feature: string) => (
          <div key={feature}>
            <Badge variant="secondary" className="text-sm">
              {feature}
            </Badge>
          </div>
        ))}
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map(({ title, description, image }: FeatureProps) => (
          <Card key={title}>
            <CardHeader>
              <CardTitle>{title}</CardTitle>
            </CardHeader>

            <CardContent>{description}</CardContent>

            <CardFooter>
              <img
                src={image}
                alt="About feature"
                className="w-[200px] lg:w-[300px] mx-auto"
              />
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
};
