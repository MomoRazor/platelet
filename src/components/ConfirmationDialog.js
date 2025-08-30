import {
    Box,
    Stack,
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    styled,
} from "@mui/material";
import PropTypes from "prop-types";
import { useCordovaBackButton } from "../hooks/useCordovaBackButton";

const RoundedDialog = styled(Dialog)(({ fullScreen }) => ({
    "& .MuiDialog-paper": {
        borderRadius: fullScreen ? "0em" : "1em",
    },
}));

function ConfirmationDialog({ onCancel, open, ...props }) {
    useCordovaBackButton(onCancel, open);
    return (
        <RoundedDialog
            open={open}
            fullScreen={props.fullScreen}
            onClose={props.onClose}
            PaperProps={{ elevation: 1 }}
        >
            <DialogTitle>{props.dialogTitle}</DialogTitle>
            <DialogContent>
                <Box sx={{ padding: 1 }}>{props.children}</Box>
            </DialogContent>
            <DialogActions>
                <Stack
                    direction="row"
                    sx={{ width: "100%" }}
                    justifyContent="space-between"
                >
                    {props.hideCancel ? (
                        <div></div>
                    ) : (
                        <Button
                            data-testid="confirmation-cancel-button"
                            aria-label="Cancel"
                            onClick={() => {
                                onCancel();
                            }}
                            autoFocus
                        >
                            Cancel
                        </Button>
                    )}{" "}
                    {!props.hideOk && (
                        <Button
                            disabled={props.disabled}
                            aria-label="OK"
                            data-testid="confirmation-ok-button"
                            onClick={() => {
                                props.onConfirmation();
                            }}
                            autoFocus
                        >
                            OK
                        </Button>
                    )}
                </Stack>
            </DialogActions>
        </RoundedDialog>
    );
}

ConfirmationDialog.propTypes = {
    open: PropTypes.bool,
    onConfirmation: PropTypes.func,
    onCancel: PropTypes.func,
    onClose: PropTypes.func,
    dialogTitle: PropTypes.string,
    hideCancel: PropTypes.bool,
    hideOk: PropTypes.bool,
    fullScreen: PropTypes.bool,
    disabled: PropTypes.bool,
    children: PropTypes.node,
};

ConfirmationDialog.defaultProps = {
    open: false,
    dialogTitle: "",
    onConfirmation: () => {},
    onCancel: () => {},
    onClose: null,
    hideCancel: false,
    hideOk: false,
    fullScreen: false,
    disabled: false,
    children: null,
};

export default ConfirmationDialog;
