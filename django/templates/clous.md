## Architecture
<img src="https://wonhee-image.s3.ap-northeast-2.amazonaws.com/clous_architecture.png" width="80%">

## Summary
* Goal: Make cloud search platform to handle lots of search service
* Tech: Docker, Orchestration tool, LoadBalancer, NAS
* My part: LoadBalancer, Search Application Server, Design NFS architecture
* Develop Duration: 12 months + @

## Detail
Before this project our team have to deal with not only clients requests but also server failure in any time.
After some points we couldn't continue because one man couldn't deal with that many of requests at same time.
We wanted to make platform that creates search service very easily, and also support devops feature (search, index, rank, log, monitor...).
We used docker image that has search and index features inside, and made our own docker orchestration tool and dashboard.
Any engineer can make search service and also operate with few clicks.

## Result
More than 200 + @ services in Naver and Line company are currently served by our platform.
Our next plan is to build the platform that supports big scale service.

### Wizard
<img src="https://wonhee-image.s3.ap-northeast-2.amazonaws.com/clous_wizard.png" width="80%">
<br/><br/>

### Main Page
<img src="https://wonhee-image.s3.ap-northeast-2.amazonaws.com/clous_main.png" width="80%">
<br/><br/>

### Search Test Page
<img src="https://wonhee-image.s3.ap-northeast-2.amazonaws.com/clous_search.png" width="80%">
<br/><br/>

### Index Test Page
<img src="https://wonhee-image.s3.ap-northeast-2.amazonaws.com/clous_index.png" width="80%">
<br/><br/>

### Rank Test Page
<img src="https://wonhee-image.s3.ap-northeast-2.amazonaws.com/clous_rank.png" width="80%">
