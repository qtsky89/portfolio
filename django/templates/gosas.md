## Architecture
![gosas_architecture](https://wonhee-image.s3.ap-northeast-2.amazonaws.com/gosas_architecture.png)

## Summary
* Goal: Make golang search library using swig and C++ search library
* Tech: Swig, Golang, C++
* My part: Wrap C++ Search Library, Type change development, Performance test, Give presentation in workshop
* Develop Duration: 6 month + @

## Detail
My division are in charge of Search Application Server layer in Naver Search.
We chose C++ apache module programming to build a Search Application Server layer just because of the performance.
But nowadays there are tens of thousands of other options.
Whole search department wanted to not only keep the performance but also experience high productivity using modern language.
Search engine team only supported C++ library at that time so our team decided to wrap that library using swig.

## Result
![gosas_performance1](https://wonhee-image.s3.ap-northeast-2.amazonaws.com/gosas_performance1.png)
![gosas_performance2](https://wonhee-image.s3.ap-northeast-2.amazonaws.com/gosas_performance2.png)

We've proved our library use almost same system resource as original one.
More than a 20 + @ Naver services have adopted Golang Search Library.
(ex. Post Search, Review Search, Used Shopping Search, Help Search, Autocar Search, News Library Search, Uplus Search, Global News Search, Cloud Search, Art Search ...)
Gave presentation in formal company workshop three times and got nice result. (Engineering Day 2020, N-innovation 2020, [Deview 2020](https://deview.kr/2020/sessions/379))
