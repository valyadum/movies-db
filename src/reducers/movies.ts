import { Action, Reducer } from "redux";

export interface Movie{
    id: number;
    title: string;
    popularity: number;
    overview: string;
}

interface MovieState{
    top:Movie[]
}

const initialState:MovieState = {
    top: [
        {id:1, title:'Inception', popularity:98, overview:'Dreams....'}
    ]
}

const moviesReducer:Reducer<MovieState, Action> =(state, action)=>{
    return initialState;
}
export default moviesReducer;