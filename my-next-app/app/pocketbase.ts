import PocketBase from "pocketbase";

export const pb = new PocketBase(`http://127.0.0.1:8090`);
pb.autoCancellation(false);

export const dynamic = "auto",
  dynamicParams = true,
  revalidate = 0,
  fetchCache = "auto",
  runtime = "nodejs",
  preferredRegion = "auto";

export async function createTodo(todo: string) {
  const data = { todo: todo };
  await pb.collection("todos").create(data);
}

export async function getTodos() {
  let res = await pb.collection("todos").getFullList(2, {
    sort: "-created",
  });
  return res;
}

export async function deleteTodos(id: string) {
  await pb.collection("todos").delete(id);
}

export async function completedTodos(id: string, completed: boolean) {
  const data = { completed: !completed };
  await pb.collection("todos").update(id, data);
}

export async function user(username: string, password: string) {
  const data = {
    username: username,
    password: password,
  };
  await pb.collection('users').create(data);
}
export async function signup(username: string, password: string) {
  const authData = await pb.collection('users').authWithPassword(
     username,
     password
);
}
