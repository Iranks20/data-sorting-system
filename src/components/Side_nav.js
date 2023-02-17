import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

import {
	CollectionsBookmark,
	Edit,
	Feedback,
	PermMedia,
	UploadFile,
	Work,
} from "@mui/icons-material";

const drawWidth = 220;

function Side_nav() {
	const [mobileViewOpen, setMobileViewOpen] = React.useState(false);

	const handleToggle = () => {
		setMobileViewOpen(!mobileViewOpen);
	};

	const responsiveDrawer = (
		<div style={{ backgroundColor: "#09212E",
			height: "100%" }}>
			<Toolbar />
			<Divider />

						<List sx={{ backgroundColor: "#09212E" }}>
				<ListItemButton sx={{ color: "white" }}>
					<ListItemIcon sx={{ color: "white" }}>
					</ListItemIcon>
				</ListItemButton>
				<ListItemButton sx={{ color: "white" }} href="/dashboard">
					<ListItemIcon sx={{ color: "white" }}>
						{<CollectionsBookmark />}
					</ListItemIcon>
					<ListItemText primary={"DASHBOARD"} />
				</ListItemButton>
				
			</List>
			<Divider />

			<List sx={{ backgroundColor: "#09212E" }}>
				<ListItemButton sx={{ color: "white" }}>
					<ListItemIcon sx={{ color: "white" }}>
						
					</ListItemIcon>
					<ListItemText primary={"INCIDENCES"} />
				</ListItemButton>
				<ListItemButton sx={{ color: "white" }} href="/daily_incidence">
					<ListItemIcon sx={{ color: "white" }}>
						{<CollectionsBookmark />}
					</ListItemIcon>
					<ListItemText primary={"Daily Incidences"} />
				</ListItemButton>
				<ListItemButton sx={{ color: "white" }} href="/weekly_incidence">
					<ListItemIcon sx={{ color: "white" }}>
						{<UploadFile />}
					</ListItemIcon>
					<ListItemText primary={"Weekly Incidences"} />
				</ListItemButton>
				<ListItemButton sx={{ color: "white" }} href="/monthly_incidence">
					<ListItemIcon sx={{ color: "white" }}>
						{<Edit />}
					</ListItemIcon>
					<ListItemText primary={"Monthly Incidences"} />
				</ListItemButton>
			</List>
			<Divider />
			<List>
				<ListItemButton sx={{ color: "white" }}>
					<ListItemIcon sx={{ color: "white" }}>
					</ListItemIcon>
					<ListItemText primary={"REPORTERS"} />
				</ListItemButton>
				<ListItemButton sx={{ color: "white" }} href="/daily_reporters">
					<ListItemIcon sx={{ color: "white" }}>
						{<Work />}
					</ListItemIcon>
					<ListItemText primary={"Daily Reporters"} />
				</ListItemButton>
				<ListItemButton sx={{ color: "white" }} href="/weekly_reporters">
					<ListItemIcon sx={{ color: "white" }}>
						{<PermMedia />}
					</ListItemIcon>
					<ListItemText primary={"Weekly Reporters"} />
				</ListItemButton>
				<ListItemButton sx={{ color: "white" }} href="/monthly_reporters">
					<ListItemIcon sx={{ color: "white" }}>
						{<Feedback />}</ListItemIcon>
					<ListItemText primary={"Monthly Reporters"} />
				</ListItemButton>
			</List>
			<Typography
				sx={{
					backgroundColor: "blue",
					color: "white",
					borderRadius: 10,
					textAlign: "center",
					padding: 1,
					margin: 2,
				}}
			>
				Log Out
			</Typography>
		</div>
	);

	return (
		<div >
			<div>
				<Box sx={{ display: "flex" }}>
					<CssBaseline />
					<AppBar
						position="fixed"
						sx={{
							width: { sm: `calc(100% - ${drawWidth}px)` },
							ml: { sm: `${drawWidth}px` },
							backgroundColor: "2daab8",
						}}
					>
						<Toolbar>
							<IconButton
								color="inherit"
								edge="start"
								onClick={handleToggle}
								sx={{ mr: 2, display: { sm: "none" } }}
							>
								<MenuIcon />
							</IconButton>
							<Typography variant="h6" width="700px">
								Welcome To Admin Portal
							</Typography>
							<ListItemButton sx={{ color: "white", backgroundColor: "red" }} href="/home">
								<ListItemIcon sx={{ color: "white" }}>
								</ListItemIcon>
								<ListItemText primary={"ADD NEW INCIDENCE/REPORTERS"} />
							</ListItemButton>
						</Toolbar>
						
					</AppBar>
					<Box
						component="nav"
						sx={{ width: { sm: drawWidth },
							flexShrink: { sm: 0 } }}
					>
						<Drawer
							variant="temporary"
							open={mobileViewOpen}
							onClose={handleToggle}
							ModalProps={{
								keepMounted: true,
							}}
							sx={{
								display: { xs: "block", sm: "none" },
								"& .MuiDrawer-paper": {
									boxSizing: "border-box",
									width: drawWidth,
								},
							}}
						>
							{responsiveDrawer}
						</Drawer>
						<Drawer
							variant="permanent"
							sx={{
								display: { xs: "none", sm: "block" },
								"& .MuiDrawer-paper": {
									boxSizing: "border-box",
									width: drawWidth,
								},
							}}
							open
						>
							{responsiveDrawer}
						</Drawer>
					</Box>
				</Box>
			</div>
		</div>
	);
}

export default Side_nav;
