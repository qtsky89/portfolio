## Architecture
<img src="https://wonhee-clous.s3.ap-northeast-2.amazonaws.com/clous_architecture.png" width="80%">

## Summary
- **Situation**: Naver search developers used physical server to serve search logic. When they operate like restoring failed server, it took lots of time and energy to do that.
- **Task**: Make platform that can make and operate search service easily. And migrate from old platform's service to new one.
- **Action**: As a fullstack engineer, developed service create, service list, Helmchart management, node management, server setting, manager setting, LB setting, K8S event monitor. And settled CI/CD pipeline.
- **Result**: Released v1.0.0 in 2023.10. And developed lots of feedback features since then. Currently 5 search service work as the production mode. Other Naver search services, that more than 200, will be migrated in no time. Saved half of every search developer's time because they don't have to operate their service like submitting form to get a new server or setting up logging and monitoring system. And saved 30% of server costs, because user don't have to use another physical machine when server serves different role.
- **Tech Stack**: Kubernetes, Helmchart, Gin, Vue.js, GraphQL, MariaDB, Quasar, ArgoCD. Github action, Cypress.
- **Duration**: 10 member, 2yr ~ present

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
