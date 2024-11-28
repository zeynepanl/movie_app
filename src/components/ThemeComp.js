"use client";

import React, { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { CiLight, CiDark } from "react-icons/ci";

const ThemeComp = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div>
      {theme === "dark" ? (
        <CiLight
          onClick={() => setTheme("light")}
          className="cursor-pointer text-white"
          size={25}
        />
      ) : (
        <CiDark
          onClick={() => setTheme("dark")}
          className="cursor-pointer text-black"
          size={25}
        />
      )}
    </div>
  );
};

export default ThemeComp;
