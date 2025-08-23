# Problem 5: Check if Two Strings are Anagrams - 5ქ
# Challenge:
#  Write a function to check if two strings are anagrams (contain the same characters in the same frequency).
# Instructions:
# Input: Two strings (e.g., "listen" and "silent").
# Output: A boolean (True or False) indicating if the strings are anagrams.
# Test Cases:
# assert are_anagrams("listen", "silent") == True
# assert are_anagrams("hello", "world") == False
# assert are_anagrams("triangle", "integral") == True

def are_anagrams(str1, str2):
    # ვქმნით ფუნქციას
    return sorted(str1) == sorted(str2)
# ვალაგებთ ორივე სტრინგს და ვადარებთ ერთმანეთს


print (are_anagrams("listen", "silent")) #True
print (are_anagrams("hello", "world")) #False
print (are_anagrams("triangle", "integral")) #True