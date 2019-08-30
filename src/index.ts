import { Sorter } from './sorter'
import { NumbersCollection } from './NumbersCollection'
import { CharactersCollection } from './CharactersCollection'
import { LinkedList } from './LinkedList'

const numbersCollection = new NumbersCollection([0, 6, 8, 3])
const charCollection = new CharactersCollection('sdfsdfsasadasd')
const linkedList = new LinkedList()

linkedList.add(500)
linkedList.add(-10)
linkedList.add(200)
linkedList.add(123)

numbersCollection.sort()
charCollection.sort()
linkedList.sort()

console.log(numbersCollection.data)
console.log(charCollection.data)
linkedList.print()
