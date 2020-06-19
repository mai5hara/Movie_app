import { connect } from 'react-redux';
import { signOut } from '../../store/actions/authActions';
import SignedInLinks from '../components/auth/SignIn';

const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => {
      dispatch(signOut());
    }
  }
}

export default connect(null, mapDispatchToProps)(SignedInLinks);