## Architecture
<img src="https://wonhee-gosas.s3.ap-northeast-2.amazonaws.com/gosas_architecture.png" width="80%">


## Summary
- **Situation**: Naver search engine team only offers C++ library. I wanted to use other modern languages when making search logic for productivity.
- **Task**: Wrap Naver search engine library, so search developers can leverage modern languages like Go lang.
- **Action**: Wrapped term extractor, synonym finder, ebool parser part. Changed automatic machine language type to Golang slice, map. Set CI/CD pipeline. Keep maintained when new search engine feature comes out.
- **Result**: There is no significant performance drop when changing from C++ to Go. And developers can make their search logic 2 times faster compared to C++. More than a hundred of Naver search service adopted this library. I announced that result in 2020 Naver's Engineering Day workshop.
- **Tech Stack**: Swig, Golang, C++
- **Duration**: 4 member, 1 yr+

## Engineering day presentation
* Delivered a presentation on the topic of Go Search Library in 2020 Naver's Engineering Day workshop.
<img src="https://wonhee-gosas.s3.ap-northeast-2.amazonaws.com/gosas_engineeringday.png" width="80%">

## Performance compare (C++ vs Go)
* There is no significant performance drop between C++, Go.
<img src="https://wonhee-gosas.s3.ap-northeast-2.amazonaws.com/gosas_performance1.png" width="80%">
<img src="https://wonhee-gosas.s3.ap-northeast-2.amazonaws.com/gosas_performance2.png" width="80%">
