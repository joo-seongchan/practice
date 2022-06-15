export const Menu = ({ car }) => {
  return (
    <>
      <h1>My Dream car</h1>
      <ul>
        <li>
          {car[0].car}는 {car[0].price} 부터시작
        </li>
        <li>
          {car[1].car}는 {car[1].price} 부터시작
        </li>
        <li>
          {car[2].car}는 {car[2].price} 부터시작
        </li>
        <li>
          {car[3].car}는 {car[3].price} 부터시작
        </li>
        <li>
          {car[4].car}는 {car[4].price} 부터시작
        </li>
      </ul>
    </>
  );
};
