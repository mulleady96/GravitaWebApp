module.exports = {
    ci: {
      collect: {
        /* Add configuration here */
       //staticDistDir: './dist',
        startServerCommand: 'ng serve', // Dev report
        //startServerCommand: 'ng serve --prod', // Prod report
        url: ['http://localhost:4200']
      },
      assert: {
        assertions: {
          'categories:performance': ['warn', {minScore: 1}],
          'categories:accessibility': ['warn', {minScore: 1}]
        }
      },
      upload: {
        /* Add configuration here */
        target: 'temporary-public-storage',
      },
    },
  };