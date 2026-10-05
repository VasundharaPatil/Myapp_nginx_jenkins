pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Validate') {
            steps {
                sh 'test -f index.html'
                sh 'test -f script.js'
                echo 'Website files validated successfully.'
            }
        }

        stage('Deploy') {
            steps {
                sh 'cp index.html /var/www/myapp/index.html'
                sh 'cp script.js /var/www/myapp/script.js'
            }
        }
    }
}
