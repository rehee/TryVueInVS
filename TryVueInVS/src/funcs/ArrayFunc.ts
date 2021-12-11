export class ArrayFunc {
  public static SubArray<T>(input: T[], num: number, keepOrder: boolean = false): T[][] {
    const result: T[][] = [];
    if (!num) {
      return result;
    }

    if (keepOrder) {
      const listCopy = input.map(b => b);
      do {
        result.push(listCopy.splice(0, num));
      } while (listCopy)
    }
    const sub = input.map((b, i) => ({ value: b, index: i % num }));
    for (var i = 0; i < num; i++) {
      result.push(
        sub.filter(b => b.index == i).map(b => b.value)
      );
    }
    return result;
  }
}