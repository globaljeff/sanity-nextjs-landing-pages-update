export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
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
                  buildHookId: '602bce6b68455d2c6c95c8ce',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-update-studio',
                  apiId: '96a3e3cd-dc22-40fb-8ad0-08346e943d47'
                },
                {
                  buildHookId: '602bce6bf3d6862cb58f77bf',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-update',
                  apiId: '024cfc72-b14f-469f-a9a4-6eb0e10ddca3'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/globaljeff/sanity-nextjs-landing-pages-update',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-update.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
