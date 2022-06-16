const sonarqubeScanner = require('sonarqube-scanner');

sonarqubeScanner({
  serverUrl: http://13.126.186.199:9000/',
       options : {
	    'sonar.projectDescription': 'This is a Node JS application',
	    'sonar.projectName': 'Sample',
	    'sonar.projectKey':'Sample',
	    //'sonar.login': '1d9eb7fad05351f383c9c1c334373c6f34f96631',
	    'sonar.login': 'admin',
	    'sonar.password': 'Vardhan@20',
            'sonar.projectVersion':'1.0',
	    'sonar.language':'js',
            'sonar.sourceEncoding':'UTF-8',
            'sonar.sources': '.',
	  //'sonar.tests': 'specs',
          //'sonar.inclusions' : 'src/**'
       },
}, () => {});
