const isMocked: boolean = true;
const API_URL: string = isMocked
  ? "src/mocks/data.json"
  : "https://api.example.com/data";

export async function fetchData(): Promise<any> {
  try {
    const response = await fetch(API_URL);

    const data = await response.json();

    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
}
