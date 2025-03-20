import { Box, Button, Stack, Typography } from "@mui/material";
import React from "react";
import image1 from "../images/1.jpg";
import image2 from "../images/2.jpg";
import { AddShoppingCartOutlined } from "@mui/icons-material";

function ProductDetails() {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: 2.5,
        flexDirection: { xs: "column", sm: "row" },
      }}
    >
      <Box sx={{ display: "flex" }}>
        <img width={400} src={image1} alt="" />
      </Box>

      <Box sx={{ textAlign: { xs: "center", sm: "left" } }}>
        <Typography variant="h5">Wome fashons</Typography>
        <Typography my={0.4} fontSize={"22px"} color={"crimson"} variant="h6">
          $12.6
        </Typography>
        <Typography variant="body1">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora,
          dolor!
        </Typography>
        <Stack
          sx={{ justifyContent: { xs: "center", sm: "left" } }}
          direction={"row"}
          gap={1}
          my={2}
        >
          {[image2, image1, image2].map((item) => {
            return (
              <img
                style={{ borderRadius: 3 }}
                width={90}
                height={100}
                key={item}
                src={item}
                alt=""
              />
            );
          })}
        </Stack>

        <Button
          sx={{ mb: { xs: 1, sm: 0 }, textTransform: "capitalize" }}
          variant="contained"
        >
          <AddShoppingCartOutlined sx={{ mr: 1 }} fontSize="small" />
          Buy now
        </Button>
      </Box>
    </Box>
  );
}

export default ProductDetails;
