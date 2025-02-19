import { Sun, Moon } from "lucide-react";
import useUIStore from "@/store/uiStore";
import { Button } from "@/components/ui/Button";

export const ThemeToggle = () => {
  const { theme, toggleTheme } = useUIStore();

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={toggleTheme}
      className="px-2"
      aria-label="Toggle theme"
    >
      {theme === "light" ? (
        <Moon className="h-5 w-5" />
      ) : (
        <Sun className="h-5 w-5" />
      )}
    </Button>
  );
};
