function getWorthyWorkers(array = []) {
  let result = []
  
  for (let i = 0; i < array.length; i = i + 1) {
    if (array[i].salary > 1000) {
      result.push(array[i].name)  
    }
  }

  return result;
}

const workers = [ 
    {"name":"John","salary":500}, 
    {"name":"Mike","salary":1300}, 
    {"name":"Linda","salary":1500}
  ];
  
  console.log(getWorthyWorkers(workers)) 
  

