declare module "beezy" {
  type Point = number[];
  type Handlers = Point[];
  type Calculator = (time: number) => Point;
  const Builder: (handlers: Handlers) => Calculator;
  export default Builder;
}
