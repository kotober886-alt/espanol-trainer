// Extracted exercise data module.
// Stage 1 of refactor: exercise collections get their own module boundary.

export const BUILTIN_EXERCISES = [];
export const SPECIAL_EXERCISES = [];
export const MATCH_EXERCISES = [];
export const CLOZE_EXERCISES = [];

// The next migration batches move the large inline arrays from index.html here
// without changing exercise generation logic until imports are wired.
