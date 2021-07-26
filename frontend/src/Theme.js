import {createTheme} from "@material-ui/core/styles";

const easyBlue = "#283E56";
const easyBeige = "#EEEBE5";
const easyYellow = "#FFF8DD";

export default createTheme({
    palette: {
        primary: {
            main: easyBlue
        },
        secondary: {
            main: easyBeige
        },
        common: {
            yellow: easyYellow
        }

    }
})