// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  console.log('obj at stringify.json,', obj);
  // your code goes here
  var result
  if(typeof obj === 'number'){
    result =  "" + obj + ""
    return result
  }
  if(obj === null){
    result =  `${null}`
    return result
  }
  if(obj === true){
    result = `${obj}`
    return result
  }
  if(obj === false){
    result = `${obj}`
    return result
  }
  if(realType(obj) === 'string'){
    result = `"${obj}"`
    return result
  }
  if(Array.isArray(obj)){
    result = `[`
    if(obj.length > 0){
      obj.forEach(function(ele){
        result += stringifyJSON(ele) + ','
      })
    }

    if(obj.length === 0){
      return `[]`
    }
    return result.slice(0, result.length -1) +`]`
  }

  if (realType(obj) === 'object') {

      if(Object.keys(obj).length === 0){
        return `{}`
      }
      if(Object.keys(obj).length > 0){

        result = `{`
        for(let i in obj) {
          if(obj[i] === undefined){
            return `{}`
          }
          result += stringifyJSON(i) + `:`
          result += stringifyJSON(obj[i]) + `,`

        }
        return result.slice(0,result.length-1) + `}`
      }



  }




};

function realType(value){
	return Object.prototype.toString.call(value).slice(8, -1).toLowerCase();
}
