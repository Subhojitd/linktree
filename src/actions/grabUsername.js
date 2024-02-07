"use server";

import { Page } from "@/models/Page";

export default async function grabUserName(formData) {
  const username = formData.get("username");
  return await Page.create({ uri: username });
}
