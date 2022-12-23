var setData = {};

//////////////////////////////////////////////  HELPER FUNCTION

////// SOURCE: https://stackoverflow.com/questions/9960908/permutations-in-javascript
function permutator(inputArr) {
  var results = [];
  function permute(arr, memo) {
    var cur, memo = memo || [];

    for (var i = 0; i < arr.length; i++) {
      cur = arr.splice(i, 1);
      if (arr.length === 0) {
        results.push(memo.concat(cur));
      }
      permute(arr.slice(), memo.concat(cur));
      arr.splice(i, 0, cur[0]);
    }
    return results;
  }
  return permute(inputArr);
}


//////////////////////////////////////////////

function findEqualContent(shorterArr, longerArr){
  setData.arr2 = longerArr;
  var output = shorterArr.filter(eq);
  return output;
}

function eq(ar){
  var res = false;
  var permutationArr = setData.arr2;
  permutationArr.forEach(function(item){
    var tempArr = permutator(item);
    tempArr.forEach(function (temp){
      if (temp.toString().slice(0, (ar.toString().length)) == ar.toString()){
        res = true;
      }
    });
  });
  return res;
}

//////////////////////////////////////////////

function findNotEqualContent(shorterArr, longerArr){
  setData.arr2 = longerArr;
  var output = shorterArr.filter(neq);
  return output;
}

function neq(ar){
  var res = true;
  var permutationArr = setData.arr2;
  permutationArr.forEach(function(item){
    var tempArr = permutator(item);
    tempArr.forEach(function (temp){
      if (temp.toString().slice(0, (ar.toString().length)) == ar.toString()){
        res = false;
      }
    });
  });
  return res;
}

//////////////////////////////////////////////

function findEqualContentRowNumbers(shorterArr, longerArr){
  var output = [];
  for (var i = 0; i < shorterArr.length; i++ ){
      longerArr.forEach(function(item){
        var tempArr = permutator(item);
        tempArr.forEach(function (temp){
          if (temp.toString().slice(0, (shorterArr[i].toString().length)) == shorterArr[i].toString()){
            output.push(i+1);
          }
        });
    });
  }
  var output2 = output.filter((item, index) => output.indexOf(item) === index);
  return output2;
}

//////////////////////////////////////////////

function findNotEqualContentRowNumbers(shorterArr, longerArr){
  var output = Array.from(Array(shorterArr.length+1).keys()).slice(1);
  var output2 = [];
  var output3 = [];
  for (var i = 0; i < shorterArr.length; i++ ){
      longerArr.forEach(function(item){
        var tempArr = permutator(item);
        tempArr.forEach(function (temp){
          if (temp.toString().slice(0, (shorterArr[i].toString().length)) == shorterArr[i].toString()){
            output2.push(i+1);
          }
        });
    });
  }
  output.forEach(function(item){
    if (!output2.includes(item)){
      output3.push(item);
    }
  });
  return output3;
}

//////////////////////////////////////////////
