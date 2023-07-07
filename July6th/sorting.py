def my_max(nums):        
    nums.sort()
    return('largest number: ',nums[-1])


def my_max_even(nums):
    even = []
    
    for num in nums:
        if num % 2 == 0:
            even.append(num)
    return('largest even number: ',even[-1])

def main():
    numbers = [5, 2, 8, 1, 3, 15]
    max_number = my_max(numbers)
    max_number_even=my_max_even(numbers)
    print(max_number) 
    print(max_number_even) 

    
main()