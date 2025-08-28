
const API_BASE_URL = "https://mohnyin.com/api/v1";
export const fetchCategories = async () => {
  try {
    // simulate network delay
    await new Promise((resolve) => setTimeout(resolve, 3000));
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

export const fetchArticles = async () => {
  try {
    // simulate network delay
    await new Promise((resolve) => setTimeout(resolve, 3000));
    const response = await fetch(`${API_BASE_URL}/articles?project_id=1`);
    if (!response.ok) {
      throw new Error(`API call failed with status: ${response.status}`);
    }
    const data = await response.json();
    return   data.data ;
  } catch (error) {
    console.error("Failed to fetch articles:", error);
    return null;
  }
};

export const fetchArticleDetail = async (id) => {
  try {
    const response = await fetch(`${API_BASE_URL}/articles/${id}`);
    if (!response.ok) {
      throw new Error(`API call failed with status: ${response.status}`);
    }
    const data = await response.json();
    return data.data;
  } catch (error) {
    console.error(`Failed to fetch article with ID ${id}:`, error);
    return null;
  }
};

export const fetchArticlesByCategory = async (categoryId) => {
  try {
    const response = await fetch(`${API_BASE_URL}/articles?category_id=${categoryId}&project_id=1`);
    if (!response.ok) {
      throw new Error(`API call failed with status: ${response.status}`);
    }
    const data = await response.json();
    return data.data;
  } catch (error) {
    console.error(`Failed to fetch articles for category ID ${categoryId}:`, error);
    return null;
  }
};
export const fetchCategory = async (id) => {
  try {
    const response = await fetch(`${API_BASE_URL}/categories/${id}`);
    if (!response.ok) {
      throw new Error(`API call failed with status: ${response.status}`);
    }
    const data = await response.json();
    return data.data;
  } catch (error) {
    console.error(`Failed to fetch category with ID ${id}:`, error);
    return null;
  }
};