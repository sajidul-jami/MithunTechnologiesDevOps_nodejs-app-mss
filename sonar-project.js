const sonarqubeScanner = require('sonarqube-scanner');

sonarqubeScanner({
  serverUrl: 'http://3.111.217.190:9000/',
       options : {
	    'sonar.projectDescription': 'This is a Node JS application',
	    'sonar.projectName': 'Sample',
	    'sonar.projectKey':'Sample',
	    'sonar.login': 'caa9cf055f79f45a911c3469a84ae3d89f61506c',
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
