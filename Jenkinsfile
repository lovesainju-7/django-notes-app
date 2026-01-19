// pipeline {
//     agent any
//     environment {
//         PATH = "/Applications/Docker.app/Contents/Resources/bin:/usr/local/bin:$PATH"
//         DOCKERHUB_USERNAME = "lovesainju"  // Replace with your actual Docker Hub username 
//     }
//     stages{
//         stage("Code"){
//             steps{
//                 echo "This is cloning the code"
//                 git branch: 'main', url: "https://github.com/lovesainju-7/django-notes-app.git/"
//                 echo "clonning successful"
//             }
//         }
//         stage("Build"){
//             steps{
//                 echo "This is Building the code"
//                 sh "docker build -t notes-app:latest ."
//             }
//         }
//         stage("Test"){
//             steps{
//                 echo "This is Testing the code"
//             }
//         }
//         stage("Push to DockerHub"){
//             steps{
//                 echo "Pushing image to Docker Hub..."
//                 withCredentials([usernamePassword(
//                     credentialsId: 'DockerHubCredentials',
//                     usernameVariable: 'DOCKER_USER',
//                     passwordVariable: 'DOCKER_PASS'
//                 )]) {
//                     sh '''
//                         echo $DOCKER_PASS | docker login -u $DOCKERHUB_USERNAME --password-stdin
//                         docker tag notes-app:latest $DOCKERHUB_USERNAME/notes-app:latest
//                         docker push $DOCKERHUB_USERNAME/notes-app:latest
//                     '''
//                 }
//             }
//         }
//         stage("Deploy"){
//             steps{
//                 echo "This is Deploying the code"
//                 sh """
//                     docker stop notes-app || true
//                     docker rm notes-app || true
//                     docker run -d --name notes-app -p 8000:8000 notes-app:latest
//                 """
            
//             }
//         }
//     }
// }
