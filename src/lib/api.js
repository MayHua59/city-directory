
const API_BASE_URL = "https://mohnyin.com/api/v1";
export const fetchCategories = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/categories?project_id=1`);
    if (!response.ok) {
      throw new Error(`API call failed with status: ${response.status}`);
    }
    const data = await response.json();
    return data.data; // Return only the 'data' array
  } catch (error) {
    console.error("Failed to fetch categories:", error);
    
    return null;
  }
};