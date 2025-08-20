function searchInsert(nums: number[], target: number): number {
    if (nums.indexOf(target)!==-1) return nums.indexOf(target);
    else {
      nums.push(target);
      nums.sort((a,b)=>a-b);
    }
    return nums.indexOf(target);
  }

  console.log(`Input: [1001], Output: ${searchInsert([1001],5)}`);