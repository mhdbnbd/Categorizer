import { State, Action, StateContext, Selector } from '@ngxs/store';
import { Genre } from './../models/Genre';
import { AddGenre, RemoveGenre } from './../actions/genre.actions';

// stateModel

export class GenreStateModel {
    genres: Genre[]
}

// state definition based on the stateModel

@State<GenreStateModel>({
    name: 'genres',
    defaults: {
        genres: []
    }
})

export class GenreState {

    // return genres

    @Selector()
    static getGenres(state: GenreStateModel) {
        return state.genres
    }

    @Action(AddGenre)
    add({ getState, patchState }: StateContext<GenreStateModel>, { payload }:AddGenre) {
        const state = getState();
        patchState({
            genres: [...state.genres, payload]
        })
    }

    @Action(RemoveGenre)
    remove({ getState, patchState }: StateContext<GenreStateModel>, { payload }:RemoveGenre) {
        patchState({
            genres: getState().genres.filter(a => a.name != payload)
        })
    }


}