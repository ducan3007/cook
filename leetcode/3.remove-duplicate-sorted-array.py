from typing import List


class Solution:
    def removeDuplicates(self, nums: List[int]) -> int:
        """
        [0,0,1,1,1,2,2,3,3,4]

        """
        i = 0 # position of unique elements

        for j in range(1, len(nums)):
            if nums[j] != nums[i]:
                nums[i + 1] = nums[j]
                i += 1

        return i + 1

# Test cases
solution = Solution()
nums = [1, 2, 3]
print(solution.removeDuplicates(nums))  # 2
print(nums)
