import People from "@mui/icons-material/People"
import { Link, ListItemButton, ListItemIcon, ListItemText } from "@mui/material"

export default function ProfileList() {
  return (
    <Link href="/admin/dashboard" underline="none">
      <ListItemButton
        // key={item.label}
        sx={{ py: 0, minHeight: 32, color: "rgba(255,255,255,.8)" }}
      >
        <ListItemIcon sx={{ color: "inherit" }}>
          <People />
        </ListItemIcon>
        <ListItemText
          primary="My Profile"
          primaryTypographyProps={{
            fontSize: 14,
            fontWeight: "medium",
          }}
        />
      </ListItemButton>
    </Link>
  )
}