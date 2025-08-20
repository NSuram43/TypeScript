function zeroFilledSubarray(nums: number[]): number {
    let totalSubarrays = 0;
    let consecutiveZeros = 0;

    for (const num of nums) {
        if (num === 0) {
          
            consecutiveZeros++;
            totalSubarrays += consecutiveZeros;
        } else {
            consecutiveZeros = 0;
        }
    }
    
    return totalSubarrays;
};