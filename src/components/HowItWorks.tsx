import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { HomeIcon, EduIcon, OfficeIcon, UniIcon } from "../components/Icons";

interface FeatureProps {
  icon: JSX.Element;
  title: string;
  description: string;
}

const features: FeatureProps[] = [
  {
    icon: <HomeIcon />,
    title: "Homeowners",
    description:
      "Homeowners can save energy by monitoring the power consumption in their home. Our project helps users reduce unnecessary energy consumption by determining which devices use how much energy.",
  },
  {
    icon: <EduIcon />,
    title: "Energy Awareness & Education",
    description:
      "WattWise plays an important role in energy awareness and education. Thanks to the real-time and historical data provided by the project, users can develop more sustainable energy habits in their daily lives.",
  },
  {
    icon: <OfficeIcon />,
    title: "Offices & Workplaces",
    description:
      "This type of system can be used not only in homes but also in workplaces. By monitoring electricity consumption in offices, business owners and employees become aware of energy efficiency and reduce costs.",
  },
  {
    icon: <UniIcon />,
    title: "Educational Institutions",
    description:
      "Schools and universities can use WattWise as a tool to educate students on energy monitoring and efficiency. This can contribute to the training of future energy experts.",
  },
];

export const HowItWorks = () => {
  return (
    <section id="howitworks" className="container text-center py-24 sm:py-32">
      <h2 className="text-3xl md:text-4xl font-bold ">
        <span className="bg-[#C0F603] from-primary/60 to-primary text-transparent bg-clip-text">
          How{" "}
        </span>
        It Works &{" "}
        <span className="bg-[#72D2B3] from-primary/60 to-primary text-transparent bg-clip-text">
          Why{" "}
        </span>
        is it important?
      </h2>

      <p className="md:w-3/4 mx-auto mt-4 mb-8 text-xl text-muted-foreground">
        The project involves the use of hardware components such as a Raspberry
        Pi server and Arduino/ESP. These systems will capture power current
        loads in basic electrical systems, process them and transmit data. The
        collected data is processed by a server hosted on the Raspberry Pi and
        presented to users through the web platform.
      </p>

      <p className="md:w-3/4 mx-auto mt-4 mb-8 text-xl text-muted-foreground">
        By addressing the lack of real-time, detailed monitoring and
        understanding of power consumption, our project can enable department
        members to optimize energy use, leading to cost savings and more
        sustainable energy practices. Integrating real-time monitoring in
        electrical systems poses a significant challenge due to the technical
        complexity and precision required for such installations.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map(({ icon, title, description }: FeatureProps) => (
          <Card key={title} className="bg-muted/50">
            <CardHeader>
              <CardTitle className="grid gap-4 place-items-center">
                {icon}
                {title}
              </CardTitle>
            </CardHeader>
            <CardContent>{description}</CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
