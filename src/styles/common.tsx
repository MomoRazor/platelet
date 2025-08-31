import "../App.css";
import { Card, styled, Paper, Box, IconButton } from "@mui/material";
import { makeStyles } from "tss-react/mui";
import { Link, LinkProps } from "react-router-dom";
import { Clear } from "@mui/icons-material";

export const showHide = makeStyles()({
    hide: {
        display: "none",
    },
    show: {},
});

export interface DismissButtonProps {
    onClick: () => void;
}

export function DismissButton(props: DismissButtonProps) {
    return (
        <IconButton
            color="inherit"
            aria-controls="simple-menu"
            aria-haspopup="true"
            size="small"
            onClick={props.onClick}
        >
            <Clear />
        </IconButton>
    );
}

export interface ThemedLinkProps extends LinkProps {
    theme: {
        palette: {
            text: {
                primary: string;
            };
        };
    };
}

export const ThemedLink = styled(Link)<LinkProps>(({ theme }) => ({
    color: theme.palette.text.primary,
    width: "100%",
}));

export const StyledColumn = styled(Box)({
    border: 0,
    boxShadow: "0 2px 3px 1px rgba(100, 100, 100, .3)",
    height: "100%",
    minHeight: "100%",
    width: "383px",
});

export const StyledCard = styled(Card)({
    border: 0,
    borderRadius: "0.8em",
    boxShadow: "0 1px 2px 1px #7a7a7a",
    width: "100%",
    height: "200px",
});

export const StyledSharpCard = styled(Card)({
    border: 0,
    borderRadius: 2,
    boxShadow: "0 3px 5px 2px #7a7a7a",
    padding: "20px",
});

export const StyledStrip = styled(Card)({
    borderRadius: 0,
    padding: "0px",
    height: "50px",
    width: "1200px",
    cursor: "pointer",
});

export interface PaddedPaperProps {
    padding?: string;
    maxWidth?: string;
    minWidth?: string;
    maxHeight?: string;
    minHeight?: string;
    className?: string;
    width?: string;
    height?: string;
    children: React.ReactNode;
}

export function PaddedPaper(props: PaddedPaperProps) {
    const padding = props.padding ? props.padding : "30px";
    const maxWidth = props.maxWidth ? props.maxWidth : "1280px";
    const minWidth = props.minWidth ? props.minWidth : "30px";
    const maxHeight = props.maxHeight ? props.maxHeight : "100%";
    const minHeight = props.minHeight ? props.minHeight : "30px";
    const className = props.className;
    return (
        <Paper
            className={className}
            style={{
                width: props.width ? props.width : "100%",
                height: props.height ? props.height : "100%",
                maxWidth: maxWidth,
                minWidth: minWidth,
                maxHeight: maxHeight,
                minHeight: minHeight,
                padding: padding,
                borderRadius: "1em",
            }}
        >
            {props.children}
        </Paper>
    );
}
