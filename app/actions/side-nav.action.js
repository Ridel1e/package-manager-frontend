const TOGGLE_SIDE_NAV = 'TOGGLE_SIDE_NAV';

const SideNavActions = () => {
  return {
    toggleSideNav
  };

  function toggleSideNav() {
    return {
      type: TOGGLE_SIDE_NAV
    };
  } 
}

export default SideNavActions;

export { TOGGLE_SIDE_NAV }
