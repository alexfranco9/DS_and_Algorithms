// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

// Time complexity = O(n^2)
// Space complexity = O(1) - constant

var twoSum = function(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                return [i, j];
            }
            else {
                return false;
            }
        }
    }  
};

console.log(twoSum([2,7,11,15], 9));

// Time complexity = O(n)
// Space complexity = O(n)

var twoSum2 = function(nums, target){
    const map = {};
    for(let i = 0; i < nums.length; i++){
        let value = nums[i];
        let complementPair = target - value;
        if(map[complementPair] !== undefined) {
            return [map[complementPair], i];
        } else {
            map[value] = i;
        }
    }
    return false;
};

console.log(twoSum2([2,7,11,15], 9));

var twoSum3 = function(nums, target){
    const map = {};
    for(let i = 0; i < nums.length; i++){
        if(map[target - nums[i]] !== undefined){
            return [map[target - nums[i]], i];
        } else {
            map[nums[i]] = i;
        }
    }
    return [];
};

console.log(twoSum3([2,7,11,15], 9));