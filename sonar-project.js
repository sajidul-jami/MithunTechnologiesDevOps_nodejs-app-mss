const sonarqubeScanner = require('sonarqube-scanner');

sonarqubeScanner({
  serverUrl: 'http://15.207.100.185:9000/',
       options : {
	    'sonar.projectDescription': 'This is a Node JS application',
	    'sonar.projectName': 'Sample',
	    'sonar.projectKey':'Sample',
	    //'sonar.login': 'bd29ef1ffd9a14dd1bc4e13eacaa85eb6a183fe2',
	    'sonar.login': 'admin',
	    'sonar.password': 'asdfghjkl',
            'sonar.projectVersion':'1.0',
	    'sonar.language':'js',
            'sonar.sourceEncoding':'UTF-8',
            'sonar.sources': '.',
	  //'sonar.tests': 'specs',
          //'sonar.inclusions' : 'src/**'
       },
}, () => {});
