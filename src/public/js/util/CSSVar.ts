// eslint-disable-next-line @typescript-eslint/no-explicit-any
function Var(propName: string, defaultValue: any): (props: any) => string {
  return props => propName in props
    ? props[propName]
    ? String(props[propName])
    : defaultValue
    : defaultValue;
}

export default Var;
