import { Sortable } from './types'

export class CharactersCollection implements Sortable {
  constructor(public data: string) {}

  get length(): number {
    return this.data.length
  }

  compare(leftIdx: number, rightIdx: number): boolean {
    return this.data[leftIdx].toLowerCase() > this.data[rightIdx].toLowerCase()
  }

  swap(leftIdx: number, rightIdx: number): void {
    const chars = this.data.split('')

    const leftHand = chars[leftIdx]
    chars[leftIdx] = chars[rightIdx]
    chars[rightIdx] = leftHand

    this.data = chars.join('')
  }
}
