import { CgWebsite } from "react-icons/cg";
import { IoBusinessSharp } from "react-icons/io5";
import { RiComputerLine } from "react-icons/ri";
import { MdSocialDistance } from "react-icons/md";
import { MdAccountBalance } from "react-icons/md";
const catagory = [
  {
    name: "Development",
    subcat: [
      "Web Development",
      "Game Development",
      "Mobile Development",
      "Programming Languages",
    ],
    icon: CgWebsite,
  },
  {
    name: "Business",
    subcat: ["Entrepreneurship", "Communication", "Management", "Sales"],
    icon: IoBusinessSharp,
  },
  {
    name: "Finance & Accounting",
    subcat: [
      "Finance",
      "Accounting & Bookkeeping",
      "Cryptocurrency",
      "Investment & Trading",
    ],
    icon: MdAccountBalance,
  },
  {
    name: "IT & Software",
    subcat: ["IT Certification", "Hardware", "Networking", "Operating System"],
    icon: RiComputerLine,
  },
  {
    name: "Marketing",
    subcat: ["SEO", "Digital Marketing", "Branding", "Social Media Marketing"],
    icon: MdSocialDistance,
  },
];

export default catagory;
