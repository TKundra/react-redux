import React from 'react';
import {buyCake} from './redux/actions/cakeActions';
import {useSelector, useDispatch} from 'react-redux';

function AppTwo() {
  const numberOfCakes = useSelector((state) => state.numberOfCakes);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <h1>{numberOfCakes}</h1>
      <button onClick={() => dispatch(buyCake())}>buy cake</button>
    </div>
  );
}

export default AppTwo;