def my_max(nums):        
    nums.sort()
    return('largest number: ',nums[-1])


def my_max_even(nums):
    even = []
    
    for num in nums:
        if num % 2 == 0:
            even.append(num)
    return('largest even number: ',even[-1])


#Bubble Sort
def bubble_sort(numbers):
    n = len(numbers)
    for i in range(n):
        # Last i element is already in place.
        for j in range(n-i-1):  
            # Swap adjacent elements if in wrong order.
            if numbers[j] > numbers[j+1]:  
                numbers[j], numbers[j+1] = numbers[j+1], numbers[j]
    return numbers


def main():
    numbers = [5, 2, 8, 1, 3, 15]
    max_number = my_max(numbers)
    max_number_even=my_max_even(numbers)
    sorted_numbers = bubble_sort(numbers)
    print(sorted_numbers)
    print(max_number) 
    print(max_number_even) 

    
main()