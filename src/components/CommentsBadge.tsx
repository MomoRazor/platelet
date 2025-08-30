import { styled, Badge, BadgeProps, Box } from "@mui/material";
import { Message } from "@mui/icons-material";

const StyledBadge = styled(Badge)<BadgeProps>(({ theme }) => ({
    "& .MuiBadge-badge": {
        right: -6,
        top: 9,
        padding: "0 4px",
        width: 20,
        height: 20,
        background: "rgba(255, 255, 255, 0.0)",
        // @ts-ignore
        color: theme.palette.text.primary,
    },
}));

type CommentsBadgeProps = {
    count: number;
    iconSize?: number;
};

const CommentsBadge: React.FC<CommentsBadgeProps> = ({
    count,
    iconSize = 20,
}) => {
    if (count > 0) {
        return (
            <Box>
                <StyledBadge badgeContent={count} color="secondary">
                    <Message sx={{ width: iconSize, height: iconSize }} />
                </StyledBadge>
            </Box>
        );
    } else {
        return <div></div>;
    }
};

export default CommentsBadge;
