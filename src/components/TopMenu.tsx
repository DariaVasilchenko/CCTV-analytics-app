import React from "react";
import {IconButton, Link, Menu} from "@mui/material";
import {MenuItem} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';

export const TopMenu = () => {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div>
            <IconButton
                id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
            >
                <MenuIcon/>
            </IconButton>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
            >
                <MenuItem onClick={handleClose}>
                    <Link underline="hover" color="inherit" href="/UsersPage">
                        Управление пользователями
                    </Link>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                    <Link underline="hover" color="inherit" href="/VideoDetectionPage">
                        Анализ видео
                    </Link>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                    <Link underline="hover" color="inherit" href="/ImageDetectionPage">
                        Анализ изображения
                    </Link>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                    <Link underline="hover" color="inherit" href="/EventReportPage">
                        Отчёт об обнаружении
                    </Link>
                </MenuItem>
            </Menu>
        </div>
    )
}