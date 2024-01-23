## Architecture
<img src="https://wonhee-clous.s3.ap-northeast-2.amazonaws.com/clous_architecture.png" width="80%">

## Summary
- **Situation**: Naver search developers used physical servers to run search logic. Managing actions such as restoring failed servers, modifying replication, and adjusting server specifications demands a significant investment of time and energy.
- **Task**: Make a platform that can make and run search service. And migrate from the old platform to the new one.
- **Action**: As a fullstack engineer, developed various pages. (service create, service list, Helmchart management, node management, server setting, manager setting, LB setting, K8S event monitor) And settled CI/CD pipeline.
- **Result**: Released v1.0.0 in 2023.10. And developed various feedback features. Currently 5 search services work as the production mode. More than 200 Naver search services will be migrated shortly. Cut every search developer's time by half because they don't have to submit form to get a new server or set up logging and monitoring system. Saved 30% of server costs by efficiency of cloud system.
- **Tech Stack**: Kubernetes, Helmchart, Gin, Vue.js, GraphQL, MariaDB, Quasar, ArgoCD. Github action, Cypress.
- **Duration**: 2017.04 ~ present, 15 members

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
