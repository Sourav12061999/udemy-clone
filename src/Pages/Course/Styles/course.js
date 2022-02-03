const Main = {
  box: {
    width: "90%",
    margin: "auto",
    mt: 3,
    display: "flex",
  },
  leftContent: {
    width: "60%",
    pr: "2%",
  },
};

const blackBox = {
  box: {
    width: "100%",
    height: 300,
    backgroundColor: "black",
    boxSizing: "border-box",
    padding: "2%",
    color: "white",
    display: "flex",
  },
  textBox: {
    width: "60%",
  },
  rating: {
    display: "flex",
  },
  ratingText: {
    mr: 1,
    color: "#FFD700",
  },
  image: {
    width: "30%",
    ml: 6,
  },
};
const contentcard = {
  card: {
    width: 400,
  },
};
const description = {
  heading: {
    ml: 2,
    mb: 2,
  },
  card: {
    mt: 2,
    mb: 2,
  },
};
const list_description = {
  card: {
    width: "100%",
  },
};

export { Main, blackBox, contentcard, list_description, description };
