## Architecture
<img src="https://wonhee-gosas.s3.ap-northeast-2.amazonaws.com/gosas_architecture.png" width="80%">


## Summary
- **Situation**: The Naver search engine team only provided a C++ library, but I aimed to enable development in modern languages like Golang to improve productivity.
- **Task**: Create a Golang wrapper for the Naver search engine library, allowing search developers to utilize Golang for search logic.
- **Action**: Wrapped key components, including the term extractor, synonym finder, and ebool parser, and adapted automatic machine language types to Golang slice and map structures. Set up a CI/CD pipeline and continue maintaining the library as new search engine features are released.
- **Result**: Achieved no significant performance drop when transitioning from C++ to Golang, allowing developers to create search logic twice as fast. Presented these results at Naver's Engineering Day workshop.
- **Tech Stack**: Swig, Golang, C++
- **Duration**: 2020.01.28 ~ present
- **Member**: 4

## Engineering day presentation
* Delivered a presentation on the topic of Go Search Library in 2020 Naver's Engineering Day workshop.
<img src="https://wonhee-gosas.s3.ap-northeast-2.amazonaws.com/gosas_engineeringday.png" width="80%">

## Performance compare (C++ vs Go)
* There is no significant performance drop between C++, Go.
<img src="https://wonhee-gosas.s3.ap-northeast-2.amazonaws.com/gosas_performance1.png" width="80%">
<img src="https://wonhee-gosas.s3.ap-northeast-2.amazonaws.com/gosas_performance2.png" width="80%">
