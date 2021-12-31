export function RedBallList({ children }) {
  return (
    <ul className="text-base leading-loose font-droid text-lightBlack text-center mb-14">
      {children}
    </ul>
  );
}

export function RedBall() {
  return (
    <div className="w-redBall h-redBall bg-superDarkRed rounded-full mr-auto ml-auto mt-3 mb-3"></div>
  );
}
