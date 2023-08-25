"use client";
import { data } from "autoprefixer";
import { useState } from "react";
import Terminal, { ColorMode, TerminalOutput } from "react-terminal-ui";

export default function TerminalPanel() {
  const [terminalLineData, setTerminalLineData] = useState([
    <TerminalOutput key={Math.random()}>
      Welcome to my terminal!
    </TerminalOutput>,
  ]);

  function calculateAge() {
    const birthDate: any = new Date(2002, 9, 18); // Months are zero-based
    const currentDate = Date.now();
    const ageInMilliseconds = currentDate - birthDate;
    const ageInYears = ageInMilliseconds / (1000 * 60 * 60 * 24 * 365.25);
    return ageInYears.toFixed(12);
  }

  function onTerminalInput(data: string) {
    switch (data) {
      case "clear":
        setTerminalLineData([]);
        break;
      case "help":
        setTerminalLineData([
          <TerminalOutput key={Math.random()}>Commands:</TerminalOutput>,
          <TerminalOutput key={Math.random()}></TerminalOutput>,
          <TerminalOutput key={Math.random()}>
            &apos;age&apos; : will display my current age.
          </TerminalOutput>,
          <TerminalOutput key={Math.random()}>
            &apos;langs&apos; will display some of languages that i normally
            use.
          </TerminalOutput>,
          <TerminalOutput key={Math.random()}>
            &apos;projects&apos; will show my github page.
          </TerminalOutput>,
          <TerminalOutput key={Math.random()}>
            &apos;clear&apos; will clear the terminal.
          </TerminalOutput>,
        ]);
        break;

      case "age":
        setTerminalLineData([
          ...terminalLineData,
          <TerminalOutput key={Math.random()}>
            {`Currently ${calculateAge()} years-old`}
          </TerminalOutput>,
        ]);

        break;

      case "langs":
        setTerminalLineData([
          ...terminalLineData,
          <TerminalOutput key={Math.random()}>
            <ul>
              <li>⭐ JavaScript</li>
              <li>⭐ TypeScript</li>
              <li>C</li>
              <li>C++</li>
              <li>C#</li>
              <li>PHP</li>
              <li>Java</li>
              <li>Python</li>
            </ul>
          </TerminalOutput>,
        ]);
        break;

      case "projects":
        typeof window !== "undefined"
          ? window.open(
              "https://github.com/GoncalojmRosa?tab=repositories",
              "_blank"
            )
          : "";
      default:
        setTerminalLineData([
          ...terminalLineData,
          <TerminalOutput key={Math.random()}>
            Unrecognized command
          </TerminalOutput>,
        ]);
        break;
    }
  }
  return (
    <div className="flex items-start justify-center w-full h-full overflow-y-hidden">
      <Terminal
        name="Explore my portfolio via terminal"
        colorMode={ColorMode.Dark}
        onInput={onTerminalInput}
        height={`${
          typeof window !== "undefined" ? window.innerHeight * 0.89 : 0
        }px`}
      >
        {terminalLineData}
      </Terminal>
    </div>
  );
}
