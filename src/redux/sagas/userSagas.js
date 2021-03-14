import { put, takeEvery, call, all, race } from 'redux-saga/effects'
import { FIND_EMPLOYEE_SAGA, FIND_EMPLOYEE, FIND_CUSTOMER, FIND_CUSTOMER_SAGA } from '../types'
const wait = (ms) => new Promise((res) => setTimeout(res, ms))


  export function* findEmployeeSaga() {
    const url = "https://randomuser.me/api/";
    const setHeaders = { headers: { "Content-Type": "application/json" } };
    let res = yield fetch(url, setHeaders)
    res = yield res.json();
    console.log(res)
    let employee = res.results[0]
    yield put({ type: FIND_EMPLOYEE, payload: employee})
  }
  // yield put means send it to the reducer with the type of FIND_EMPLOYEE & a payload of employee.

  
  export function* findCustomerSaga() {
    const url = "https://randomuser.me/api/";
    const setHeaders = { headers: { "Content-Type": "application/json" } };
    let res = yield fetch(url, setHeaders)
    res = yield res.json();
    let customer = res.results[0]
    yield put({ type: FIND_CUSTOMER, payload: customer })  
  }

  export function* findBoth() {
      const url = "https://randomuser.me/api/";
      const setHeaders = { headers: { "Content-Type": "application/json" } };
      let [employeeFinder, customerFinder] = yield all([
        call(fetch, url, setHeaders),
        call(fetch, url, setHeaders)
      ]);
      [employeeFinder, customerFinder] = yield all([
        employeeFinder.json(),
        customerFinder.json()
      ]);
      [employeeFinder, customerFinder] = yield all([
        employeeFinder.results[0],
        customerFinder.results[0]
      ]);
      yield all([
        put({ type: FIND_EMPLOYEE, payload: employeeFinder }),
        put({ type: FIND_CUSTOMER, payload: customerFinder })
      ]);
  }

  // function* raceMe() {
  //     const url = "https://randomuser.me/api/";
  //     const setHeaders = { headers: { "Content-Type": "application/json" } };
  //     const { person, timeout } = yield race({
  //       person: call(fetch, url, setHeaders),
  //       timeout: wait(1000)
  //     })                                 // Race - We wanna see if we can make fetch call within 1 sec.
  //     if(person) console.log('SUCCESS!!!')
  //       else console.log('TOO SLOW!!!')
  // }

  export function* watchFindEmployeeSaga() {
      yield takeEvery(FIND_EMPLOYEE_SAGA, findBoth)
  }

  export function* watchFindCustomerSaga() {
    yield takeEvery(FIND_CUSTOMER_SAGA, findCustomerSaga)
  }
  