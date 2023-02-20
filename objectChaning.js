// Setup
const recordCollection = {
  2548: {
    albumTitle: 'Slippery When Wet',
    artist: 'Bon Jovi',
    tracks: ['Let It Rock', 'You Give Love a Bad Name']
  },
  2468: {
    albumTitle: '1999',
    artist: 'Prince',
    tracks: ['1999', 'Little Red Corvette']
  },
  1245: {
    artist: 'Robert Palmer',
    tracks: []
  },
  5439: {
    albumTitle: 'ABBA Gold'
  }
};
function updateRecords(records, id, prop, value) {
  if(prop!=="tracks" && value!==""){
    records[id][prop]=value
  }
 else if(prop==="tracks" && records[id].hasOwnProperty("tracks")===false){
    let arr=[]
    arr.push(value)
    records[id]["tracks"]=arr
  }
 else if(prop==="tracks" && value!==""){
    records[id][prop].push(value)
  }
  if(value===""){
delete records[id][prop]
  } 
  
  return records;
}

console.log(recordCollection)
updateRecords(recordCollection, 2468, "tracks", "Free")
console.log(recordCollection)




