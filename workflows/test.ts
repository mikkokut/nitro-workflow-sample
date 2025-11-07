import say from "../lib/helpers";

async function sayHello() {
    "use step";

    return { id: crypto.randomUUID(), message: say() };
}


export async function test() {
  "use workflow";

  const user = await sayHello();

  return user
}
