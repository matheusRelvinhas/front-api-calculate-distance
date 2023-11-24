import React, { useState } from 'react';
import { IoLogoGithub } from 'react-icons/io';

interface GitHubLinkProps {
  username: string;
}

const GitHubLink: React.FC<GitHubLinkProps> = ({ username }) => {
  const [iconColor, setIconColor] = useState('#f5f5f5');

  return (
    <a
      href={`https://github.com/${username}`}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        textDecoration: 'none',
        color: 'inherit',
      }}
    >
      <IoLogoGithub
        size={40}
        onMouseOver={() => setIconColor('#d9d9d9')} // Cor do hover
        onMouseOut={() => setIconColor('#f5f5f5')}
        onClick={() => setIconColor('#8c8c8c')}
        style={{
          transition: 'color 0.3s',
          cursor: 'pointer',
          color: iconColor,
        }}
      />
    </a>
  );
};

export default GitHubLink;
