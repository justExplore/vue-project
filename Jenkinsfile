pipeline {
    agent any
    stages {
        stage('Checkout') {
            steps {
                checkout([$class: 'GitSCM', branches: [[name: '*/master']], doGenerateSubmoduleConfigurations: false, extensions: [], submoduleCfg: [], userRemoteConfigs: [[credentialsId: '6a055d48-fee0-42b8-bc37-77980a6b8867', url: 'https://github.com/justExplore/vue-project']]])
            }
        }
        stage('Build') {
            steps {
                bat 'npm install & npm run build'
            }
        }        
    }
}