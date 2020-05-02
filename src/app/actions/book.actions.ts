import { Book } from './../models/Book'

export class AddBook {
    static readonly type = '[Book] Add'

    constructor(public payload: Book) {}
}

export class RemoveBook {
    static readonly type = '[BOOK] Remove'

    constructor(public payload: string) {}
}
