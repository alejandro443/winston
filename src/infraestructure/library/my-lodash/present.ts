export function present(value: any): boolean {
  return value !== null && value !== undefined &&
    !(typeof value === 'string' && value.trim().length === 0) &&
    !(Array.isArray(value) && value.length === 0) &&
    !(typeof value === 'object' && !Array.isArray(value) && Object.keys(value).length === 0);
};
