# TypeScript Object Comparison Bug

This repository demonstrates a common bug in TypeScript when comparing objects: the incorrect handling of key order and nested objects.

## Bug Description

The provided TypeScript function `compareObjects` aims to compare two objects for equality. However, it has two key flaws:

1. **Key Order Sensitivity:** The function returns `false` if the objects have the same key-value pairs but in a different order.
2. **Nested Object Handling:** The function doesn't recursively compare nested objects, leading to incorrect comparisons when nested objects are involved.

## Solution

A corrected version of the function is provided in `bugSolution.ts`, which addresses both issues. The solution uses JSON.stringify to ensure order-insensitive comparison and recursively compares nested objects.

## How to Run

1. Clone this repository.
2. Run `tsc bug.ts` to compile the buggy code.
3. Run `tsc bugSolution.ts` to compile the corrected code.
4. Execute the compiled JavaScript files to observe the different behavior.