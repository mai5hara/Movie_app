import { connect } from 'react-redux';
import Navbar from '../components/layout/Navbar';

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
    profile: state.firebase.profile,
  };
};

export default connect(mapStateToProps)(Navbar);