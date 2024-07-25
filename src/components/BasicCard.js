import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

export default function BasicCard({ typo }) {
  const handleCopy = () => {
    navigator.clipboard
      .writeText(typo)
      .then(() => {
        console.log("Text copied to clipboard");
      })
      .catch((err) => {
        console.error("Failed to copy text: ", err);
      });
  };

  return (
    <Card sx={{ maxWidth: 700 }}>
      <CardContent>
        <Typography
          sx={{ fontSize: 14, fontWeight: "bold", color: "#000" }}
          color="text.secondary"
          gutterBottom
        >
          {typo}
        </Typography>
        <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
          <Button variant="contained" color="primary" onClick={handleCopy}>
            Copy query
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
}
