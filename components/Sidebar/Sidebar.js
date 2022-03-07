import {
  SidebarContainer,
  CrossIcon,
  CrossLine1,
  CrossLine2,
  SidebarList,
  SidebarListItem,
} from "./styledSidebar";

export const Sidebar = ({ showMenu, setShowMenu, data }) => {
  const sidebarLinks = data.links.map((link) => (
    <SidebarListItem className="list-item" key={link.id}>
      <span className="split-text" data-text={link.title}>
        {link.title}
      </span>
    </SidebarListItem>
  ));

  return (
    <SidebarContainer showMenu={showMenu}>
      <CrossIcon onClick={() => setShowMenu(false)}>
        <CrossLine1></CrossLine1>
        <CrossLine2></CrossLine2>
      </CrossIcon>
      <SidebarList>{sidebarLinks}</SidebarList>
    </SidebarContainer>
  );
};
