import { type Metadata } from "next";
import Image from "next/image";
import clsx from "clsx";

import Link from "src/components/Link";
import Command from "src/components/Command";
import { Button } from "src/shared/Button";
import TabContainer from "./TabContainer";
import Container from "./Container";
import Heading from "./Heading";
import USPs from "./USPs";
import PlatformsLanguages from "./PlatformsLanguages";
import FlowControl from "./FlowControl";
import Enterprise from "./Enterprise";

export const metadata: Metadata = {
  title: "Inngest - The modern platform for shipping fast, reliable code", // TODO - TBD
  description:
    "Inngest enables your team to develop durable functions in your current codebase with zero new infrastructure. Develop complex, long-running functions without queues, workers, or additional state management.",
};

export default function Page() {
  return (
    <div className="font-circular no-antialiasing">
      {/* Hero */}
      <div
        // negative margin to match layout.tsx's horizontal margin - px-6 md:px-10 lg:px-20
        // TODO - fix for wide screens
        // w-[calc(100%+48px)] md:w-[calc(100%+80px)] lg:w-[calc(100%+160px)] -mx-6 md:-mx-10 lg:-mx-20
        className={`

        -mt-[84px] pt-[84px]
        bg-[url(/assets/textures/blob-background-1-light.png)] dark:bg-[url(/assets/textures/blob-background-1.png)]
        bg-cover bg-no-repeat bg-top
        text-basis text-center
      `}
      >
        <Container>
          <header className="pt-32 pb-28 px-8">
            <h1 className="font-bold text-4xl md:text-6xl leading-tight drop-shadow-lg">
              The platform for shipping <br className="hidden lg:inline" />
              reliable code, fast
            </h1>
            <p className="max-w-5xl mt-10 mx-auto text-lg md:text-xl leading-normal drop-shadow-lg">
              <strong>
                Develop and ship durable functions in minutes, without managing
                infrastructure, queues, or state.
              </strong>
              <br className="" />
              Inngest's SDKs let you easily write transactional code that
              automatically retries for reliability —{" "}
              <br className="hidden lg:inline" />
              on serverless, servers, or the edge.
            </p>
            <div className="mt-8 flex flex-col items-center gap-4">
              <Button
                variant="dark"
                size="md"
                className="shadow-lg px-8 py-3"
                href={`${process.env.NEXT_PUBLIC_SIGNUP_URL}?ref=homepage-hero`}
              >
                Start building for free
              </Button>
              <Link
                href="/docs?ref=homepage-hero"
                className="p-2 font-semibold transition-all drop-shadow-lg"
                color="text-basis/90 hover:text-basis"
              >
                Read the docs
              </Link>
            </div>
          </header>
          <div className="flex flex-col gap-6 items-center pb-8">
            <span className="p-[1px] bg-carbon-1000 dark:bg-carbon-0 w-96"></span>
            <p className="text-sm">
              Trusted by modern software companies at scale worldwide:
            </p>
            <div className="flex flex-wrap lg:flex-nowrap gap-x-8 gap-y-8">
              {[
                {
                  src: "/assets/customers/soundcloud-logo-white-horizontal.svg",
                  name: "SoundCloud",
                  scale: 1.5,
                },
                {
                  src: "/assets/customers/tripadvisor.svg",
                  name: "TripAdvisor",
                  scale: 1.4,
                },
                {
                  src: "/assets/customers/gitbook-logo-white.svg",
                  name: "Gitbook",
                  scale: 1.3,
                },
                {
                  src: "/assets/customers/resend.svg",
                  name: "Resend",
                  scale: 0.9,
                },
                {
                  src: "/assets/customers/leap-logo-white.svg",
                  name: "Leap",
                  scale: 0.8,
                },
                {
                  src: "/assets/customers/snaplet-dark.svg",
                  name: "Snaplet",
                  sacle: 0.9,
                },
                {
                  src: "/assets/customers/zamp-logo.svg",
                  name: "Zamp",
                  scale: 0.7,
                },
              ].map(({ src, name, scale = 1 }, idx) => (
                <Image
                  key={idx}
                  src={src}
                  alt={name}
                  title={name}
                  width={120 * 0.9 * scale}
                  height={30 * 0.9 * scale}
                  className={clsx(
                    "m-auto width-auto transition-all grayscale opacity-70 invert dark:invert-0",
                    `max-h-[${36 * scale}px] col-span-2`,
                    idx > 4 && "hidden xl:block"
                  )}
                />
              ))}
            </div>
          </div>
        </Container>
      </div>

      <div className="my-32">
        <USPs />
      </div>

      <div className="my-32 lg:mt-64">
        <Heading label="APIs for all challenges" className="my-8" />
        <TabContainer />
      </div>

      <div className="my-32">
        <PlatformsLanguages />
      </div>

      <div className="my-32 lg:my-64">
        <FlowControl />
      </div>

      <div className="my-32 lg:my-64">
        <Enterprise />
      </div>
    </div>
  );
}
