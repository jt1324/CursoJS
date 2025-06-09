let friend = {name: 'Jose', 
  Gender: 'M', 
  weight: 85.4, 
  getWeight(p=0) {
  console.log('got fat')
  this.weight += p
}}

friend.getWeight(2)
console.log(`${friend.name} weighs ${friend.weight}kg`)