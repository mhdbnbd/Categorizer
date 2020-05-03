import { Book } from './../models/Book'

export class AddBook {
    static readonly type = '[Book] Add'

    constructor(public payload: Book) {}
}

export class RemoveBook {
    static readonly type = '[BOOK] Remove'

    constructor(public payload: string) {}
}

/*
export class UpdateBook {
    static readonly type = '[BOOK] Update'

    constructor(public payload: Book, public title: string) {}
}
*/
