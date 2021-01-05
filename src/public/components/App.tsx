import * as React from "react";
import { render } from "react-dom";

enum ButtonVariant {
  Default,
  Primary
}

// Props of button aren't declared as interface or type alias
// or maybe they are declared but library author didn't export them
const Button: React.FC<{
  variant?: ButtonVariant;
  children: React.ReactNode;
  onClick?: () => void;
  style?: React.CSSProperties;
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

const AlertButton: React.FC<AlertButtonProps> = props => (
  <Button onClick={() => alert("Hello")} {...props} />
);

// But we can get them using React.ComponentProps
type ButtonProps = React.ComponentProps<typeof Button>;
type AlertButtonProps = Omit<ButtonProps, "onClick">;

function App() {
  return (
    <div>
      <Button>default</Button>
      <AlertButton variant={ButtonVariant.Primary}>primary</AlertButton>
    </div>
  );
}

const rootElement = document.getElementById("root");
render(<App />, rootElement);
