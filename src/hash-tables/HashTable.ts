export class HashTable {
  private readonly dataMap: Array<Array<[string, number]>>;

  constructor(size: number = 7) {
    this.dataMap = new Array(size).fill(null).map(() => []);
  }

  private _hash(key: string): number {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * 23) % this.dataMap.length;
    }
    return hash;
  }

  public set(key: string, value: number): HashTable {
    let index = this._hash(key);
    this.dataMap[index].push([key, value]);
    return this;
  }

  public get(key: string): number | undefined {
    let index = this._hash(key);
    if (this.dataMap[index]) {
      for (let i = 0; i < this.dataMap[index].length; i++) {
        if (this.dataMap[index][i][0] === key) {
          return this.dataMap[index][i][1];
        }
      }
    }
    return undefined;
  }

  public keys(): string[] {
    let allKeys = [];
    for (let i = 0; i < this.dataMap.length; i++) {
      if (this.dataMap[i] && this.dataMap[i].length > 0) {
        for (let j = 0; j < this.dataMap[i].length; j++) {
          allKeys.push(this.dataMap[i][j][0]);
        }
      }
    }
    return allKeys;
  }
}
