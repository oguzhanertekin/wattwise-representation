import summary from "../assets/summary.png";

export const Summary = () => {
  return (
    <section id="summary" className="container py-24 sm:py-32">
      <div className="bg-muted/50 border rounded-lg py-12">
        <div className="px-20 flex flex-col-reverse md:flex-row gap-8 md:gap-12">
          <img
            src={summary}
            alt=""
            className="w-[400px] object-contain rounded-lg"
          />
          <div className="bg-green-0 flex flex-col justify-between">
            <div className="pb-6">
              <h2 className="text-3xl md:text-4xl font-bold">
                <span className="bg-[#C0F603] from-primary/60 to-primary text-transparent bg-clip-text">
                  Project{" "}
                </span>
                Summary
              </h2>
              <p className="text-xl text-muted-foreground mt-4">
                This project aims to monitor power current load in basic
                electrical systems. This goal arises from the desire to
                contribute to the field of energy efficiency, sustainable living
                and the Internet of Things (IoT). By understanding power
                consumption at a more detailed level, consumers can make more
                informed decisions about energy use. This is considered an
                important step for sustainability both individually and
                collectively. The project allows department members to reduce
                unnecessary energy waste by monitoring their power consumption
                habits. This both saves on energy bills and contributes to the
                preservation of natural resources. Additionally, by increasing
                interest in IoT technologies, it can be an impetus for further
                innovation and development in this field.
              </p>
            </div>

            {/* <Statistics /> */}
          </div>
        </div>
      </div>
    </section>
  );
};
