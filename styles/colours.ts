// https://coolors.co/0081a7-00afb9-fdfcdc-fed9b7-f07167

interface Colours {
    lighter: string;
    main: string;
    darker: string;
}

export interface AppColours {
    text: Colours;
    primary: Colours;
    secondary: Colours;
}

export const lightColours: AppColours = {
    text: {
        lighter: "lightgray",
        main: "#333333",
        darker: "black",
    },
    primary: {
        lighter: "#FDFCDC",
        main: "#FED9B7",
        darker: "#F07167",
    },
    secondary: {
        lighter: "lightgray",
        main: "#00AFB9",
        darker: "#0081A7",
    },
}

export const darkColours: AppColours = {
    text: {
        lighter: "lightgray",
        main: "#333333",
        darker: "black",
    },
    primary: {
        lighter: "#FDFCDC",
        main: "#FED9B7",
        darker: "#F07167",
    },
    secondary: {
        lighter: "lightgray",
        main: "#00AFB9",
        darker: "#0081A7",
    },
}
