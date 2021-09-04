export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '6132ea1d22f9e2112c3acee3',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-w71fpyxu',
                  apiId: 'f790e5f1-f46f-4132-92cc-dc650d9afb33'
                },
                {
                  buildHookId: '6132ea1d40b1535088fa2218',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-yrxyui9g',
                  apiId: '09dc4b81-8a63-466c-ba11-665d9c1e2890'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/mcc1plid/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-yrxyui9g.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
