import classes from "./LineDetail.module.css";

function LineDetail({}) {
  return (
    <div className={classes["detail"]}>
      <div className={classes["detail__line"]} />
      <div className={classes["detail__rose"]} />
    </div>
  );
}

export default LineDetail;
