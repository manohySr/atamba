import style from "./space.module.css";

export default function Space({
  totalSpace,
  usedSpace,
}: {
  totalSpace: string;
  usedSpace: string;
}) {
  return (
    <div className={style.container}>
      <div className={style.space_title_container}>
        <p className={style.space_title_font}>Your space</p>
      </div>
      <div className={style.space_image}>
        <CircleSpace spaceUsedInPercent="80" />
      </div>
      <div className={style.space_description}>
        <div className={style.space}>
          <p className={style.space_title}>Total space</p>
          <p className={style.space_amount}>{totalSpace}</p>
        </div>
        <div className={style.space}>
          <p className={style.space_title}>Used space</p>
          <p className={style.space_amount}>{usedSpace}</p>
        </div>
      </div>
    </div>
  );
}

function CircleSpace({
  spaceUsedInPercent = "0",
}: {
  spaceUsedInPercent: string;
}) {
  return (
    <>
      <div className={style.flex_wrapper}>
        <div className={style.single_chart}>
          <svg viewBox="0 0 36 36" className={`${style.circular_chart} blue`}>
            <path
              className={style.circle_bg}
              d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
            />
            <path
              className={style.circle}
              stroke-dasharray={`${spaceUsedInPercent} 100`}
              d="M18 2.0845
                a 15.9155 15.9155 0 0 1 0 31.831
                a 15.9155 15.9155 0 0 1 0 -31.831"
            />
            <text x="18" y="20.35" className={style.percentage}>
              {spaceUsedInPercent}%
            </text>
          </svg>
        </div>
      </div>
    </>
  );
}
