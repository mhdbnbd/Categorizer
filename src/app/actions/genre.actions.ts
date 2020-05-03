import { Genre } from '../models/Genre'

export class AddGenre {
    static readonly type = '[Genre] Add'

    constructor(public payload: Genre) {}
}

export class RemoveGenre {
    static readonly type = '[Genre] Remove'

    constructor(public payload: string) {}
}