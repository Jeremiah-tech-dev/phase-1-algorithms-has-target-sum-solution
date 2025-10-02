function hasTargetSum(array, target) {
  const seenNumbers = new Set();

  for (const num of array) {
    const complement = target - num;
    if (seenNumbers.has(complement)) {
      return true;
    }
    seenNumbers.add(num);
  }

  return false;
}

/* 
  Time Complexity: O(n)
  The function iterates through the input array once. For each element, it performs a constant time operation (a lookup and an insertion in the Set). Therefore, the time complexity is linear with respect to the number of elements in the array.

  Space Complexity: O(n)
  In the worst-case scenario, we might store every element from the array in the `seenNumbers` Set if no pair is found until the end, or if no pair exists at all. This results in a space complexity that is linear with respect to the input array size.
*/

/* 
  1. Initialize an empty Set called `seenNumbers` to store the numbers we have encountered so far.
  2. Iterate through each `num` in the input `array`.
  3. For each `num`, calculate its `complement` by subtracting it from the `target` (i.e., `complement = target - num`).
  4. Check if the `seenNumbers` Set already contains the `complement`.
     a. If it does, it means we have found two numbers that sum up to the target. Return `true`.
  5. If the complement is not in the set, add the current `num` to the `seenNumbers` Set to record that we've seen it.
  6. If the loop finishes without finding a pair, it means no two numbers in the array sum to the target. Return `false`.
*/

/*
  This solution efficiently determines if a pair of numbers summing to the target exists. It uses a JavaScript `Set` for quick lookups, which is the key to its performance.

  We loop through the input array one element at a time. For each number, we calculate the "complement" we would need to find to reach the target sum. For example, if the target is 10 and the current number is 3, the complement is 7.

  We then check if this complement value is already in our `seenNumbers` set. If it is, we've successfully found a pair and can immediately return `true`.

  If the complement isn't in the set, we add the current number to the `seenNumbers` set. This way, in a future iteration, if we encounter a number that needs the current number as its complement, we'll find it.

  If we get all the way through the array without finding a matching pair, the function returns `false`. This single-pass approach gives us a time complexity of O(n).
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
