import {Book as BookSchema} from './book.schema.json'
import {Book as BookModel} from './book.model.json'

const bookSchema: BookSchema = {
    title: "test",
    author: "test"
}

const bookModel: BookModel = {
    title: "test",
    author: "test",
    categories:[
        "roman"
    ],
    meta: {
        pages: 101,
        paperback: true
    }

}

console.log(bookSchema)
console.log(bookModel)


