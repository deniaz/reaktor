import { connect } from 'react-redux';
import { GET_EXAMPLE } from '../actions/example';
import { createAction } from '../actions';
// import ExampleComponent from '../components/organisms/example';

const mapStateToProps = state => ({
  example: state.example,
});

const mapDispatchToProps = dispatch => ({
  load: dispatch(createAction(GET_EXAMPLE)),
});

export default connect(mapStateToProps, mapDispatchToProps)(/* ExampleComponent */);
