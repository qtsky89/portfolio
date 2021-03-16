## Architecture
![citrus_architecture](https://wonhee-image.s3.ap-northeast-2.amazonaws.com/citrus_architecture.png)

## Summary
* Goal: Make automated CI / CD tool for Search Developer      
* Tech: Vue.js, Django, Gin, K8S, Wetty, Jenkins, Sonarqube
* My part: Design prototype of product, Develop service create wizard, Component dockerization and maintenance         
* Develop Duration: 1 year + @

## Detail
Nowadays, CI / CD is essential part when it comes to develop software product.
( Code modification -> Build Search Module -> Invoke Test -> Result visualization <CI part> -> Deploy to cluster  <CD part> )
In early beginning, each developer has their own CI/CD pipeline.
It's waste of time and also hard to maintain.
Designed the platform that needs essential information like github path, branch name, package name, etc.
And using that information it turns into Jenkins pipeline job. 
Each developer needs their own environment to build and test so I also put image modification feature.

## Result
Currently more than a 60 services use our platform.
Uploaded core screenshots of our product.

### Dashboard
<img src="https://wonhee-image.s3.ap-northeast-2.amazonaws.com/citrus_dashboard.png" width="70%"/>
<br><br>

### Service Create
<img src="https://wonhee-image.s3.ap-northeast-2.amazonaws.com/citrus_create.png" width="70%"/>
<br><br>

## Image Modify
<img src="https://wonhee-image.s3.ap-northeast-2.amazonaws.com/citrus_image.png" width="70%"/>
<br><br>

## Robot Create
<img src="https://wonhee-image.s3.ap-northeast-2.amazonaws.com/citrus_robot.png" width="70%"/>
<br><br>

### Service List
<img src="https://wonhee-image.s3.ap-northeast-2.amazonaws.com/citrus_list.PNG" width="70%"/>
<br><br>

### Jenkins
<img src="https://wonhee-image.s3.ap-northeast-2.amazonaws.com/citrus_jenkins.PNG" width="70%"/>
<br><br>

### Sonarqube
<img src="https://wonhee-image.s3.ap-northeast-2.amazonaws.com/citrus_sonarqube.png" width="70%"/>
