/*
    Group all shifts by the day they occur on.

    reduce() iterates through the shifts array and builds a new object.

    Example input:

    [
      { employee: "John", day: "Monday" },
      { employee: "Jane", day: "Monday" },
      { employee: "Bob", day: "Tuesday" }
    ]

    Example output:

    {
      Monday: [
        { employee: "John", day: "Monday" },
        { employee: "Jane", day: "Monday" }
      ],
      Tuesday: [
        { employee: "Bob", day: "Tuesday" }
      ]
    }

    acc (accumulator):
      - Starts as an empty object ({})
      - Stores the grouped shifts as reduce() processes the array

    shift:
      - The current shift object being processed
  */
export const groupShiftsByDay = (shifts) => {
  return shifts.reduce((acc, shift) => {
    /*
      Check whether a key already exists for the current shift's day.

      Example:
      shift.day === "Monday"

      If "Monday" does not already exist in the accumulator,
      create it and assign it an empty array.

      Bracket notation is used because the key comes from a variable
      rather than a hard-coded property name.
    */
    if (!acc[shift.day]) {
      acc[shift.day] = [];
    }

    /*
      Add the current shift to the array associated with its day.

      Example:

      acc["Monday"].push(shift)
    */
    acc[shift.day].push(shift);

    /*
      The updated accumulator is returned so reduce() can use it
      during the next iteration.
    */
    return acc;
  }, {});
};
