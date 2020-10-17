def mergeArrays(arr1, arr2):

    arr1.extend(arr2)
    arr1.sort()
    return arr1


print(mergeArrays([], []))
print(mergeArrays([], [7, 8, 9]))
print(mergeArrays([10, 11, 12], []))
print(mergeArrays([12, 14, 16], [11, 13, 17]))
print(mergeArrays([22, 24, 26, 28], [21, 27]))
