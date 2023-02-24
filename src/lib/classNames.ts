const cn = (...classes: Array<string | false | undefined | 0>) =>
  classes.filter(Boolean).join(" ");

export default cn;
