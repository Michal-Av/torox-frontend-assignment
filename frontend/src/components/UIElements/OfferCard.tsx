import React, { useState } from "react";
import { Card, CardMedia, Typography, Chip, Box, Stack } from "@mui/material";
import { Offer } from "../../types/Offer";
import { FaAndroid, FaApple, FaGlobe } from "react-icons/fa"; // OS icons for offers

// Default image to use if the offer does not have a valid image
const defaultImage = "https://placehold.co/100x100?text=No+Image";

// Function to determine which OS icon to display
const getOsIcon = (os: string) => {
  switch (os) {
    case "ios":
      return <FaApple size={18} color="white" />;
    case "android":
      return <FaAndroid size={16} color="white" />;
    case "web":
      return <FaGlobe size={16} color="white" />;
    default:
      return null;
  }
};

// OfferCard component: Displays the details of an offer
const OfferCard: React.FC<{ offer: Offer }> = ({ offer }) => {
  // State to handle image loading errors and use default image if necessary
  const [imageSrc, setImageSrc] = useState(offer.img_url || defaultImage);

  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        p: 2,
        mb: 2,
        maxWidth: "90%",
        mx: "auto",
        borderRadius: "16px",
        backgroundColor: "#0a1f59",
        color: "white",
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.5)",
        transition: "transform 0.3s ease-in-out",
        "&:hover": { transform: "scale(1.02)" },
      }}
    >
      {/* Top section: Image + title + description */}
      <Stack direction="row" spacing={2} alignItems="center">
        <CardMedia
          component="img"
          sx={{
            width: 80,
            height: 80,
            borderRadius: "12px",
            objectFit: "cover",
          }}
          image={imageSrc}
          alt={offer.title}
          onError={() => setImageSrc(defaultImage)} // If the image fails to load, replace with default image
        />
        <Box>
          <Typography variant="h6" sx={{ fontWeight: "bold" }}>
            {offer.title}
          </Typography>
          <Typography variant="body2" sx={{ color: "#b0b3c8", mt: 1 }}>
            {offer.description}
          </Typography>
        </Box>
      </Stack>

      {/* Bottom section: OS icon + badges + payout */}
      <Stack direction="row" justifyContent="space-between" alignItems="center" mt={2}>
        {/* OS icon and badges */}
        <Stack direction="row" spacing={1} alignItems="center">
          <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
            {getOsIcon(offer.os)} {/* Display the correct OS icon */}
          </Box>
          {offer.badges.map((badge) => (
            <Chip
              key={badge}
              label={badge}
              sx={{
                backgroundColor: "#303556",
                color: "white",
                fontSize: "12px",
                fontWeight: "bold",
                borderRadius: "6px",
              }}
            />
          ))}
        </Stack>

        {/* Payout amount */}
        <Box
          sx={{
            backgroundColor: "#80ff80",
            color: "#0d1530",
            fontWeight: "bold",
            px: 3,
            py: 1,
            borderRadius: "30px",
            fontSize: "14px",
            display: "flex",
            alignItems: "center",
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)",
          }}
        >
          💰 {offer.bonusPayout ? `Up to $${offer.payout + offer.bonusPayout}` : `Up to $${offer.payout}`}
        </Box>
      </Stack>
    </Card>
  );
};

export default OfferCard;
