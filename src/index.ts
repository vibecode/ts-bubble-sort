import { Sorter } from './sorter'
import { NumbersCollection } from './NumbersCollection'

const numbersCollection = new NumbersCollection([0, 6, 8, 3])
const sorter = new Sorter(numbersCollection)

sorter.sort()

console.log(numbersCollection.data)
