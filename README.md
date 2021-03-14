This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify









## 

Action -> Saga Watcher -> Reducer

Redux Saga intercepts the action before it reaches the reducer.


** In Sagas, we don't dispatch or return. What we do is put.
We put to our reducer the result of our logic & then let our reducer update the state.

function* is a generator.

**
            export function* addToCartSaga(action) {
                const { cart, item } = action.payload
                const newCart = [...cart, item];
                const newTotal = total(newCart);
                yield wait(1000);
                yield put ({ type: ADD_TO_CART, payload: { newCart, newTotal } });
            }

            export function* watchAddToCartSaga() {
                yield takeEvery(ADD_TO_CART_SAGA, addToCartSaga)
            }
            
watcherSaga watches for the actions.
Every time watchAddToCartSaga function sees ADD_TO_CART_SAGA come across in redux, it's gonna send it to addToCartSaga function which is gonna do the function & yield the put which will hit the reducer to update the state.

yield call(function, ...arguments)

In this case: call(fetch, url, setHeaders) === fetch(url, setHeaders)


let [employeeFinder, customerFinder] = yield all([
        call(fetch, url, setHeaders),
        call(fetch, url, setHeaders)
      ]);

The first call will be mapped to the employeeFinder & second call will be mapped to the customerFinder.