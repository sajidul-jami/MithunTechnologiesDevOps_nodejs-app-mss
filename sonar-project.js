const sonarqubeScanner = require('sonarqube-scanner');

sonarqubeScanner({
  serverUrl: '172.31.41.188:9000/',
       options : {
	    'sonar.projectDescription': 'This is a Node JS application',
	    'sonar.projectName': 'Node JS Application - Sample',
	    'sonar.projectKey':'NodeJsMithunTechnologies',
	    'sonar.login':'sqa_b0c4c5792d7aa85a093fa411645a36affc810af5',
	    //'sonar.login': 'admin',
	    //'sonar.password': 'rachiku3',
            'sonar.projectVersion':'1.0',
	    'sonar.language':'js',
            'sonar.sourceEncoding':'UTF-8',
            'sonar.sources': '.',
	  //'sonar.tests': 'specs',
          //'sonar.inclusions' : 'src/**'
       },
}, () => {});
