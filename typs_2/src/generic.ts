function filterArray<T>(array: T[], callback: (item: T) => boolean): T[] {
  return array.filter(callback);
}
