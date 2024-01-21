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
        route: '/company',
        icon: 'cil-building',
        items: [
          {
            name: 'Cloud Search',
            to: '/company/clous'
          },
          {
            name: 'CI CD Builder',
            to: '/company/citrus'
          },
          {
            name: 'Golang Search Library',
            to: '/company/gosas'
          },
          {
            name: 'Search DevOps',
            to: '/company/devops'
          }
        ]
      },
      {
        _name: 'CSidebarNavDropdown',
        name: 'Personal',
        route: '/personal',
        icon: 'cil-home',
        items: [
          {
            name: 'Portfolio',
            to: '/personal/portfolio'
          }
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
        icon: 'cil-file'
      },
      {
        _name: 'CSidebarNavItem',
        name: 'LinkedIn',
        href: 'https://www.linkedin.com/in/wonhee/?locale=en_US',
        icon: 'cib-linkedin'
      },
      {
        _name: 'CSidebarNavItem',
        name: 'GitHub',
        href: 'https://github.com/Qtsky89',
        icon: 'cib-github'
      }
    ]
  }
]
