import Button from "@mui/material/Button";

export const MainButton = ({ text, color, buttonAction }) => {
  return (
    <Button
      variant="outlined"
      color={color}
      onClick={buttonAction}
    >
      {text}
    </Button>
  );
};
