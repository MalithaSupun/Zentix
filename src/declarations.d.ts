declare module "*.jpg";
declare module "*.glb";
declare module "*.png" {
    const value: string;
    export default value;
}