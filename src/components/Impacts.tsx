import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { SustainIcon, ResearchIcon, SocketIcon, EconomicIcon } from "./Icons";
import power from "../assets/power.png";

interface ImpactProps {
  title: string;
  description: string;
  icon: JSX.Element;
}

const impactList: ImpactProps[] = [
  {
    title: "Real World Usage",
    description:
      "Real-world use of our project creates a significant impact by providing homeowners with instant feedback on their power usage. Users can instantly monitor their electricity consumption through the system and review their energy consumption habits in line with this information. This feedback enables users to make more informed decisions, allowing them to adopt a more sustainable approach to electricity use. Additionally, anomalies or overconsumption situations detected through the system provide an opportunity to alert users and intervene when necessary.",
    icon: <SocketIcon />,
  },
  {
    title: "Education and Research",
    description:
      "The impact of our project in the field of education and research is significant. Students can use our project as a resource when they want to gain in-depth knowledge in areas such as IoT applications and energy monitoring systems. This can contribute to the training of future engineers and researchers. Additionally, our project contributes to a broader level of education and awareness by appealing to large audiences to raise awareness about energy use and interest in sustainable practices.",
    icon: <ResearchIcon />,
  },
  {
    title: "Sustainability",
    description:
      "The impacts of our project in terms of sustainability are very important. By promoting responsible use of power, the system can indirectly contribute to larger global sustainability goals. Our project enables users to better understand their energy consumption, helping them reduce energy waste and reduce environmental impact. This can make a positive contribution to the conservation of natural resources and environmental sustainability in the long term.",
    icon: <SustainIcon />,
  },
  {
    title: "Economic Impact",
    description:
      "Large-scale implementation of our project could provide significant cost savings to users. By monitoring and analyzing their energy consumption, homeowners can reduce unnecessary energy consumption, which can lead to a significant decrease in electricity bills. In addition, faulty or overconsumption devices detected through the system prevent unnecessary expenses, allowing users to manage them more economically. This strengthens the economic situation of users in the long term and enables them to adopt a more sustainable lifestyle.",
    icon: <EconomicIcon />,
  },
];

export const Impacts = () => {
  return (
    <section className="container py-24 sm:py-10" id="impacts">
      <div className="grid lg:grid-cols-[1.5fr,1fr] gap-8 place-items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            <span className="bg-[#C0F603] from-primary/60 to-primary text-transparent bg-clip-text">
              Impacts
            </span>{" "}
            of WattWise
          </h2>

          <div className="flex flex-col gap-8">
            {impactList.map(({ icon, title, description }: ImpactProps) => (
              <Card key={title}>
                <CardHeader className="space-y-1 flex md:flex-row justify-start items-start gap-4">
                  <div className="mt-1 bg-primary/20 p-1 rounded-2xl">
                    {icon}
                  </div>
                  <div>
                    <CardTitle>{title}</CardTitle>
                    <CardDescription className="text-md mt-2">
                      {description}
                    </CardDescription>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>

        <div className="w-[450px] h-[100%]">
          <img
            src={power}
            className="w-[200px] md:w-[900px] lg:w-[600px] object-contain"
            alt="About services"
          />
        </div>
      </div>
      <div className="shadow"></div>
    </section>
  );
};
