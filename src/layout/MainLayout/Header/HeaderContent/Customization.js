import React from "react";
import useConfig from "hooks/useConfig";
import { Box, MenuItem, TextField, IconButton } from "@mui/material";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";

const Customization = () => {
  const { mode, onChangeMode, fontFamily, onChangeFontFamily , onChangePresetColor, presetColor} = useConfig();

  console.log(presetColor)
  const handleFontChange = (event) => {
    onChangeFontFamily(event.target.value);
  };
  const handleThemeChange = (event) => {
    onChangePresetColor(event.target.value);
  };

  const fonts = [
    {
      id: "inter",
      value: `'Inter', sans-serif`,
      label: "Inter",
    },
    {
      id: "roboto",
      value: `'Roboto', sans-serif`,
      label: "Roboto",
    },
    {
      id: "poppins",
      value: `'Poppins', sans-serif`,
      label: "Poppins",
    },
    {
      id: "Lato",
      value: `'Lato', sans-serif`,
      label: "Lato",
    },
  ];
  const themes = [
    {
      id: "default",
      value: 'default',
      label: "default",
    },
    {
      id: "theme1",
      value: 'theme1',
      label: "Variant 1",
    },
    {
      id: "theme2",
      value: 'theme2',
      label: "Variant 2",
    },
    {
      id: "theme3",
      value: 'theme3',
      label: "Variant 3",
    },
    {
      id: "theme4",
      value: 'theme4',
      label: "Variant 4",
    },
    {
      id: "theme5",
      value: 'theme5',
      label: "Variant 5",
    },
    {
      id: "theme6",
      value: 'theme6',
      label: "Variant 6",
    },
    {
      id: "theme7",
      value: 'theme7',
      label: "Variant 7",
    },
    {
      id: "theme8",
      value: 'theme8',
      label: "Variant 8",
    },
   
  ];

  const isDarkMode = mode === "dark";

  return (
    <>
      
        {/* <TextField
          label="Fonts"
          sx={{ ml: 2, minWidth: 100 }}
          size="small"
          select
          defaultValue={fontFamily}
          onChange={handleFontChange}
        >
          {fonts.map((el) => (
            <MenuItem value={el.value} key={el.id}>
              {el.id}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          label="themes"
          sx={{ ml: 2, minWidth: 100 }}
          size="small"
          select
          defaultValue={presetColor}
          onChange={handleThemeChange}
        >
          {themes.map((el) => (
            <MenuItem value={el.value} key={el.id}>
              {el.label}
            </MenuItem>
          ))}
        </TextField> */}
        <IconButton
          onClick={() => onChangeMode(isDarkMode ? "light" : "dark")}
          sx={{ ml: 2 }}
          color="inherit"
        >
          {isDarkMode ? <Brightness7Icon /> : <Brightness4Icon />}
        </IconButton>
     
    </>
  );
};

export default Customization;