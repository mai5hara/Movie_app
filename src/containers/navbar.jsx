import { connect } from 'react-redux';
import Navbar from '../components/organisms/Navbar';

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
    profile: state.firebase.profile,
  };
};

export default connect(mapStateToProps)(Navbar);