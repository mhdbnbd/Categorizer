import { State, Action, StateContext, Selector } from '@ngxs/store';
import { Book } from './../models/Book';
import { AddBook, RemoveBook } from './../actions/book.actions';

// stateModel

export class BookStateModel {
    books: Book[]
}

// state definition based on the stateModel

@State<BookStateModel>({
    name: 'books',
    defaults: {
        books: []
    }
})

export class BookState {

    // return books
    @Selector()
    static getBooks(state: BookStateModel) {
        return state.books
    }

    @Action(AddBook)
    add({ getState, patchState }: StateContext<BookStateModel>, { payload }:AddBook) {
        const state = getState();
        patchState({
            books: [...state.books, payload]
        })
    }

    @Action(RemoveBook)
    remove({ getState, patchState }: StateContext<BookStateModel>, { payload }:RemoveBook) {
        patchState({
            books: getState().books.filter(a => a.title != payload)
        })
    }

    /*
    @Action(UpdateBook)
    update({getState, patchState}: StateContext<BookStateModel>, {payload, title}: UpdateBook) {
        const state = getState();
        const bookList = [...state.books];
        const bookIndex = bookList.findIndex(a => a.title == title);
        bookList[bookIndex] = payload;
            patchState({
                ...state,
                books: bookList,
            });
        
    }
    */


}