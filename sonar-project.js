const sonarqubeScanner = require('sonarqube-scanner');

sonarqubeScanner({
  serverUrl: 'http://54.221.96.237:9000/',
       options : {
	    'sonar.projectDescription': 'This is a Node JS application',
	    'sonar.projectName': 'Sample',
	    'sonar.projectKey':'Sample',
	    'sonar.login': '8503e05c5e02fda5fdd51b59c9d3c9317498ade5',
	    //'sonar.login': 'admin',
	    //'sonar.password': 'Vardhan@20',
            'sonar.projectVersion':'1.0',
	    'sonar.language':'js',
            'sonar.sourceEncoding':'UTF-8',
            'sonar.sources': '.',
	  //'sonar.tests': 'specs',
          //'sonar.inclusions' : 'src/**'
       },
}, () => {});
