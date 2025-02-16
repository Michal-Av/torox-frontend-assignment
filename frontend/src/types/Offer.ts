export interface Offer {
    id: number;
    title: string;
    img_url: string;
    description: string;
    os: "ios" | "android" | "web";
    badges: string[];
    payout: number;
    bonusPayout?: number;
  }