import React from "react";
import { MdWeb } from "react-icons/md";

import { FaHandHoldingHeart } from "react-icons/fa";

import { VscCode } from "react-icons/vsc";

export default [
  {
    title: "Leetcode",
    icon: <MdWeb className="w-full h-full" />,
    link: "https://leetcode.com/heisenberg_5/",

    description:
      // "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi rerum quia harum eaque, quae laboriosam quisquam distinctio.",
      "800+ probems solved at LEETCODE.",
  },
  {
    title: "Codeforces",
    icon: <FaHandHoldingHeart className="w-full h-full" />,
    link: "https://codeforces.com/profile/saymyname_5",
    description:
      // "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi rerum quia harum eaque, quae laboriosam quisquam distinctio.",
      "Specialist at CODEFORCES.",
  },
  ,
  {
    title: "Codechef",
    icon: <VscCode className="w-full h-full" />,
    link: "https://www.codechef.com/users/tirederit",

    description:
      // "Lorem ipsum dolor sit amet consetetur adipisicing elit. Quasi rerum quia harum eaque, quae laboriosam quisquam distinctio.",
      "3 🌟 at CODECHEF.",
  },
];
