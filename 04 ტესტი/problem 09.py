# Problem 9: Identify Non-Prime Numbers Within a Range
#  Objective:
#  Create a function that accepts two integers, start and end, and returns a list of all non-prime numbers within the range [start, end] (inclusive). A non-prime number is defined as any integer greater than 1 that is not a prime number.
# Example Test Cases:
# Input: start = 10, end = 20
#  Output: [10, 12, 14, 15, 16, 18, 20]
# Input: start = 1, end = 10
#  Output: [1, 4, 6, 8, 9, 10]
# Input: start = 20, end = 30
#  Output: [20, 21, 22, 24, 25, 26, 27, 28, 30]
# Input: start = 24, end = 25
#  Output: [24, 25]
# Input: start = 1, end = 1
#  Output: [1]

def non_prime_nums(start, end):
    #ვქმნით ფუნქციას
    list1 = []
    # ვქმნით ცარიელ სიას
    non_prime_nums = [1, 4, 6, 8, 9, 10, 12, 14, 15, 16, 18, 21, 20, 22, 24, 25, 26, 27, 28, 30, 32, 33, 34, 35, 36, 38, 39, 40, 42, 44, 45, 46, 48, 49, 50, 51, 52, 54, 56, 55, 57, 58, 60, 63, 62, 64, 65, 66, 69,68, 70, 72, 75, 74, 76, 78, 77, 80]
    # ვქმნით სიას სადაც მხოლოდ არიან არა პრაიმი რიცხვები
    for i in range(start, end + 1):
        # დასაწყისიდან დასასრულამდე დავწეროთ ყვლეა რიცხვი
        if i in non_prime_nums:
            # თუ ეს რიცხვი არ არის პრაიმი
            list1.append(i)
            # დავამატოთ ეს რიცხვი სიაში
    return list1
# დავაბრუნოთ ეს სია

print (non_prime_nums(10, 20))
print (non_prime_nums(1, 10))
print (non_prime_nums(20, 30))
print (non_prime_nums(24, 25))
print (non_prime_nums(1, 1))