import React from "react";
import { Box, CircularProgress, Typography } from "@mui/material";
import { styled } from "@mui/system";


const StyledBox = styled(Box)(({ theme }) => ({
  position: "relative",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "#fdf8f850", // Задний фон белый
  borderRadius: "50%", // Круглая форма
}));

const StyledCircularProgress = styled(CircularProgress)(({ theme }) => ({
  "& .MuiCircularProgress-circle": {
    strokeLinecap: "round",
  },

}));

const StyledTypography = styled(Typography)(({ theme }) => ({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  fontSize: "12px",
  fontWeight: "bold",
}));

interface CircularProgressWithLabelProps {
  value: number;
  size?: number;
  thickness?: number;
}
const CircularProgressWithLabel: React.FC<CircularProgressWithLabelProps> = (
  props
) => {
  return (
    <StyledBox>
      <StyledCircularProgress
        variant="determinate"
        value={props.value * 10} // Преобразуем значение в проценты
        size={50}
        thickness={4}
      />
      <StyledTypography variant="caption" color="textSecondary">{`${Math.round(
        props.value * 10
      )}%`}</StyledTypography>
    </StyledBox>
  );
};

const Rating = ({defaultValue}: any) => {
  return (
      <CircularProgressWithLabel value={defaultValue} />
  );
};

export default Rating;
