export function capitalize(str: string): string {
  if (!str) return '';
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

export function reverse(str: string): string {
  return str.split('').reverse().join('');
}

export function truncate(str: string, length: number): string {
  if (str.length <= length) return str;
  return str.slice(0, length) + '...';
}

export function isPalindrome(str: string): boolean {
  const cleanStr = str.replace(/[\W_]/g, '').toLowerCase();
  return cleanStr === cleanStr.split('').reverse().join('');
}
