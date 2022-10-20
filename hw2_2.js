for (let i = 0; i < 5; i++){
  for (let j = 0; j < 4-i+(i*2+1); j++){
    if (j < 4-i) {process.stdout.write(' ')}
    else {process.stdout.write('*')}
  }console.log()
  }