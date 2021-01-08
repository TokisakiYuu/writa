import React, {
  FC,
  ReactNode,
  CSSProperties,
  useState
} from "react";
import { hydrate } from "react-dom";

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
    alert("Hello");
    console.log("你好");
  }} {...props} />
);

// But we can get them using React.ComponentProps
type ButtonProps = React.ComponentProps<typeof Button>;
type AlertButtonProps = Omit<ButtonProps, "onClick">;

const App: FC<{
  text?: string;
}> = ({ text }) => {
  const [count, setCount] = useState(1);
  return (
    <>
      <Button onClick={() => setCount(count + 1)}>你点击了{count}次</Button>
      <AlertButton variant={ButtonVariant.Primary}>{text || "primary"}</AlertButton>
    </>
  );
};

export default App;

if("document" in globalThis) {
  const rootElement = document.getElementById("root");
  hydrate(<App />, rootElement);
}
