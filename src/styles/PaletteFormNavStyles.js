import { DRAWER_WIDTH } from '../constants';
import sizes from "./sizes";
const drawerWidth = DRAWER_WIDTH;

const styles = theme => ({
  root: {
    display: "flex",

  },
  hide: {
    display: "none"
  },
  appBar: {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: "64px",
    // [sizes.down("lg")]: {
    // },
    // [sizes.down("md")]: {
    // },
    // [sizes.down("xs")]: {
    //   flexDirection: "column",
    // },

  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  title: {
    [sizes.down("md")]: {
      fontSize: "17px"

    }

  },
  menuButton: {
    marginLeft: 12,
    marginRight: 20
  },
  navBtns: {
    marginRight: "1rem",
    [sizes.down("xs")]: {
      marginRight: "0.2rem",
    },

  },
  button: {
    margin: "0 0.5rem",
    [sizes.down("md")]: {
      margin: "0 0.2rem",
      padding: "0.2rem"
    },


  }
});

export default styles;