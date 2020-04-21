import {
     BreedState, FETCH_BREEDS_SUCCESS,FETCH_FAIL, FETCH_BREEDS_INIT } from '../actions/types'


const initialState: BreedState = {
  breeds: [],
  breed:{},
  loading:false
  }

  export default function(state=initialState, action:any):BreedState {
    switch(action.type) {
      case FETCH_BREEDS_INIT:
        return {
          ...state,
          breeds: [],
          breed:{},
          loading: true
        };
      case FETCH_BREEDS_SUCCESS:
        return {
          ...state,
          breeds: action.payload,
          loading: false
        };
      case FETCH_FAIL:
        return {
          ...state,
          breeds: [],
          breed:{},
          loading: false
        };
      default:
        return state;
    }
  }
