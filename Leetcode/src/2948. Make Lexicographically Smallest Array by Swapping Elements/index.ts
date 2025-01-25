function lexicographicallySmallestArray(
  nums: number[],
  limit: number
): number[] {
  const n: number = nums.length;

  // Create an array of indices and sort them by their corresponding values in nums
  const sortedIndices: number[] = Array.from(
    { length: n },
    (_, index) => index
  );
  sortedIndices.sort((a, b) => nums[a] - nums[b]);

  // Initialize the result array
  const result: number[] = Array(n).fill(0);

  // Process each group of indices with values within the "limit" difference
  let groupStart: number = 0;
  while (groupStart < n) {
    let groupEnd: number = groupStart + 1;

    // Expand the group while the difference between consecutive values is <= limit
    while (
      groupEnd < n &&
      nums[sortedIndices[groupEnd]] - nums[sortedIndices[groupEnd - 1]] <= limit
    ) {
      groupEnd++;
    }

    // Extract and sort the current group of indices
    const groupIndices: number[] = sortedIndices
      .slice(groupStart, groupEnd)
      .sort((a, b) => a - b);

    // Sort the values of the group and place them into the result array
    const sortedValues: number[] = groupIndices
      .map((index) => nums[index])
      .sort((a, b) => a - b);

    // Write the sorted values back to the result array
    for (let i = 0; i < groupIndices.length; i++) {
      result[groupIndices[i]] = sortedValues[i];
    }

    // Move to the next group
    groupStart = groupEnd;
  }

  return result;
}

// Example usage

const nums1 = [1, 5, 3, 9, 8];
const limit1 = 2;
console.log(lexicographicallySmallestArray(nums1, limit1)); // [1,3,5,8,9]

const nums2 = [1, 7, 6, 18, 2, 1];
const limit2 = 3;
console.log(lexicographicallySmallestArray(nums2, limit2)); // [1,6,7,18,1,2]
