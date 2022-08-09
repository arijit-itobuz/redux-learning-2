import redux, {
  legacy_createStore as createStore,
  bindActionCreators,
  combineReducers,
  applyMiddleware,
} from "redux";
import reduxLogger from 'redux-logger'

const logger = reduxLogger.createLogger();

const CAKE_ORDERED = "CAKE_ORDERED";
const CAKE_RESTOCKED = "CAKE_RESTOCKED";
const ICECREAM_ORDERED = "ICECREAM_ORDERED";
const ICECREAM_RESTOCKED = "ICECREAM_RESTOCKED";

function orderCake() {
  return {
    type: CAKE_ORDERED,
    // quantity: 1
    payload: 1,
  };
}
function restockCake(quantity = 1) {
  return {
    type: CAKE_RESTOCKED,
    // quantity: quantity
    payload: quantity,
  };
}
function orderIcecream(quantity = 1) {
  return {
    type: ICECREAM_ORDERED,
    payload: quantity,
  };
}
function restockIcecream(quantity = 1) {
  return {
    type: ICECREAM_RESTOCKED,
    payload: quantity,
  };
}

// const initialState = {
//   numberOfCakes: 10,
//   numberOfIcecreams: 20,
// };

const initialCakeState = {
  numberOfCakes: 10,
};

const initialIcecreamState = {
  numberOfIcecreams: 20,
};

// const reducer = (state = initialState, action) => {
//   switch (action.type) {
//     case CAKE_ORDERED:
//       return {
//         ...state,
//         numberOfCakes: state.numberOfCakes - 1,
//       };
//     case CAKE_RESTOCKED:
//       return {
//         ...state,
//         numberOfCakes: state.numberOfCakes + action.payload,
//       };
//     case ICECREAM_ORDERED:
//       return {
//         ...state,
//         numberOfIcecreams: state.numberOfIcecreams - action.payload,
//       };
//     case ICECREAM_RESTOCKED:
//       return {
//         ...state,
//         numberOfIcecreams: state.numberOfIcecreams + action.payload,
//       };
//     default:
//       return state;
//   }
// };

const cakeReducer = (state = initialCakeState, action) => {
  switch (action.type) {
    case CAKE_ORDERED:
      return {
        ...state,
        numberOfCakes: state.numberOfCakes - 1,
      };
    case CAKE_RESTOCKED:
      return {
        ...state,
        numberOfCakes: state.numberOfCakes + action.payload,
      };
    default:
      return state;
  }
};

const icecreamReducer = (state = initialIcecreamState, action) => {
  switch (action.type) {
    case ICECREAM_ORDERED:
      return {
        ...state,
        numberOfIcecreams: state.numberOfIcecreams - action.payload,
      };
    case ICECREAM_RESTOCKED:
      return {
        ...state,
        numberOfIcecreams: state.numberOfIcecreams + action.payload,
      };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  cake: cakeReducer,
  icecream: icecreamReducer,
});
const store = createStore(rootReducer, applyMiddleware(logger));

console.log("Initial state", store.getState());

// const unsubscribe = store.subscribe(() => {
//   console.log("Update state", store.getState());
// });
const unsubscribe = store.subscribe(() => {});

store.dispatch(orderCake());
store.dispatch(orderCake());
store.dispatch(orderCake());

// unsubscribe();

store.dispatch(restockCake());
store.dispatch(restockCake());
store.dispatch(restockCake(100));

const actions = bindActionCreators(
  { orderCake, restockCake, orderIcecream, restockIcecream },
  store.dispatch
);
actions.orderCake();
actions.orderCake();
actions.orderCake();

actions.restockCake();
actions.restockCake();
actions.restockCake(500);

actions.orderIcecream(1000);
actions.restockIcecream(500);

console.log("Final state", store.getState());

unsubscribe();
