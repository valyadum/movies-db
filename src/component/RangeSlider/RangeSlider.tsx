import { FormControl, FormLabel, Slider } from "@mui/material";
import { Controller } from "react-hook-form";

interface RangeSliderProps {
  control: any;
}

function RangeSlider({ control }: RangeSliderProps) {
  const minYear = 1950;
  const maxYear = new Date().getFullYear();

  // Функція для отримання тексту значення
  function valuetext(value: number) {
    return `${value}`;
  }
  const marks = [
    { value: minYear, label: `${minYear}` },
    { value: maxYear, label: `${maxYear}` },
  ];
  return (
    <FormControl
      component="fieldset"
      variant="standard"
      sx={{ m: 2, display: "block" }}
    >
      <FormLabel>Release year </FormLabel>
      <Controller
        control={control}
        name="primary_release_year"
        render={({ field: { onChange, value } }) => (
          <Slider
            getAriaLabel={() => "Release year"}
            value={value}
            onChange={(_, value) => onChange(value)}
            valueLabelDisplay="auto"
            getAriaValueText={valuetext}
            track={false}
            min={minYear}
            max={maxYear}
            marks={marks}
            step={1}
          />
        )}
      />
    </FormControl>
  );
}

export default RangeSlider;

// ! варіант з проміжком часу!//

// import { debounce, FormControl, FormLabel, Slider } from "@mui/material";
// import React, { useState } from "react";
// import { Controller } from "react-hook-form";

// function RangeSlider() {
//   // Визначення мінімального та максимального років
//   const minYear = 1950;
//   const maxYear = new Date().getFullYear(); // Поточний рік

//   // Функція для отримання тексту значення
//   function valuetext(value: number) {
//     return `${value}`;
//   }

//   // Стан для збереження обраних значень діапазону років
//   const [value, setValue] = useState<number[]>([minYear, maxYear]);

//   // Функція, що викликається при зміні значення слайдера

//   const handleChange = (event: Event, newValue: number | number[]) => {
//       setValue(newValue as number[]);
//       console.log(value);

//   };
//     const marks = [
//       { value: 1950, label: "1950" },
//       { value: maxYear, label: `${maxYear}` },
//     ];
//   return (
//     <FormControl
//       component="fieldset"
//       variant="standard"
//       sx={{ m: 2, display: "block" }}
//     >
//       <FormLabel>Release year </FormLabel>
//       {/* Слайдер для вибору діапазону років */}
//       <Slider
//         getAriaLabel={() => "Release year"}
//         value={value}
//         onChange={handleChange}
//         valueLabelDisplay="auto"
//         getAriaValueText={valuetext}
//         // Встановлення мінімального та максимального значень слайдера
//         min={minYear}
//               max={maxYear}
//               marks= {marks}
//         // Крок для крокування по слайдеру (необов'язково)
//         step={1}
//       />
//     </FormControl>
//   );
// }

// export default RangeSlider;
