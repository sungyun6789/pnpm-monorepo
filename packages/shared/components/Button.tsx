type Props = {
  message: string;
};

const Button = ({ message }: Props) => {
  const onClick = () => alert(message);

  return <button onClick={onClick}>버튼</button>;
};

export default Button;
