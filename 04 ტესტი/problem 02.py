# Problem 2: Sum of Positive Numbers with Flooring - 2ქ
# Challenge:
#  Create a function that takes a list of numbers, including fractions, and returns the sum of all positive numbers, floored to the nearest integer.
# Instructions:
# Input: A list of numbers, which may include fractions (e.g., [1, -4, 7, 12] or [-1.5, 2.7, -3.3, 4.8]).
# Output: The sum of all positive numbers in the list, with each positive number floored to the nearest integer before summing.
# Test Cases:
# assert problem_2_sum_of_positive([1, -4, 7, 12]) == 20
# assert problem_2_sum_of_positive([-1.5, 2.7, -3.3, 4.8]) == 6  # floor(2.7) + floor(4.8) = 6
# assert problem_2_sum_of_positive([]) == 0
# assert problem_2_sum_of_positive([-1, -2, -3]) == 0

import math
# მათემატიკის ბიბლიოთეკის დაიმპორტება

def problem_2_sum_of_positive(list1):
    #ვქმნით ფუნქციას
    sum1 = 0
    #ვქმნით ცვლადს 
    for i in list1:
    #გადავუვლით სიას
        if i > 0:
        #თუ i მეტია 0-ზე (თუ i დადებითია)
            sum1 += math.floor(i)
            #sum1 = sum1 + i და ვამრგვალებთ
    return sum1
#აბრუნებს sum1ს


print (problem_2_sum_of_positive([1, -4, 7, 12])) #20
print (problem_2_sum_of_positive([-1.5, 2.7, -3.3, 4.8])) #6
print (problem_2_sum_of_positive([])) #0
print (problem_2_sum_of_positive([-1, -2, -3])) #0