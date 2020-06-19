import { connect } from 'react-redux';
import SignedInLinks from '../components/layout/SignedInLinks';
import { signOut } from '../../store/actions/authActions';

const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => {
      dispatch(signOut());
    }
  }
}

export default connect(null, mapDispatchToProps)(SignedInLinks);