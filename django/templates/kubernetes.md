## Architecture
![kubernetes_architecture](https://wonhee-image.s3.ap-northeast-2.amazonaws.com/kubernetes_architecture_simple.png)
![kubernetes_architecture](https://wonhee-image.s3.ap-northeast-2.amazonaws.com/kubernetes_architecture_detail.png)

## Summary
* Goal: Make Kubernetes search platform to handle big search service
* Tech: Kubernetes, Helm Chart, Golang, MetalLB, Ceph Storage, Logstack, ArgoCD ...
* My part: Create Service Wizard, LoadBalancer related feature, Migrate old service to this new platform, Test (A/B, Performance, Recovery)
* Develop Duration: 12 months + @

## Detail
[Cloud Search](https://portfolio.wonhee.net/company/clous) can cover a lot of devops issues but, It designed for small search services.
Big search service like web search, cafe search, post search has a big search volume and has to deal with a lot of requets in short amount of time.
I already have a search admin tool based on physical machine.
Instead of using physical machine I used empty kubernetes pod, so I could use old admin tool and also leverage kubernetes cool feature.
My part of this project is that making wizard page and related backend job using helm chart, setting loadbalancer for each service, do lots of tests to see this platform actually works.

## Result
 Currently only Naver Post search uses this platform. But, A lot of Naver search service (Account book, Shopping, Expert, Line review...) are going to use our platform.

### Wizard
![kubernetes_wizard](https://wonhee-image.s3.ap-northeast-2.amazonaws.com/kubernetes_wizard.png)

### Service Card
![kubernetes_card](https://wonhee-image.s3.ap-northeast-2.amazonaws.com/kubernetes_card.png)

### Service Info Page
![kubernetes_info](https://wonhee-image.s3.ap-northeast-2.amazonaws.com/kubernetes_info.png)