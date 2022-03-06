import {
  SidebarContainer,
  CrossIcon,
  CrossLine1,
  CrossLine2,
} from "./styledSidebar";

export const Sidebar = ({ showMenu, setShowMenu }) => {
  return (
    <SidebarContainer showMenu={showMenu}>
      <CrossIcon onClick={() => setShowMenu(false)}>
        <CrossLine1></CrossLine1>
        <CrossLine2></CrossLine2>
      </CrossIcon>
    </SidebarContainer>
  );
};
