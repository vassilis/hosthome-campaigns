export default {
  widgets: [
    { name: 'structure-menu' },
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
                  buildHookId: '5e74d3c9a020cd8854621589',
                  title: 'Sanity Studio',
                  name: 'hosthome-campaigns-studio',
                  apiId: 'f7c79a95-32d7-4dc3-bb51-4b4460798028'
                },
                {
                  buildHookId: '5e74d3c9088f47855283a472',
                  title: 'Blog Website',
                  name: 'hosthome-campaigns',
                  apiId: 'ea865194-6597-4a86-92e1-af0d3896ed55'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/vassilis/hosthome-campaigns',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://hosthome-campaigns.netlify.com', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
