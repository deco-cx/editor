export const ondemand = true;
export const title = "Welcome to deco editor";

export default (data: { title: string }) => (
  <>
    <h1>{data.title}</h1>
    <p>Welcome to deco</p>
  </>
);
