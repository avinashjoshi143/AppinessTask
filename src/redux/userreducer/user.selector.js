import {createSelector} from 'reselect';

const selectUSer = state => state.user;

export const selectCurrentUser = createSelector(
    [selectUSer],
    user => user.currentUser
);

export const selectList = createSelector(
    [selectUSer],
    user => user.list
);

export const selectIsValid = createSelector(
    [selectUSer],
    user => user.isValid
);