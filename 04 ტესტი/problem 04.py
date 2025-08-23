# Problem 4: Longest Substring Without Repeating Characters - 5ქ
# Challenge:
#  Create a function that finds the length of the longest substring without repeating characters.
# Instructions:
# Input: A string (e.g., "abcabcbb").
# Output: An integer representing the length of the longest substring (e.g., 3 for "abc").
# Test Cases:
# assert longest_unique_substring("abcabcbb") == 3
# assert longest_unique_substring("bbbbb") == 1
# assert longest_unique_substring("") == 0
# assert longest_unique_substring("pwwkew") == 3

def longest_unique_substring(str1):
    #ცქმნით ფუნქციას
    max = 0
    #ვქმნით max ს
    seen = ""
    # ვქმნით seenს
    for i in str1:
        # გადავუაროთ სტრინგს
        if i not in seen:
            # თუ არ არის seenში 
            seen += i
            # seenს დავუმატოთ ეს ასო
            max += 1
            # maxს დავუმატოთ ერთი
        else:
            # სხვა შემთხვევაში
            max = 0
            # max = 0
            seen = ""
            # seen ცარიელია
    return max
# აბრუნებს maxს

print (longest_unique_substring("abcabcbb")) #3
print (longest_unique_substring("bbbbb")) #1
print (longest_unique_substring("")) #0
print (longest_unique_substring("pwwkew")) #3