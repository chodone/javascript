// 1번
const nums = [1,2,3,4,5,6,7,8]

for (let i = 0; i < nums.length; i++) {
  console.log()
}

// for (const i = 0; i < nums.length; i++) {
//                                     ^

// TypeError: Assignment to constant variable.

//  i를 const를 선언했기 떄문에 재할당이 불가능하다 따라서 i를 let으로 선언하여 재할당을 가능하도록 한다

// 2번
for (num of nums) {
  console.log(num, typeof num)
}

// 0 string
// 1 string
// 2 string
// 3 string
// 4 string
// 5 string
// 6 string
// 7 string

// for in 은 '속성 이름'을 통해 반복하고 for of는 '속성 값'을 통해 반복하므로 따라서 for of를 통해 반복해야 number를 출력할 수 있다