# Filtering an Array
----------------------------------------------------------------------------------------------------------------
The method in the file 0-array-filter.js filters an array given the
following as input:
* an integer array, arr
* a filtering function, fn

fn takes one or two arguments as input:
* an array element arr[i]
* an index, i of arr[i]

The return value is a filtered array which should contain values
for which fn is truthy/ returns true.

The function is implemented without using the array.filter method

# Solution
---------------------------------------------------------------------

## step1
Create a new array, **newArray**, that will hold values for which fn will be truthy

## step2
Traverse(iterate) through the original array, arr, ensuring that the array elements satisfy the following condition:   
 If fn is truthy/evaluates to true:   
    add the **arr** elements to **newArray**, created in step 1

## step 3
Return the new array, **newArray**

-----------------------------------------------------------------