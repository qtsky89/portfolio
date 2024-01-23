## Architecture
<img src="https://wonhee-devops.s3.ap-northeast-2.amazonaws.com/devops_architecture.png" width="80%">

## Summary
- **Situation**: Naver search engine team only offered a C++ library. To be more productive, I wanted to use other modern languages when making search logic that uses search engine's library.
- **Task**: Wrap Naver search engine library, so search developers can leverage modern languages like Golang.
- **Action**: Wrapped term extractor, synonym finder, and ebool parser. Changed automatic machine language type to Golang's slice and map. Set CI/CD pipeline. Maintained when new search engine features come out.
- **Result**: There was no significant performance drop when changing from C++ to Go. Developers could make their search logic twice as fast as C++. More than a hundred Naver search services adopted this library. I announced this result at 2020 Naver's Engineering Day workshop.
- **Tech Stack**: Swig, Golang, C++
- **Duration**: 2020.01.28 ~ present, 4 members

## Search logic that I'm in charge of
* Post Search
<img src="https://wonhee-devops.s3.ap-northeast-2.amazonaws.com/devops_post.png" width="80%">
* Mail Search
<img src="https://wonhee-devops.s3.ap-northeast-2.amazonaws.com/devops_post.png" width="80%">
* Dictionary Search
<img src="https://wonhee-devops.s3.ap-northeast-2.amazonaws.com/devops_dict.png" width="80%">
* Intellectual Search
<img src="https://wonhee-devops.s3.ap-northeast-2.amazonaws.com/devops_kin.png" width="80%">
* App Search
<img src="https://wonhee-devops.s3.ap-northeast-2.amazonaws.com/devops_app.png" width="80%">
