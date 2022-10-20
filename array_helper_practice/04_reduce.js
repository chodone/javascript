const numbers = [10, 30, 40]
const r = numbers.reduce((acc, num)=>{return acc+num}, 100)
console.log(r)
// 100에서 시작하고 싶다면 {}끝에 ,100추가


// 1. 배열에 담긴 중복된 이름을 {'이름': 수} 형태의 object로 반환하세요.

const names = ['harry', 'aiden', 'julie', 'julie', 'edward']

// answer
const newObj = names.reduce((acc, name)=>{
  if (name in acc) {
    acc[name] += 1
  } 
  else{
    acc[name] = 1
  }
  return acc
}, {})

console.log(newObj)