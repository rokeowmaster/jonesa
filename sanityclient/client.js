import { createClient} from "@sanity/client";

const config = {
  projectId: "u48c3qk4",
  dataset: "production",
  apiVersion: "2025-03-26",
  useCdn: false,
};

const client = createClient(config);

export default client;