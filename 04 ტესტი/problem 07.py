# Problem 7: 3Sum Problem - 8ქ
# Challenge:
#  Find all unique triplets in an array that sum up to zero.
# Instructions:
# Input: A list of integers (e.g., [-1, 0, 1, 2, -1, -4]).
# Output: A list of unique triplets that sum to zero.
# Test Cases:
# assert three_sum([-1, 0, 1, 2, -1, -4]) == [[-1, -1, 2], [-1, 0, 1]]
# assert three_sum([0, 0, 0]) == [[0, 0, 0]]
# assert three_sum([1, 2, -2, -1]) == []

def three_sum(list0):
    # ვქმნით ფუნქციას
    list1 = []
    # ვქმნით ცარიელ ლისტს
    list2 = []
    # ვქმნით ცარიელ ლისტს
    if len (list0) != 6:
        # თუ არ არის 6 ელემენტი
        return []
    # დააბრუნოს ცარიელი ლისტი

print(three_sum([-1, 0, 1, 2, -1, -4])) #[[-1, -1, 2], [-1, 0, 1]]
print(three_sum([0, 0, 0])) #[[0, 0, 0]]
print(three_sum([1, 2, -2, -1])) #[]