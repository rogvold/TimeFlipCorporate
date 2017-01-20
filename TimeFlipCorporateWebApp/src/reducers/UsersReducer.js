/**
 * Created by sabir on 28.11.16.
 */

import * as types from '../constants/ActionTypes.js'

let getFakeUsersMap = () => {
    let arr = [
        {
            id: '1',
            firstName: 'Эрлих',
            lastName: 'Бахман',
            avatar: 'http://www.piedpiper.com/app/themes/pied-piper/dist/images/erlich.png'
        },
        {
            id: '2',
            firstName: 'Ричард',
            lastName: 'Хендрикс',
            avatar: 'http://www.piedpiper.com/app/themes/pied-piper/dist/images/richard.png'
        },
        {
            id: '3',
            firstName: 'Бертрам',
            lastName: 'Гилфойл',
            avatar: 'http://www.piedpiper.com/app/themes/pied-piper/dist/images/gilfoyle.png'
        },
        {
            id: '4',
            firstName: 'Нельсон',
            lastName: 'Бигетти',
            avatar: 'http://www.piedpiper.com/app/themes/pied-piper/dist/images/bighead.png'
        },
        {
            id: '5',
            firstName: 'Динэш',
            lastName: 'Чугтай',
            avatar: 'http://www.piedpiper.com/app/themes/pied-piper/dist/images/dinesh.png'
        },
        {
            id: '6',
            firstName: 'Джаред',
            lastName: 'Данн',
            avatar: 'http://www.piedpiper.com/app/themes/pied-piper/dist/images/jared.png'
        },
        {
            id: '7',
            firstName: 'Карла',
            lastName: 'Уолтон',
            avatar: 'http://static1.squarespace.com/static/551d64a8e4b0eeef9d4c5e6e/551d87c7e4b088e1f80a36d5/55477e9de4b0ebc5baf7ab02/1430749054959/carla.png?format=original'
        }


    ];
    let map = {};
    for (let i in arr){
        map[arr[i].id] = arr[i];
    }
    return map;
}

const initialState = {
    initialized: false,
    loading: false,
    usersMap: getFakeUsersMap(),
    currentUser: undefined,
    error: undefined
}

const consumeUsers = (state, users) => {
    if (users == undefined){
        return state;
    }
    var usersMap = Object.assign({}, state.usersMap);
    for (let u of users){
        usersMap[u.id] = u;
    }
    return Object.assign({}, state.usersMap, usersMap);
}

const startLoading = (state, action) => {
    return { ...state, loading: true, error: undefined}
}

const stopLoading = (state, action) => {
    return { ...state, loading: false, error: action.error}
}

const UsersReducer =  (state = initialState, action = {}) => {

    switch (action.type) {

            case types.LOGIN:
                return startLoading(state, action)

            case types.LOGIN_SUCCESS:
                var usersMap = Object.assign({}, state.usersMap, {[action.user.id]: action.user});
                return {
                    ...state,
                    currentUser: action.user,
                    usersMap: usersMap,
                    loading: false
                }

            case types.LOGIN_FAIL:
                return stopLoading(state, action)



            case types.SIGNUP:
                return startLoading(state, action)

            case types.SIGNUP_FAIL:
                return stopLoading(state, action)

            case types.SIGNUP_SUCCESS:
                var usersMap = Object.assign({}, state.usersMap, {[action.user.id]: action.user});
                return {
                    ...state,
                    currentUser: action.user,
                    usersMap: usersMap,
                    loading: false
                }


            case  types.LOGOUT:
                return startLoading(state, action)

            case  types.LOGOUT_FAIL:
                return stopLoading(state, action)

            case  types.LOGOUT_SUCCESS:
                return {...state, currentUser: undefined, loading: false, error: undefined}



            case types.INITIALIZE_AUTH:
                return {...state, loading: true, initialized: false}

            case types.INITIALIZE_AUTH_FAIL:
                return {...state, loading: false, initialized: false}

            case types.INITIALIZE_AUTH_SUCCESS:
                var usersMap = Object.assign({}, state.usersMap, (action.user == undefined ) ? {} : {[action.user.id]: action.user});
                return {...state, loading: false, initialized: true, currentUser: action.user, usersMap: usersMap}



            case types.LOAD_USERS:
                return startLoading(state, action)

            case types.LOAD_USERS_FAIL:
                return stopLoading(state, action)

            case types.LOAD_USERS_SUCCESS:
                var newUsersMap = consumeUsers(state, action.users)
                return {
                    ...state,
                    usersMap: newUsersMap,
                    loading: false
                }


        default:
        return state;
    }

}

export default UsersReducer;
