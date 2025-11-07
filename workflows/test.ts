import say from "../lib/helpers";

async function createUser(email: string) {
    "use step";

    console.log(say());

    return { id: crypto.randomUUID(), email };
}


export async function test() {
  "use workflow";

  const user = await createUser("test@example.com");

  return user
}
