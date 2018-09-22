/*
 Description:
 Write a function called sumIntervals/sum_intervals() that accepts an array of intervals, and returns the sum of all the interval lengths. Overlapping intervals should only be counted once.

 Intervals
 Intervals are represented by a pair of integers in the form of an array. The first value of the interval will always be less than the second value. Interval example: [1, 5] is an interval from 1 to 5. The length of this interval is 4.

 Overlapping Intervals
 List containing overlapping intervals:

 [
 [1,4],
 [7, 10],
 [3, 5]
 ]
 The sum of the lengths of these intervals is 7. Since [1, 4] and [3, 5] overlap, we can treat the interval as [1, 5], which has a length of 4.

 Examples
 sumIntervals( [
 [1,2],
 [6, 10],
 [11, 15]
 ] ); // => 9

 sumIntervals( [
 [1,4],
 [7, 10],
 [3, 5]
 ] ); // => 7

 sumIntervals( [
 [1,5],
 [10, 20],
 [1, 6],
 [16, 19],
 [5, 11]
 ] ); // => 19
 */


function sumIntervals(intervals){
  let sum = 0;
  for (let i = 0; i < intervals.length; i++) {
    for (let j = i + 1; j < intervals.length; j++) {
      // a starts, ends with b
      if (intervals[i][1] >= intervals[j][0]
        && intervals[i][1] <= intervals[j][1]
        && intervals[i][0] <= intervals[j][0]) {
        // change ending limit to end point
        // of overlapping segment
        intervals[i][1] = intervals[j][1];
        intervals.splice(j, 1);
        // the end point has changed, start comparing
        // from the begining again
        j = i;

        // b starts, ends with a
      } else if (intervals[i][0] <= intervals[j][1]
        && intervals[i][1] >= intervals[j][1]
        && intervals[i][0] >= intervals[j][0]) {
        // expand start of a to start of b
        intervals[i][0] = intervals[j][0];
        // remove b
        intervals.splice(j, 1);
        // the end point has changed, start comparing
        // from the begining again
        j = i;

        // b is completely inside a
      } else if (intervals[i][1] >= intervals[j][1]
        && intervals[i][0] <= intervals[j][0]) {
        // remove b to prevent double counting
        intervals.splice(j, 1);
        // iterate to next item
        j--;

        // a is inside b
      } else if (intervals[i][0] >= intervals[j][0]
        && intervals[i][1] <= intervals[j][1]) {
        // replace a with b
        intervals[i] = intervals[j];
        // remove b
        intervals.splice(j, 1);
        // a has changed, start comparing
        // from the begining again
        j = i;
      }
    }
    sum += intervals[i][1] - intervals[i][0];
  }

  return sum;
}