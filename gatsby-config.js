module.exports = {
  
  siteMetadata: {
    title: 'prueba-gatsby',
    author: 'prueba'
  },

  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'posts',
        path: `${__dirname}/src/posts`,
      },
    },
    {
      resolve: 'gatsby-plugin-page-creator',
      options: {
        path: `${__dirname}/src/posts`
      }
    },
    {
      resolve: "",//'gatsby-plugin-mdx',
      options: {
        defaultLayouts: {
          default: require.resolve('./src/components/Layout.js')
        }
      }
    },    
    'gatsby-plugin-sharp',
    {
      resolve:'gatsby-transformer-remark',
      options: {
        plugins : [
          'gatsby-remark-relative-images',
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth:750,
              linkImagesToOriginal:false
            }
          }
        ]
      }
    },
    {
      resolve:'gatsby-source-mongodb',
      options: { 
        dbName: 'testdb', 
        collection: 'messages', 
        connectionString: 'mongodb+srv://irati:12345@cluster0-txayt.mongodb.net/',
        extraParams: {
          retryWrites:true,
          w: 'majority'
        }
      },
    },
  ],
}
