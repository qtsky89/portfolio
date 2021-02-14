export default [
  {
    _name: "CSidebarNav",
    _children: [
      {
        _name: "CSidebarNavTitle",
        _children: ["Project"],
      },
      {
        _name: "CSidebarNavDropdown",
        name: "Company",
        route: "/Company",
        icon: "cil-building",
        items: [
          {
            name: "Golang Search Library",
            to: "/Company/Golang Search Library",
          },
          {
            name: "CI CD Builder",
            to: "/Company/CI CD Builder",
          },
          {
            name: "Cloud Search",
            to: "/Company/Cloud Search",
          },
          {
            name: "Search DevOps",
            to: "/Company/Search DevOps",
          },
        ],
      },
      {
        _name: "CSidebarNavDropdown",
        name: "Personal",
        route: "/Personal",
        icon: "cil-home",
        items: [
          {
            name: "Portfolio",
            to: "/Personal/Portfolio",
          },
        ],
      },
      {
        _name: "CSidebarNavTitle",
        _children: ["Link"],
      },
      {
        _name: "CSidebarNavItem",
        name: "Resume",
        href: "https://wonhee-image.s3.ap-northeast-2.amazonaws.com/Resume.pdf",
        icon: "cil-file",
      },
      {
        _name: "CSidebarNavItem",
        name: "LinkedIn",
        href: "https://www.linkedin.com/in/wonhee/?locale=en_US",
        icon: "cib-linkedin",
      },
      {
        _name: "CSidebarNavItem",
        name: "GitHub",
        href: "https://github.com/Qtsky89",
        icon: "cib-github",
      },
    ],
  },
];
