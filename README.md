# Subtle Bug in JavaScript Function with Loose Comparison

This repository demonstrates a common, yet subtle bug in JavaScript related to loose comparison and type coercion. The bug is present in the `foo()` function, which unexpectedly returns `null` when either of its arguments is `null`, even if the other is a number.

## Bug Description
The `foo()` function is designed to return `null` only when *both* arguments are `null`. However, due to the use of loose comparison (`==`), type coercion leads to unexpected behavior.  When one argument is `null` and the other is a number, the loose comparison evaluates to true (null == 0 is true), resulting in the function returning `null`.

## Solution
The solution involves replacing the loose comparison (`==`) with strict equality (`===`). Strict equality does not perform type coercion, and therefore resolves the issue. 