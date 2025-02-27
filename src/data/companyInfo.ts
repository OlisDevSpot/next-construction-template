import {
  Building2,
  Mail,
  MessageCircleHeart,
  PanelsTopLeft,
  Phone,
  Star,
} from "lucide-react";
import { FaFacebookSquare, FaInstagramSquare, FaYoutube } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

export const COMPANY_INFO = {
  name: "MODCON Builders",
  alias: "MODCON",
  address: "6252 Calvin Ave, Tarzana, CA 91335",
  caLicense: "1078444",
  owner: "Oliver Porat",
  ownerTitle: "CEO & Founder",
  icon: Mail,
  stats: [
    {
      label: "Projects Completed",
      value: "512",
      icon: PanelsTopLeft,
    },
    {
      label: "Cities Active",
      value: "142",
      icon: Building2,
    },
    {
      label: "5 Star Reviews",
      value: "213",
      icon: Star,
    },
    {
      label: "Better Business Burea",
      value: "A+",
      icon: MessageCircleHeart,
    },
  ],
  hours: [
    {
      days: "Mon - Fri",
      open: "8:00 AM",
      close: "7:00 PM",
    },
    {
      days: "Sun",
      open: "8:00 AM",
      close: "7:00 PM",
    },
  ],
  contact: [
    {
      type: "phone",
      value: "(123) 456-7890",
      icon: Phone,
    },
    {
      type: "email",
      value: "info@modconbuilders.com",
      icon: Mail,
    },
  ],
  socials: [
    {
      type: "facebook",
      href: "https://www.facebook.com/",
      icon: FaFacebookSquare,
    },
    {
      type: "instagram",
      href: "https://www.instagram.com/",
      icon: FaInstagramSquare,
    },
    {
      type: "youtube",
      href: "https://www.youtube.com/",
      icon: FaYoutube,
    },
    {
      type: "twitter",
      href: "https://www.x.com/",
      icon: FaSquareXTwitter,
    },
  ],
};
