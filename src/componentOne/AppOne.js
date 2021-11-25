
import {buyCake} from './redux/actions/cakeActions';
import {connect} from 'react-redux';

function AppOne(props) {
  return (
    <div className="App">
      <h1>{props.numberOfCakes}</h1>
      <button onClick={props.buyCake}>buy cake</button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {numberOfCakes: state.numberOfCakes}
}
const mapDispatchToProps = (dispatch) => {
  return {buyCake: () => dispatch(buyCake())}
}

export default connect(mapStateToProps, mapDispatchToProps)(AppOne);