from typing import List


class Solution:
    def merge(self, nums1: List[int], m: int, nums2: List[int], n: int) -> None:
        """
        https://leetcode.com/problems/merge-sorted-array/description/?envType=study-plan-v2&envId=top-interview-150
        
        Do not return anything, modify nums1 in-place instead.
        Solutions:

        Explanation
        The merge method modifies nums1 in place without returning anything.
        It merges nums1 and nums2 by comparing elements from the end, ensuring the merged list is sorted without using additional space.
        Finally, if there are any remaining elements in nums2 after m becomes zero, they are copied to nums1 to complete the merge.
        
        Example

        Input: nums1 = [3,5,7,0,0,0], m = 3, 
               nums2 = [2,4,6],       n = 3
        Output: [2,3,4,5,6,7]
        
        
        

        """

        while m > 0 and n > 0:
            if nums1[m - 1] > nums2[n - 1]:
                nums1[m + n - 1] = nums1[m - 1]
                m -= 1
            else:
                nums1[m + n - 1] = nums2[n - 1]
                n -= 1

        while n > 0:
            nums1[n - 1] = nums2[n - 1]
            n -= 1


test = Solution()
print(test.merge([2, 3, 4, 0, 0, 0], 3, [1, 2, 6], 3))
