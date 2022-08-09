import redux, {
  legacy_createStore as createStore,
} from "redux";
import { produce } from "immer";

const initialState = {
  name: "Arijit",
  address: {
    street: "Gariahat",
    city: "Kolkata",
    state: "West Bengal",
  },
};

const STREET_UPDATED = "STREET_UPDATED";
function updateStreet(street) {
  return {
    type: STREET_UPDATED,
    payload: street,
  };
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case STREET_UPDATED:
      //   return {
      //     ...state,
      //     address: {
      //       ...state.address,
      //       street: action.payload,
      //     },
      //   };
      return produce(state, (draft) => {
        draft.address.street = action.payload;
      });
    default:
      return state;
  }
};

const store = createStore(reducer);

console.log("Initial state : ", store.getState());

const unsubscribe = store.subscribe(() => {
  console.log("Updated state : ", store.getState());
});

store.dispatch(updateStreet("Dover Place"));

unsubscribe();
