import { createClient } from "next-sanity";

export const client = createClient({
  projectId: "pl3n6tnx",
  dataset: "production",
  apiVersion: "2023-10-01",
  token: process.env.SANITY_API_TOKEN,
  useCdn: false,
});