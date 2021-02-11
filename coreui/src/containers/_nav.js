export default [
  {
    _name: 'CSidebarNav',
    _children: [
      {
        _name: 'CSidebarNavTitle',
        _children: ['Project']
      },
      {
        _name: 'CSidebarNavDropdown',
        name: 'Company',
        route: '/document',
        icon: 'cil-building',
        items: [
          {
            name: 'Golang Search Library',
            to: '/document/gosas'
          },
          {
            name: 'CI/CD Builder',
            to: '/document/citrus'
          },
          {
            name: 'Cloud Search',
            to: '/document/clous'
          },
          {
            name: 'Search DevOps',
            to: '/document/devops'
          },
        ]
      },
      {
        _name: 'CSidebarNavDropdown',
        name: 'Personal',
        route: '/document',
        icon: 'cil-home',
        items: [
          {
            name: 'Portfolio',
            to: '/document/portfolio'
          },
        ]
      },
      {
        _name: 'CSidebarNavTitle',
        _children: ['Link']
      },
      {
        _name: 'CSidebarNavItem',
        name: 'Resume',
        href: 'https://wonhee-image.s3.ap-northeast-2.amazonaws.com/Resume.pdf',
        icon: 'cil-file',
      },
      {
        _name: 'CSidebarNavItem',
        name: 'LinkedIn',
        href: 'https://www.linkedin.com/in/wonhee/?locale=en_US',
        icon: 'cib-linkedin',
      },
      {
        _name: 'CSidebarNavItem',
        name: 'GitHub',
        href: 'https://github.com/Qtsky89',
        icon: 'cib-github',
      }
    ]
  }
]
