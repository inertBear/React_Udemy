import "./Card.css";

/*
 * Note: "props.children" is ALWAYS included in props, even if you don't explicitly state it.
 * the value of "children" is the content between the opening and closing tags of a component
 *
 * by including the children here, we are saying we want the value of this div to be the children of the tag.
 * Without this, the items between the <Card> tags will not be displayed on screen
 */

/*
 * NOTE: By including the className in the props, we can propagate the classNames
 * used by the 'props.children' to the way that "Card" displays them
 */

// This is called 'Composition'- This can be used to abstract wrappers around different components to reduce duplicate code
function Card(props) {
  const classes = "card " + props.className;
  return <div className={classes}>{props.children}</div>;
}

export default Card;
