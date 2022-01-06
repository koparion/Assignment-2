let numbers = [10,32,341,3,1,6];
//1---------1-------------1-----------------1
  function justEl(element){
    return element;
  }
  // forEach() function
  function myEach(arr,cb)
  {
    //const forEach g= [];
      for(let i =0; i < arr.length; i++)
      {
       console.log(cb(arr[i]));
          //forEach.push(arr[i]);
        //return arr[i];
      }
   // return forEach;
  }
  //console.log(myEach(numbers));
  myEach(numbers,justEl);
//array [10,32,341,3,1,6]
//2---------2-------------2-----------------2
  function product(element)
  {
    return element*2;
  }
  // Map() function
  function myMap(num, cb)
  {
    const newArray = []
    for(let a of num)
      {
        //newArray.push(a);
       newArray.push(cb(a));
      }
    return newArray;
  }
  console.log(myMap(numbers,product));
//array [10,32,341,3,1,6]
//3---------3-------------3-----------------3
  function even(element)
    {
      return element%2;
    }
  // filter() function
  function myFilter(arr,callback)
  {
    const newArr = [];
    for(let i=0; i<arr.length; i++)
      {
        if(callback(arr[i])==0)
          {
            newArr.push(arr[i])
          } 
      }
    return newArr;
  }
  console.log(myFilter(numbers,even));
//array [10,32,341,3,1,6]
//4---------4-------------4-----------------4
  function odd (element) 
  {
    return element%2;
  }
  // some() function
  function mySome(arr,callback)
  {
    for(let a of arr)
      {
        if(callback(a) == 0)
          {
            return true;
          }
        else{return false;}
      }
  }
  console.log(mySome(numbers,odd));
//array [10,32,341,3,1,6]
//5---------5-------------5-----------------5
  function value(element)
  {
     return element>100;
  }
  // every() function
  function myEvery(arr,callback)
  {
  //   for(let a of arr)
    for(let i =0; i<arr.length; i++)
      { 
          if(callback[i])
          {
             return true;
          }
          else{return false;}
      }
  }
  console.log(myEvery(numbers,value));
//array [10,32,341,3,1,6]
//6---------6-------------6-----------------6
  function callBack(element)
  {
    return element;
  }
  function myReduce(arr, callback)
  {
   let sum = 0;
    for(let i = 0; i < arr.length; i++) 
      {
        sum+=callback(arr[i]);
      }
    return sum;
  }
  console.log(myReduce(numbers,callBack));
//array [10,32,341,3,1,6]
//7---------7-------------7-----------------7
// includes() function
  function myIncludes(arr,target)
  {
    for(let i = 0; i < arr.length; i++) 
      {
        if(target === arr[i])
          {
            return true;
          }
      }
    return false;
  }
  console.log(myIncludes(numbers,6));
//8---------8-------------8-----------------8
// indexOf() function
  function myIndexOf(arr, target)
  {
    for(let i = 0; i < arr.length; i++) 
      {
        //if((arr[i]) === arr[target])
        if(arr[i]===target)
          {
            return i;
          }
      }
    return -1;
  }
  console.log(myIndexOf(numbers,6));
//array [10,32,341,3,1,6]
//9---------9-------------9-----------------9
// push() function
  function myPush(arr, elementToAdd)
  {
    let newArray = [];
   // newArray = arr.concat(elementToAdd);
    newArray = [...arr,elementToAdd];
    return newArray;
  }
  console.log(myPush(numbers,700));
//10--------10------------10----------------
// lastIndexOf() function
  function myLastIndexOf(arr, target)
  {
    let start = -1;
    for(let i = 0; i < arr.length; i++) 
      {
        if(arr[i]===target)
        {
          start = i;
        }
      }
        return start;
  }
console.log(myLastIndexOf(numbers,6));
//array [10,32,341,3,1,6]
//11--------11------------11----------------
function grabKeys(){}





//12--------12------------12----------------
function grabValues(){}