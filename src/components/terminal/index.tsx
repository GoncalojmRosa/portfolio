"use client";
import { calculateAge } from "@/lib/utils";
import { useState } from "react";
import Terminal, { ColorMode, TerminalOutput } from "react-terminal-ui";

export default function TerminalPanel() {
  const [terminalLineData, setTerminalLineData] = useState([
    <TerminalOutput key={Math.random()}>
      Welcome to my terminal!
    </TerminalOutput>,
  ]);
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
  const redirect = () => {
    typeof window !== "undefined" ? window.open("/", "_self") : "";
  };
  return (
    <div className="flex items-start justify-center w-full overflow-y-hidden bg-terminalColor h-screen">
      <Terminal
        name="Portfolio via terminal"
        colorMode={ColorMode.Dark}
        onInput={onTerminalInput}
        redBtnCallback={redirect}
      >
        {terminalLineData}
      </Terminal>
    </div>
  );
}
