
const defaultUserInfo = {
  name: 'Manager',
  // image: 'http://demos.creative-tim.com/light-bootstrap-dashboard-pro/assets/img/default-avatar.png'
  image:'http://www.lte-esafety.co.uk/wp-content/uploads/2015/06/avatar.png'
};

export default function reducer(state = {
  user: defaultUserInfo
}, action) {
  return state;
}