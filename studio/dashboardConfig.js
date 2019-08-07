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
                  buildHookId: '5d4af5ba53bb230e30eb6c39',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-4x1n1kba',
                  apiId: '10c14ea0-2b03-4b43-8081-620e2d0f6707'
                },
                {
                  buildHookId: '5d4af5ba84c04cd52926faf6',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-2nvghr5o',
                  apiId: '05053c35-c3c6-4bea-ae7f-1400a754cd65'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/pongsakornsemsuwan/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-2nvghr5o.netlify.com', category: 'apps'}
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
