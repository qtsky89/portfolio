## Architecture
<img src="https://wonhee-clous.s3.ap-northeast-2.amazonaws.com/clous_architecture.png" width="80%">

## Summary
- **Situation**: Previously, Naver search developers relied on physical servers to deploy search logic, which required significant time and effort to manage, especially for tasks like server restoration.
- **Task**: Build a platform to streamline the creation and management of search services, and migrate services from the legacy platform to the new one.
- **Action**: As a fullstack engineer, I developed key features, including service creation, service listing, Helm chart management, node and server configuration, manager and load balancer settings, and set up the CI/CD pipeline.
- **Result**: Launched v1.0.0 in October 2023, followed by ongoing feature enhancements based on user feedback. Currently, hundreds of services are running in production mode, with more Naver search services scheduled for migration soon. The platform has saved developers approximately 50% of their time by eliminating manual tasks like pysical server requests and setting up logging and monitoring systems.
- **Tech Stack**: Kubernetes, Helmchart, Gin(Golang), Vue.js(Typescript), GraphQL, MariaDB, Quasar, ArgoCD. Github action, Cypress.
- **Duration**: 2017.04 ~ present
- **Member**: 15

## CI / CD that I made
* CI
<img src="https://wonhee-clous.s3.ap-northeast-2.amazonaws.com/ci.png" width="80%">
* CD
<img src="https://wonhee-clous.s3.ap-northeast-2.amazonaws.com/cd.png" width="80%">

## Pages that I made
* create
<img src="https://wonhee-clous.s3.ap-northeast-2.amazonaws.com/service_create.png" width="80%">
* list
<img src="https://wonhee-clous.s3.ap-northeast-2.amazonaws.com/service_list.png" width="80%">
* sever setting
<img src="https://wonhee-clous.s3.ap-northeast-2.amazonaws.com/service_sas_setting.png" width="80%">
* manager
<img src="https://wonhee-clous.s3.ap-northeast-2.amazonaws.com/service_manager.png" width="80%">
* k8s event monitor
<img src="https://wonhee-clous.s3.ap-northeast-2.amazonaws.com/service_event_monitor.png" width="80%">
* node control
<img src="https://wonhee-clous.s3.ap-northeast-2.amazonaws.com/admin_node.png" width="80%">
* helmchart control
<img src="https://wonhee-clous.s3.ap-northeast-2.amazonaws.com/admin_helmchart.png" width="80%">

## More Pages
* info
<img src="https://wonhee-clous.s3.ap-northeast-2.amazonaws.com/service_info.png" width="80%">
* monitor
<img src="https://wonhee-clous.s3.ap-northeast-2.amazonaws.com/service_monitor.png" width="80%">
* schema setting
<img src="https://wonhee-clous.s3.ap-northeast-2.amazonaws.com/service_schema_setting.png" width="80%">
* ranking setting
<img src="https://wonhee-clous.s3.ap-northeast-2.amazonaws.com/service_ranking.png" width="80%">
* package setting
<img src="https://wonhee-clous.s3.ap-northeast-2.amazonaws.com/service_package.png" width="80%">
* dictionary setting
<img src="https://wonhee-clous.s3.ap-northeast-2.amazonaws.com/service_dictionary_setting.png" width="80%">
* search test
<img src="https://wonhee-clous.s3.ap-northeast-2.amazonaws.com/service_sas_test.png" width="80%">
* index test
<img src="https://wonhee-clous.s3.ap-northeast-2.amazonaws.com/service_index_test.png" width="80%">
* document list
<img src="https://wonhee-clous.s3.ap-northeast-2.amazonaws.com/service_index_query.png" width="80%">
