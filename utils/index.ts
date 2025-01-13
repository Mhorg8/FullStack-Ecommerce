import { client } from "@/sanity/lib/client";

export const fetchData = async (
  params: {
    variant: string;
  },
  query: string,
  setLoading: (status: boolean) => void
) => {
  setLoading(true);
  try {
    const response = await client.fetch(query, params);

    const data = await response;
    return data;
  } catch (error) {
    console.log(`Product fetching error ${error}`);
  } finally {
    setLoading(false);
  }
};
