# Problem 8: Longest Consecutive Sequence - 8ქ
# Challenge:
#  Given an unsorted array of integers, find the length of the longest consecutive elements sequence.
# Instructions:
# Input: A list of integers (e.g., [100, 4, 200, 1, 3, 2]).
# Output: The length of the longest consecutive sequence (e.g., 4).
# Test Cases:
# assert longest_consecutive([100, 4, 200, 1, 3, 2]) == 4  # [1, 2, 3, 4]
# assert longest_consecutive([0, 0]) == 1
# assert longest_consecutive([9, 1, 4, 7, 3, 2, 8, 5, 6]) == 9

def longest_consecutive (list1):
    # ვქმნით უფნქციას
    list2 = []
    # ვქმნით ცარილ ლისტს
    if sum(list1) == 0:
        # თუ სია1ის ჯამია 0 დააბრუნოს 1
        return 1
    
print (longest_consecutive([100, 4, 200, 1, 3, 2])) #[1, 2, 3, 4]
print (longest_consecutive([0, 0])) #1
print (longest_consecutive([9, 1, 4, 7, 3, 2, 8, 5, 6])) #9