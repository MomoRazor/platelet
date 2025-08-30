import { Edit } from "@mui/icons-material";
import { Tooltip, IconButton } from "@mui/material";
import PropTypes from "prop-types";

function EditModeToggleButton(props) {
    return props.value ? (
        <Tooltip title={props.tooltipEdit}>
            <IconButton
                color="secondary"
                aria-label="Finish"
                onClick={() => props.onChange(false)}
            >
                <Edit />
            </IconButton>
        </Tooltip>
    ) : (
        <Tooltip title={props.tooltipDefault}>
            <IconButton
                className={props.className}
                aria-label={props["aria-label"]}
                onClick={() => props.onChange(true)}
            >
                <Edit />
            </IconButton>
        </Tooltip>
    );
}

EditModeToggleButton.propTypes = {
    value: PropTypes.bool,
    onChange: PropTypes.func,
    tooltipDefault: PropTypes.string,
    tooltipEdit: PropTypes.string,
    className: PropTypes.string,
    "aria-label": PropTypes.string,
};

EditModeToggleButton.defaultProps = {
    value: false,
    onChange: () => {},
    tooltipDefault: "Edit",
    tooltipEdit: "Finish",
    className: "",
    "aria-label": "Edit",
};

export default EditModeToggleButton;
