import { useContext } from "react";
import ThemeContext from "../providers/ThemeContext";

const useTheme = () => {
    const { darkMode, themeColor, colorMap } = useContext(ThemeContext);

    const bgColor = colorMap[themeColor] || '';

    return { darkMode, themeColor, bgColor };
};

export default useTheme;