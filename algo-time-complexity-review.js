/////////// Prompt 1 ///////////
/////////// time complexity: O(n)
//(1+1)n + 1 + 1
function findMax(array){
  var max = -Infinity;// 1
  for (var i = 0; i < array.length; i++){ // n
    if (array[i] > max){ // 1
      max = array[i]; // 1
    }
  }
  return max; // 1
}


/////////// Prompt 2 ///////////
/////////// time complexity: O(n)
function contains(array, target){
  return array.indexOf(target) > -1;
}


/////////// Prompt 3 ///////////
/////////// time complexity: O(n)
function partialContains(array, target, start){
  return array.slice(start).indexOf(target) > -1;
}


/////////// Prompt 4 ///////////
/////////// time complexity: O(1)
function square(array){
  for (var i = 0; i < 3; i++){
    array[i] = array[i] * array[i];
  }
  return array;
}

/////////// Prompt 5 ///////////
/////////// time complexity: O(n)
function repeat(array){
  var repeat = [];
  for (var j = 0; j < 10; j++){
    repeat[j] = [];
    for (var i = 0; i < array.length; i++){
      repeat[j].push(array[i]);
    }
  }
  return repeat;
}
//what if we replace 10 with a parameter? O(n^2) quadratic


/////////// Prompt 6 ///////////
/////////// time complexity: O(n)
function gcf(num1, num2){
  if (num1 > num2){ //this ensures num1 is the smaller number
    var temp = num1;
    num1 = num2;
    num2 = temp;
  }
  for (var i = num1; i > 1; i--){
    if (num1 % i === 0 && num2 % i === 0){
      return i;
    }
  }
  return 1;
}


/////////// Prompt 7 ///////////
/////////// time complexity: O(n^2)
function countChar(string){
  var counts = {};
  var currChar, currCharCount;
  for (var i = 0; i < string.length; i++){
    currChar = string[i];
    currCharCount = 1;
    for (var j = i+1; j < string.length; j++){
      if (currChar === string[j]){
        currCharCount++;
      }
    }
    if (!counts.hasOwnProperty(currChar)){
      counts[currChar] = currCharCount;
    }
  }
  return counts;
}


/////////// Prompt 8 ///////////
/////////// time complexity: O(n)
var factorial = function(num){
  if (num < 0){
    return;
  }
  if (num === 0 || num === 1){
    return 1;
  } else {
    return num * factorial(num-1); // like a reverse for loop
  }
}


/////////// Prompt 9 ///////////
/////////// time complexity: O(logn) log base 3 of n
function tournament(players){
  var results;
  if (players.length < 3){
    return players[0];
  } else {
    results = hotPotato(players); // constant time, divide # of players by 3 each time
    //assume hotPotato is a function where sets of
    //three players are teleported simultaneously
    //to a room with a potato. at the end of 5 minutes,
    //the player in each room holding the potato is the winner
    //and all winners get teleported to the results array
    return tournament(results); // log(n)
  }
}



/////////// Prompt 10 ///////////
/////////// time complexity: O(c^n) exponential
function allPasswords(allowedChars, maxLength){
  var results = [];

  function findPassword(currentAttempt){
    if (currentAttempt.length > 0){ // 1
      results.push(currentAttempt.join("")); // 1
    }
    if (currentAttempt.length <= maxLength){ // 1
      for (var i = 0; i < allowedChars.length; i++){ // n
        findPassword(currentAttempt.concat(allowedChars[i])); // c^n
      }
    }
  }

  findPassword([]);
  return results;
}


/////////// Prompt 11 ///////////
/////////// time complexity: O(logn) because you eliminate other possibilities each time you divide by four. base 4 because we divide by 4 each time
function findColor(quadTree, coordinates){
  //a quad tree is a tree where each node has 4 children
  //or no children, usually used to divide a two-dimensional
  //space into coordinates
  //coordinates is an array [xpos, ypos]

  if (!Array.isArray(quadTree.color)){
    return quadTree.color;
  } else {
    var quadrant = findQuadrant(quadTree, coordinates);
    if (quadrant === "NE") {
      return findColor(quadTree.color[0], coordinates);
    }
    if (quadrant === "SE") {
      return findColor(quadTree.color[1], coordinates);
    }
    if (quadrant === "SW") {
      return findColor(quadTree.color[2], coordinates);
    }
    if (quadrant === "NW") {
      return findColor(quadTree.color[3], coordinates);
    }
  }

  function findQuadrant(quadTree, coordinates){
    var y = (quadTree.coordinates.top + quadTree.coordinates.bottom)/2;
    var x = (quadTree.coordinates.left + quadTree.coordinates.right)/2;
    if (coordinates[0] > x){
      if (coordinates[1] > y){
        return "NE";
      } else {
        return "SE";
      }
    } else {
      if (coordinates[1] > y){
        return "NW";
      } else {
        return "SW";
      }
    }
  }
}



/////////// Bonus! ///////////
/////////// time complexity: O(n) because n is higher than log(n)
//this will require some math to determine

function tournamentRedux(players){
  var results;
  if (players.length < 3){
    return players[0];
  } else {
    for (i = 0; i < players.length; i = i + 3){ // n/3
      results.push(hotPotato([players[i], players[i+1], players[i+2]]));
      //assume hotPotato is a function where
      //the three players at a time must play hot potato for 5 minutes.
      //the player in the room holding the potato is the winner
      //and gets returned from the function
    }
    return tournament(results); // log(n)
  }
}







