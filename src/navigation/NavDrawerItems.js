import { useSelector } from "react-redux";
import {
    ListItemIcon,
    ListItemText,
    ListItemButton,
    Divider,
    List,
} from "@mui/material";
import {
    History,
    CalendarMonth,
    TwoWheeler,
    PeopleAlt,
    Dashboard,
    LocationCity,
    BarChart,
    Description,
    SupervisorAccount,
} from "@mui/icons-material";
import { Link } from "react-router-dom";
import * as models from "../models";
import PropTypes from "prop-types";
import { getWhoami } from "../redux/Selectors";

function NavDrawerItems(props) {
    const whoami = useSelector(getWhoami);
    const menuIndex = useSelector((state) => state.menuIndex);
    const onSelect = props.onSelect;
    let adminLink = <></>;
    let historyLink = <></>;
    let statisticsLink = <></>;
    let scheduledTasksLink = <></>;

    if (whoami.roles) {
        if (whoami.roles.includes("ADMIN")) {
            adminLink = (
                <ListItemButton
                    onClick={onSelect}
                    selected={menuIndex === "admin"}
                    component={Link}
                    to="/admin"
                    button
                >
                    <ListItemIcon>
                        <SupervisorAccount />
                    </ListItemIcon>
                    <ListItemText primary="Admin" />
                </ListItemButton>
            );
        }
        if (
            whoami.roles.includes(models.Role.ADMIN) ||
            whoami.roles.includes(models.Role.COORDINATOR)
        ) {
            historyLink = (
                <ListItemButton
                    onClick={onSelect}
                    selected={menuIndex === "history"}
                    component={Link}
                    to="/history"
                    button
                >
                    <ListItemIcon>
                        <History />
                    </ListItemIcon>
                    <ListItemText primary="History" />
                </ListItemButton>
            );
            statisticsLink = (
                <ListItemButton
                    onClick={onSelect}
                    selected={menuIndex === "statistics"}
                    component={Link}
                    to="/statistics"
                    button
                >
                    <ListItemIcon>
                        <BarChart />
                    </ListItemIcon>
                    <ListItemText primary="Statistics" />
                </ListItemButton>
            );
            scheduledTasksLink = (
                <ListItemButton
                    onClick={onSelect}
                    selected={menuIndex === "scheduled"}
                    component={Link}
                    to="/scheduled"
                    button
                >
                    <ListItemIcon>
                        <CalendarMonth />
                    </ListItemIcon>
                    <ListItemText primary="Scheduled" />
                </ListItemButton>
            );
        }
    }

    return (
        <div className={props.className}>
            <Divider />
            <List component="nav">
                <ListItemButton
                    onClick={onSelect}
                    selected={menuIndex === "dashboard"}
                    component={Link}
                    to="/"
                    button
                >
                    <ListItemIcon>
                        <Dashboard />
                    </ListItemIcon>
                    <ListItemText primary="Dashboard" />
                </ListItemButton>
                <ListItemButton
                    onClick={onSelect}
                    selected={menuIndex === "users"}
                    component={Link}
                    to="/users"
                    button
                >
                    <ListItemIcon>
                        <PeopleAlt />
                    </ListItemIcon>
                    <ListItemText primary="Users" />
                </ListItemButton>
                <ListItemButton
                    onClick={onSelect}
                    selected={menuIndex === "vehicles"}
                    component={Link}
                    to="/vehicles"
                    button
                >
                    <ListItemIcon>
                        <TwoWheeler />
                    </ListItemIcon>
                    <ListItemText primary="Vehicles" />
                </ListItemButton>
                <ListItemButton
                    onClick={onSelect}
                    selected={menuIndex === "locations"}
                    component={Link}
                    to="/locations"
                    button
                >
                    <ListItemIcon>
                        <LocationCity />
                    </ListItemIcon>
                    <ListItemText primary="Locations" />
                </ListItemButton>
                <ListItemButton
                    onClick={onSelect}
                    selected={menuIndex === "reports"}
                    component={Link}
                    to="/reports"
                    button
                >
                    <ListItemIcon>
                        <Description />
                    </ListItemIcon>
                    <ListItemText primary="Reports" />
                </ListItemButton>
                {scheduledTasksLink}
                {statisticsLink}
                {historyLink}
                {adminLink}
            </List>
        </div>
    );
}

NavDrawerItems.propTypes = {
    onSelect: PropTypes.func,
    className: PropTypes.string,
};

NavDrawerItems.defaultProps = {
    onSelect: () => {},
};

export default NavDrawerItems;
