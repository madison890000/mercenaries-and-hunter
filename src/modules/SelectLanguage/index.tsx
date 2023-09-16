import React from 'react';
import Button from '@mui/material/Button';
import Popper from '@mui/material/Popper';
import Grow from '@mui/material/Grow';
import Paper from '@mui/material/Paper';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import {LocalesKey} from '../../i18n/languages';

interface SelectLanguageProps {
    value?: LocalesKey;
    onChange?: (e: LocalesKey) => void;
    options: { label: string; value: LocalesKey }[];
}

const SelectLanguage = ({onChange, value, options}: SelectLanguageProps) => {
    const [open, setOpen] = React.useState(false);
    const anchorRef = React.useRef<HTMLButtonElement>(null);
    const handleToggle = () => {
        setOpen(prevOpen => !prevOpen);
    };
    const handleClose = (e: LocalesKey) => {
        onChange?.(e);
        setOpen(false);
    };
    return (
        <>
            <Button
                ref={anchorRef}
                id="composition-button"
                data-testid="select-language-btn"
                aria-controls={open ? 'composition-menu' : undefined}
                aria-expanded={open ? 'true' : undefined}
                aria-haspopup="true"
                onClick={handleToggle}
                variant="outlined"
            >
                {options?.find((l: any) => l.value === value)?.label}
            </Button>
            <Popper
                open={open}
                anchorEl={anchorRef.current}
                role={undefined}
                placement="bottom-start"
                transition
                disablePortal
            >
                {({TransitionProps, placement}) => (
                    <Grow
                        {...TransitionProps}
                        style={{
                            transformOrigin: placement === 'bottom-start' ? 'left top' : 'left bottom'
                        }}
                    >
                        <Paper>
                            <MenuList
                                autoFocusItem={open}
                                id="composition-menu"
                                data-testid="select-language-menu-pop"
                                aria-labelledby="composition-button"
                            >
                                {options?.map(l => (
                                    <MenuItem
                                        key={l.value}
                                        onClick={() => {
                                            handleClose(l?.value);
                                        }}
                                    >
                                        {l?.label}
                                    </MenuItem>
                                ))}
                            </MenuList>
                        </Paper>
                    </Grow>
                )}
            </Popper>
        </>
    );
};

export default SelectLanguage;
