import { Sorter } from './sorter'
import { NumbersCollection } from './NumbersCollection'
import { CharactersCollection } from './CharactersCollection'

const numbersCollection = new NumbersCollection([0, 6, 8, 3])
const charCollection = new CharactersCollection('sdfsdfsasadasd')
const sorterNum = new Sorter(numbersCollection)
const sorterChar = new Sorter(charCollection)

sorterNum.sort()
sorterChar.sort()

console.log(numbersCollection.data)
console.log(charCollection.data)
