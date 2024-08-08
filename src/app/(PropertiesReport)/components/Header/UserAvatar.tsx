import styled from "styled-components";

const Avatar = styled.img`
  height: 34px;
  width: 34px;
  border-radius: 17px;
  object-fit: cover;
`;

export const UserAvatar: React.FC<{ src: string }> = ({ src }) => <Avatar src={src} alt="User Avatar" />;

