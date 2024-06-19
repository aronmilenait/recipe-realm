import { useState, useEffect } from "react";

interface Recipe {
  uri: string;
  label: string;
  image: string;
  source: string;
  url: string;
}

interface Hit {
  recipe: Recipe;
}

interface RecipesResponse {
  hits: Hit[];
}

const API_ID = "d0e3b42f";
const API_KEY = "b61d418f2b7834d8bfdb8bb32162fa60";
const BASE_URL = "https://api.edamam.com/api/recipes/v2";

const useRecipes = (query: string) => {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    const fetchRecipes = async () => {
      if (!query) return;

      setLoading(true);
      setError("");

      try {
        const response = await fetch(
          `${BASE_URL}?q=${query}&app_id=${API_ID}&app_key=${API_KEY}&type=public`
        );

        if (!response.ok) {
          throw new Error("Failed to fetch recipes");
        }

        const data: RecipesResponse = await response.json();
        setRecipes(data.hits.map((hit) => hit.recipe));
        setLoading(false);
      } catch (err) {
        console.error("Fetch Error:", err);
        setError("Failed to fetch recipes");
        setLoading(false);
      }
    };

    fetchRecipes();
  }, [query]);

  return { recipes, loading, error };
};

export default useRecipes;
