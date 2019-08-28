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

const sorterNum = new Sorter(numbersCollection)
const sorterChar = new Sorter(charCollection)
const sorterLinkedList = new Sorter(linkedList)

sorterNum.sort()
sorterChar.sort()
sorterLinkedList.sort()

console.log(numbersCollection.data)
console.log(charCollection.data)
linkedList.print()
