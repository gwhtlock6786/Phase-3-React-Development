// ============================================
// SHIFT SCHEDULER UTILITIES
//
// Reusable helper functions:
// - Calculate hours for individual shifts
// - Calculate total scheduled hours
// - Get unique employees
// - Filter shifts by employee
// ============================================

// ============================================
// CALCULATE HOURS FOR ONE SHIFT
//
// Example:
// 08:00 - 16:00 = 8 hours
// ============================================

export function calculateShiftHours(shift) {
  const startTime = shift.startTime.split(":");

  const endTime = shift.endTime.split(":");

  const startHour = Number(startTime[0]);

  const endHour = Number(endTime[0]);

  return endHour - startHour;
}

// ============================================
// CALCULATE TOTAL HOURS
//
// Adds all shift hours together
//
// Example:
// Maria: 8 hours
// James: 8 hours
//
// Total: 16 hours
// ============================================

export function calculateTotalHours(shiftsArray) {
  return shiftsArray.reduce((total, shift) => {
    return total + calculateShiftHours(shift);
  }, 0);
}

// ============================================
// GET UNIQUE EMPLOYEE NAMES
//
// Converts:
//
// [
//  Maria,
//  James,
//  Maria
// ]
//
// into:
//
// [
//  Maria,
//  James
// ]
// ============================================

export function getUniqueEmployees(shiftsArray) {
  const employeeNames = shiftsArray.map((shift) => {
    return shift.employee;
  });

  return [...new Set(employeeNames)];
}

// ============================================
// FILTER SHIFTS BY EMPLOYEE
//
// Example:
//
// filterShiftsByEmployee(shifts, "Maria")
//
// returns only Maria's shifts
// ============================================

export function filterShiftsByEmployee(shiftsArray, employee) {
  return shiftsArray.filter((shift) => {
    return shift.employee === employee;
  });
}
