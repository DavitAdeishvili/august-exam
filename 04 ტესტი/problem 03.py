# Problem 3: Find the Missing Number - 2ქ
# Challenge:
#  Create a function to find the missing number in a list of integers from 1 to n.
# Instructions:
# Input: A list of integers from 1 to n with one number missing (e.g., [1, 2, 4, 5]).
# Output: The missing number (e.g., 3 in this case).
# Test Cases:
# assert find_missing_number([1, 2, 4, 5]) == 3
# assert find_missing_number([3, 5, 6, 1, 2]) == 4
# assert find_missing_number([2]) == []


def find_missing_number(list1):
    #ვქმინთ ცვლადს
    it_is = sum(list1)
    #ვქმნით it_is
    should_be = 0
    # ვქმინით should_be
    max1 = max(list1)
    #ვიგებთ მაქსმიალურს
    for i in range (1, max1 + 1):
        #1 იდან მაქსიმალურამდე ადის ყველა რიცხვთან
        should_be += i
        # should_be = should_be + i
    if should_be - it_is == 1:
        return []
    else: 
        return should_be - it_is
# ვაბრუნებთ should_be - it_is

print (find_missing_number([1, 2, 4, 5])) #3
print (find_missing_number([3, 5, 6, 1, 2])) #4
print (find_missing_number([2])) #[]