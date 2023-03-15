import React from "react";
import { MenuItem } from "@mui/material";
import { useMatch, useNavigate, useResolvedPath } from "react-router-dom";

interface MenuItemProps {
  to: string;
  title: string;
}

export const Links = ({ to, title }: MenuItemProps) => {
  const navigate = useNavigate();
  const resolved = useResolvedPath(to);
  const match = useMatch({ path: resolved.pathname, end: true });

  return (
    <MenuItem
      selected={Boolean(match)}
      onClick={() => {
        navigate(to, { replace: true });
      }}
      sx={{ borderRadius: 1 }}
    >
      {title}
    </MenuItem>
  );
};
