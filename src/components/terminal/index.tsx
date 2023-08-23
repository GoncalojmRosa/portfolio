"use client";
import { ReactTerminal } from "react-terminal";
import { TerminalContextProvider } from "react-terminal";

export default function Terminal() {
  const commands = {
    help: (
      <span>
        <strong>clear</strong> - clears the console. <br />
        <strong>change_prompt &lt;PROMPT&gt;</strong> - Change the prompt of the
        terminal. <br />
        <strong>change_theme &lt;THEME&gt;</strong> - Changes the theme of the
        terminal. Allowed themes - light, dark, material-light, material-dark,
        material-ocean, matrix and dracula. <br />
        <strong>toggle_control_bar</strong> - Hides / Display the top control
        bar. <br />
        <strong>toggle_control_buttons</strong> - Hides / Display the top
        buttons on control bar. <br />
        <strong>evaluate_math_expression &lt;EXPR&gt;</strong> - Evaluates a
        mathematical expression (eg, <strong>4*4</strong>) by hitting a public
        API, api.mathjs.org.
      </span>
    ),
    whoami: "GonçaloRosa",
    skills: "",
    age: () =>
      `${
        (new Date() - new Date(1032332400000)) /
        (1000 * 60 * 60 * 24 * 365.25).toString().substring(0, 12)
      }`,
    cd: (directory: any) => `changed path to ${directory}`,
  };

  const welcomeMessage = (
    <span>
      Type "help" for all available commands. <br />
    </span>
  );
  return (
    <TerminalContextProvider>
      <ReactTerminal
        themes={{
          "my-theme": {
            themeBGColor: "#000000",
            themeToolbarColor: "#DBDBDB",
            themeColor: "#FFFEFC",
            themePromptColor: "#a917a8",
          },
        }}
        theme="my-theme"
        showControlButtons={false}
        showControlBar={false}
        welcomeMessage={welcomeMessage}
        commands={commands}
      />
    </TerminalContextProvider>
  );
}
