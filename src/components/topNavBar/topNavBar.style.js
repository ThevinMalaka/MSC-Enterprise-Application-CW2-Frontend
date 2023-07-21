import styled from "styled-components";

export const TopNavBarContainer = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100vw;
  background: #5064de;
  height: 70px;

  .top-nav-bar-image {
    margin-left: 90px;
    margin-right: 90px;
  }
  .logo {
    position: relative;
    top: 50%;
    transform: translateY(50%);
  }
`;

export const NavigationLinksContainer = styled.div`
  display: flex;
  gap: 15px;
  margin-left: 90px;

  a {
    color: #fff;
    text-decoration: none;
  }

  .active {
    text-decoration: underline;
  }
`;
