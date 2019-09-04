// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className
) {
  // your code here
  var all = document.getElementsByTagName("*")
  var result = []
  for(var i = 0; i < all.length; i++){
    if($(all[i]).hasClass(className)){
      console.log(all[i])
      result.push(all[i])
    }
  }
  return result
};
