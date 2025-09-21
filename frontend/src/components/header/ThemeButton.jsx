import React from "react";
import { useMantineColorScheme, ActionIcon, Tooltip } from "@mantine/core";
import { Sun, Moon } from "lucide-react";

const ThemeButton = () => {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const dark = colorScheme === "dark";

  return (
    <Tooltip label={dark ? "Switch to light mode" : "Switch to dark mode"} withArrow>
      <ActionIcon
        variant="outline"
        color={dark ? "yellow" : "blue"}
        onClick={() => toggleColorScheme()}
        title="Toggle color scheme"
        size="lg"
        aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
      >
        {dark ? <Sun size={18} /> : <Moon size={18} />}
      </ActionIcon>
    </Tooltip>
  );
};

export default ThemeButton;