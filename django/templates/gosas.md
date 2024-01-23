## Architecture
<img src="https://wonhee-gosas.s3.ap-northeast-2.amazonaws.com/gosas_architecture.png" width="80%">


## Summary
- **Situation**: Naver search engine team only offered a C++ library. To be more productive, I wanted to use other modern languages when making search logic that uses search engine's library.
- **Task**: Wrap Naver search engine library, so search developers can leverage modern languages like Golang.
- **Action**: Wrapped term extractor, synonym finder, and ebool parser. Changed automatic machine language type to Golang's slice and map. Set CI/CD pipeline. Maintained when new search engine features come out.
- **Result**: There was no significant performance drop when changing from C++ to Go. Developers could make their search logic twice as fast as C++. More than a hundred Naver search services adopted this library. I announced this result at 2020 Naver's Engineering Day workshop.
- **Tech Stack**: Swig, Golang, C++
- **Duration**: 2020.01.28 ~ present, 4 members

## Engineering day presentation
* Delivered a presentation on the topic of Go Search Library in 2020 Naver's Engineering Day workshop.
<img src="https://wonhee-gosas.s3.ap-northeast-2.amazonaws.com/gosas_engineeringday.png" width="80%">

## Performance compare (C++ vs Go)
* There is no significant performance drop between C++, Go.
<img src="https://wonhee-gosas.s3.ap-northeast-2.amazonaws.com/gosas_performance1.png" width="80%">
<img src="https://wonhee-gosas.s3.ap-northeast-2.amazonaws.com/gosas_performance2.png" width="80%">
