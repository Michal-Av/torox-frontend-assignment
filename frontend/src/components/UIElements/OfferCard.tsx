import React, { useState } from "react";
import { Card, CardMedia, Typography, Chip, Box, Stack } from "@mui/material";
import { Offer } from "../../types/Offer";
import { FaAndroid, FaApple, FaGlobe } from "react-icons/fa"; // אייקונים למערכות הפעלה

const defaultImage = "https://placehold.co/100x100?text=No+Image";

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

const OfferCard: React.FC<{ offer: Offer }> = ({ offer }) => {
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
          onError={() => setImageSrc(defaultImage)}
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

 
      <Stack direction="row" justifyContent="space-between" alignItems="center" mt={2}>
        <Stack direction="row" spacing={1} alignItems="center">
          <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
            {getOsIcon(offer.os)} 
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
