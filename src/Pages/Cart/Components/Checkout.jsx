import React from "react";
import { Card } from "@mui/material";
import { CardContent } from "@mui/material";
import { Typography } from "@mui/material";
import { Button } from "@mui/material";
function Checkout({ totalCart }) {
  let total = 3000;
  return (
    <Card sx={{ width: "100%" }}>
      <CardContent>
        <Typography gutterBottom>Total:</Typography>
        <Typography gutterBottom variant="h4">
          ₹{totalCart}
        </Typography>
        <Button fullWidth color="secondary" variant="contained">
          Check Out
        </Button>
      </CardContent>
    </Card>
  );
}

export default Checkout;
