let map = new Map();

map.set("name", "Ali");
map.set(1, "number key");
map.set(true, "boolean key");

console.log(map.get("name"))
console.log(map.size)

for (let [key, value] of map){
  console.log(`${key} => ${value}`);
}