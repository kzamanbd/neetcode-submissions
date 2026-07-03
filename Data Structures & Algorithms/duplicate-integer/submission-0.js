class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const obj = {};
        for(let i = 0; i<nums.length; i++) {
            if (obj[nums[i]] > 1) {
                return true;
            }
            if (!obj[nums[i]]) {
                obj[nums[i]]=1;
            }
            obj[nums[i]]++;
        }
        return false;
    }
}
