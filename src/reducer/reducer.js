import { FETCH_DATA, FETCH_DATA_FAIL, FETCH_DATA_SUCCESSFULLY } from "./const"

export const INITIAL_STATE = {
    isLoading: true,
    location: {},
    current_info: {},
    air_quality: {},
    forcasts: [],
    astro: {},
    hourly_Update: [],
    status_code: null

}

export const postReducer = (state, action) => {
    switch (action.type) {
        case FETCH_DATA:
            return {
                ...state,
                isLoading: true
            }
        case FETCH_DATA_SUCCESSFULLY:
            console.log(action.payload.status)
            return {
                ...state,
                isLoading: false,
                location: action.payload.data.location,
                current_info: action.payload.data.current,
                air_quality: action.payload.data.current.air_quality,
                astro: action.payload.data.forecast?.forecastday[0]?.astro,
                forcasts: action.payload.data.forecast?.forecastday,
                hourly_Update: action.payload.data.forecast?.forecastday[0]?.hour,
                status_code: action.payload.status

            }
        case FETCH_DATA_FAIL:
            console.log(action.payload.status);
            return {
                location: {},
                current_info: {},
                air_quality: {},
                forcasts: [],
                astro: {},
                hourly_Update: [],
                isLoading: false,
                status_code: action.payload.status

            }
        default:
            return state

    }
}