const sonarqubeScanner = require('sonarqube-scanner');

sonarqubeScanner({
#<<<<<<< master
 # serverUrl: 'http://65.2.83.58:9000/',
#=======
 # serverUrl: 'http://15.206.148.60:9000/',
#>>>>>>> master
       options : {
	    'sonar.projectDescription': 'This is a Node JS application',
	    'sonar.projectName': 'Node JS Application - Sample',
	    'sonar.projectKey':'NodeJsMithunTechnologies',
#<<<<<<< master
	   // 'sonar.login': 'squ_dd9c695804fe2d2f68846dc0fe99b20f7d906d88',
	    'sonar.login': 'admin',
	    'sonar.password': 'password',
#=======
	#    'sonar.login': 'squ_142ce4d94e9ac7da1944264298805e114a858d89',
	    //'sonar.login': 'admin',
	    //'sonar.password': 'admin',
#>>>>>>> master
            'sonar.projectVersion':'1.0',
	    'sonar.language':'js',
            'sonar.sourceEncoding':'UTF-8',
            'sonar.sources': '.',
	  //'sonar.tests': 'specs',
          //'sonar.inclusions' : 'src/**'
       },
}, () => {});
