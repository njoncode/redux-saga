import { all } from 'redux-saga/effects'
import {watchAddToCartSaga, watchRemoveFromCartSaga} from './cartSagas'
import {watchFindEmployeeSaga, watchFindCustomerSaga} from './userSagas'  // import watchFindEmployeeSaga is a default import, so we did not put it within {}

export default function* rootSaga() {
    yield all([
        watchAddToCartSaga(),
        watchRemoveFromCartSaga(),
        watchFindEmployeeSaga(),
        watchFindCustomerSaga()
    ])
}