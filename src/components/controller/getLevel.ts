export function getLevel(): number {
  if (localStorage.getItem('Level') === null) {
    localStorage.setItem('Level', '1');
    const level = localStorage.getItem('Level');
    if (level) {
      return +level;
    }
  } else {
    const level = localStorage.getItem('Level');
    if (level) {
      return +level;
    }
  }
  return 1;
}
