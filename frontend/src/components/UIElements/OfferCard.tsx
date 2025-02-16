import React from "react";
import { Card, CardContent, CardMedia, Typography, Chip, Stack } from "@mui/material";
import { Offer } from "../../types/Offer";

const OfferCard: React.FC<{ offer: Offer }> = ({ offer }) => {
  return (
    <Card sx={{ display: "flex", flexDirection: "row", alignItems: "center", p: 2, mb: 2 }}>
      <CardMedia component="img" sx={{ width: 64, height: 64, borderRadius: "8px" }} image={offer.img_url} alt={offer.title} />
      <CardContent sx={{ flex: 1 }}>
        <Typography variant="h6">{offer.title}</Typography>
        <Typography variant="body2" color="text.secondary">
          {offer.description}
        </Typography>
        <Stack direction="row" spacing={1} sx={{ mt: 1 }}>
          {offer.badges.map((badge) => (
            <Chip key={badge} label={badge} color="primary" size="small" />
          ))}
        </Stack>
        <Typography variant="subtitle2" sx={{ mt: 1, fontWeight: "bold" }}>
          Payout: ${offer.payout} {offer.bonusPayout && `+ Bonus $${offer.bonusPayout}`}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default OfferCard;
