import { Button } from "./ui/button";
import { buttonVariants } from "./ui/button";

export const Hero = () => {
  return (
    <section className="container grid lg:grid-cols-2 place-items-center py-20 md:py-32 gap-10">
      <div className="text-center lg:text-start space-y-6">
        <main className="text-5xl md:text-6xl font-bold">
          <h1 className="inline">
            <span className="inline bg-gradient-to-r from-[#E7FF00]  to-[#72D2B3] text-transparent bg-clip-text">
              WattWise
            </span>{" "}
            monitors power current in basic
          </h1>{" "}
          <h2 className="inline">
            <span className="inline bg-gradient-to-r from-[#72D2B3] via-[#C89CFF] to-[#F2FF94] text-transparent bg-clip-text">
              electrical systems.
            </span>{" "}
          </h2>
        </main>

        <p className="text-l text-muted-foreground md:w-10/12 mx-auto lg:mx-0">
          The aim of this project is to develop a monitoring system that can
          monitor the power current load on multiple outlets. The system is
          designed to operate independently using hosts such as Arduino or
          Raspberry Pi and current sensors to read the power consumption probe.
          The data collected from the sensors is then presented to users via a
          web page.
        </p>

        <div className="space-y-4 md:space-y-0 md:space-x-4">
          <Button className="w-full md:w-1/3 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500">
            <a href="mailto:calganaygun@gmail.com">Contact Us</a>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              viewBox="0 0 512 512"
              className="ml-2"
            >
              <rect
                width="416"
                height="320"
                x="48"
                y="96"
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="24.15"
                rx="40"
                ry="40"
              />
              <path
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="24.15"
                d="m112 160l144 112l144-112"
              />
            </svg>
          </Button>

          <a
            rel="noreferrer noopener"
            href="https://hu-wattwise.vercel.app/"
            target="_blank"
            className={`w-full md:w-1/3 ${buttonVariants({
              variant: "outline",
            })}`}
          >
            WattWise Project
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              className="ml-2"
            >
              <path
                fill="#87d936"
                d="M7.673 21.02L11.712 14L4 13.096L15.25 2.981h1.116l-4.135 7.038l7.769.885L8.75 21.019z"
              />
            </svg>
          </a>
        </div>
      </div>

      <div className="z-10 ">
        <div className="hidden lg:flex flex-row flex-wrap gap-8 relative w-[700px] h-[500px]  flex justify-center items-center">
          <div className="absolute w-[540px] -top-[15px] drop-shadow-xl shadow-black/10 dark:shadow-white/10 flex justify-center items-center">
            <img src="/ww-small.png" alt="Logo" className="h-50" />
          </div>
        </div>
      </div>

      {/* Shadow effect */}
      <div className="shadow"></div>
    </section>
  );
};
