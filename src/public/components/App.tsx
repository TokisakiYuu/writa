import React, {
  FC,
  ReactNode,
  CSSProperties,
  useState
} from "react";

enum ButtonVariant {
  Default,
  Primary
}

// Props of button aren't declared as interface or type alias
// or maybe they are declared but library author didn't export them
const Button: FC<{
  variant?: ButtonVariant;
  children: ReactNode;
  onClick?: () => void;
  style?: CSSProperties;
}> = ({ variant, style, ...rest }) => (
  <button
    style={Object.assign(
      variant === ButtonVariant.Primary
        ? {
            background: "#4834d4",
            color: "white"
          }
        : {},
      style
    )}
    {...rest}
  />
);

const AlertButton: FC<AlertButtonProps> = props => (
  <Button onClick={() => {
    alert("你好我是有鱼");
  }} {...props} />
);

// But we can get them using React.ComponentProps
type ButtonProps = React.ComponentProps<typeof Button>;
type AlertButtonProps = Omit<ButtonProps, "onClick">;

const App: FC<{
  text?: string;
  view?: string;
  id?: string;
  query?: unknown;
}> = ({ text, view, id, query }) => {
  const [count, setCount] = useState(1);
  return (
    <>
      <Button onClick={() => setCount(count + 1)}>你点击了{count}次</Button>
      <AlertButton variant={ButtonVariant.Primary}>{text || "primary"}</AlertButton>
      <span>view: {view || "无"}</span>
      <span>id: {id || "无"}</span>
      <span>query: {JSON.stringify(query) || "无"}</span>
    </>
  );
};

export default App;