# Problem 1: Sum of Positive Numbers - 2ქ
# Challenge:
#  Create a function that takes a list of numbers and returns the sum of all positive numbers.
# Instructions:
# Input: A list of integers (e.g., [1, -4, 7, 12]).
# Output: The sum of all positive integers in the list.
# Test Cases:
# assert problem_1_sum_of_positive([1, -4, 7, 12]) == 20
# assert problem_1_sum_of_positive([-1, -2, -3, -4]) == 0
# assert problem_1_sum_of_positive([]) == 0

def problem_1_sum_of_positive(list1):
    #ვქმნით ფუნქციას
    sum1 = 0
    #ვქმნით ცვლადს 
    for i in list1:
        #გადავუვლით სიას
        if i > 0:
            #თუ i მეტია 0-ზე (თუ i დადებითია)
            sum1 += i
            #sum1 = sum1 + i

    return sum1
#აბრუნებს sum1ს

print (problem_1_sum_of_positive([1, -4, 7, 12])) #20
print (problem_1_sum_of_positive([-1, -2, -3, -4])) #0
print (problem_1_sum_of_positive([])) #0