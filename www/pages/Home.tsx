/** @jsx h */
import { h, Head } from "../../utils/jsx/mod.ts";
import { Layout } from "../components/Layout.tsx";

// deno-lint-ignore no-explicit-any
const Tick = ({ children: text }: { children: any }) => (
  <p class="flex flex-col sm:flex-row items-center text-xl">
    <span class="p-1 mr-4 text-emerald-200 rounded-full bg-emerald-200/20">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
      </svg>
    </span>
    <span class="flex items-center">{text}</span>
  </p>
);

export function Home() {
  return (
    <Layout>
      <Head>
        <title>Deserve</title>
        <meta
          name="description"
          content="Deserve Is a simple, fast and light weight web framework for deno. It also supports Deno Deploy"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          rel="stylesheet"
          defer
          href="https://fonts.googleapis.com/css2?family=Rubik+Moonrocks&display=swap"
        />
        <style
          dangerouslySetInnerHTML={{
            __html: ".rubik { font-family: 'Rubik Moonrocks', cursive; }",
          }}
        />
      </Head>
      <div class="h-[400px] flex flex-col justify-center items-center text-center gap-3">
        <h1 class="text-5xl leading-[4rem]">
          The <span class="rubik text-6xl text-[#7aced7]">De</span>
          <span className="text-5xl">no</span>{" "}
          <span class="rubik text-6xl text-[#7aced7]">Serve</span>
          <span className="text-5xl">r</span> <br />
          Framework
        </h1>
        <p class="text-2xl">
          <span className="text-emerald-400">Simple</span>,{" "}
          <span className="text-amber-400">Fast</span>,{" "}
          <span class="text-sky-300">Light weight</span> and{" "}
          <span class="text-fuchsia-400">reliable</span>
        </p>
      </div>
      <div className="mt-3 flex flex-col gap-8 sm:flex-row sm:flex-wrap text-center sm:text-justify sm:justify-center">
        <Tick>Easy to use ✅</Tick>
        <Tick>TypeScript support out of the box 🚀</Tick>
        <Tick>Blazingly Fast 🔥</Tick>
        <Tick>Built on web standards ✨</Tick>
        <Tick>Super extensible 🛠️</Tick>
        <Tick>
          Deno Deploy Support
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class=" ml-2 w-7 h-7"
            viewBox="0 0 252 252"
            fill="none"
          >
            <circle cx="126" cy="126" r="126" fill="#000" />
            <mask
              id="a"
              width="252"
              height="252"
              x="0"
              y="0"
              maskUnits="userSpaceOnUse"
            >
              <circle
                cx="126"
                cy="126"
                r="119.5"
                fill="#fff"
                stroke="#FF7979"
                stroke-width="13"
              />
            </mask>
            <g mask="url(#a)">
              <path
                stroke="#fff"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="12"
                d="M168.871 54.22l-8.078 30.147M87.171-16.848l-8.077 30.146M109.38 15.297l-8.078 30.146M155.217-2.875L147.14 27.27M206.037 10.742l-8.077 30.146M26.29 78.364l-8.077 30.146M121.655 193.802l-8.077 30.147M61.327 49.016L53.25 79.162M90.466 94.105l-8.078 30.146M42.956 126.734l-8.077 30.147M70.165 158.879l-8.078 30.147M237.203 11.636l-8.078 30.147M27.692 192.858l-8.078 30.146M49.636 240.99l-8.078 30.147M106.301 245.611l-8.078 30.146M87.211 208.806l-8.078 30.147M150.213 231.901l-8.078 30.146M259.31 57.327l-8.078 30.147M180.046 188.322l-8.077 30.146M230.466 119.191l-8.078 30.146M259.604 164.28l-8.078 30.146M208.095 201.909l-8.078 30.147M239.304 229.054l-8.078 30.147M108.002 132.707l-8.078 30.146M147.131 98.725l-8.077 30.147M130.003 73.417l-8.077 30.147M172.018 137.705l-8.078 30.146M209.561 78.172l-8.078 30.146"
              />
              <path
                fill="#fff"
                fill-rule="evenodd"
                d="M124.057 169.963c-1.013.025-2.033.037-3.057.037-37.555 0-68-16.624-68-47s30.445-55 68-55c29.853 0 55.212 15.56 64.359 37.198 2.6 4.597 4.845 9.612 6.193 14.753L235 285.665 148.707 317c-4.783-43.941-16.08-131.528-24.65-147.037z"
                clip-rule="evenodd"
              />
              <path
                fill="#000"
                d="M124.057 169.963l2.626-1.451-.88-1.592-1.819.044.073 2.999zm61.302-64.765l-2.763 1.168.067.159.085.15 2.611-1.477zm6.193 14.753l-2.902.76 2.902-.76zM235 285.665l1.024 2.82 2.572-.934-.694-2.647-2.902.761zM148.707 317l-2.982.325.413 3.799 3.593-1.304-1.024-2.82zm-24.723-150.036c-.989.024-1.984.036-2.984.036v6c1.049 0 2.092-.013 3.13-.038l-.146-5.998zM121 167c-18.387 0-34.771-4.078-46.455-11.629C62.958 147.882 56 137.017 56 123h-6c0 16.359 8.264 28.993 21.288 37.41C84.216 168.765 101.832 173 121 173v-6zm-65-44c0-28.156 28.476-52 65-52v-6c-38.586 0-71 25.404-71 58h6zm65-52c28.916 0 53.015 15.066 61.596 35.366l5.526-2.336C178.41 81.052 151.789 65 121 65v6zm73.454 48.19c-1.431-5.456-3.794-10.714-6.484-15.469l-5.222 2.954c2.51 4.438 4.637 9.211 5.902 14.036l5.804-1.521zm43.448 165.714L194.454 119.19l-5.804 1.521 43.448 165.715 5.804-1.522zm-88.171 34.916l86.293-31.335-2.048-5.64-86.293 31.335 2.048 5.64zm-28.3-148.406c.9 1.628 1.939 4.421 3.066 8.345 1.111 3.871 2.258 8.661 3.419 14.162 2.322 11 4.678 24.713 6.921 39.353 4.485 29.273 8.499 62.109 10.888 84.051l5.964-.65c-2.394-21.999-6.42-54.926-10.922-84.31-2.25-14.688-4.625-28.526-6.98-39.683-1.178-5.578-2.357-10.519-3.523-14.578-1.15-4.006-2.338-7.342-3.581-9.592l-5.252 2.902z"
              />
              <circle cx="129" cy="100" r="8" fill="#2A3624" />
            </g>
            <circle
              cx="126"
              cy="126"
              r="119.5"
              stroke="#000"
              stroke-width="13"
            />
          </svg>
        </Tick>
      </div>

      <div class="mt-12 flex justify-center">
        <a
          class="px-4 py-2 rounded outline-none transition-colors
          border-2 text-emerald-400 border-emerald-400
          hover:text-white hover:bg-emerald-600 hover:border-emerald-600
          focus:text-white focus:bg-emerald-600 focus:border-emerald-600
          active:text-white active:bg-emerald-700 active:border-emerald-700"
          href="/docs"
        >
          Get Started
        </a>
      </div>
      <div aria-hidden="true" class="my10"></div>
    </Layout>
  );
}
