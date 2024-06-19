import { useState } from "react";
import Searchbar from "./components/Searchbar";
import RecipeCard from "./components/RecipeCard";
import useRecipes from "./hooks/useRecipes";
import Footer from "./components/Footer";

function App() {
  const [query, setQuery] = useState("");
  const { recipes, loading, error } = useRecipes(query);
  const [hasSearched, setHasSearched] = useState(false);

  const handleSearch = (query: string) => {
    setQuery(query);
    setHasSearched(true);
  };

  const renderLoading = () => (
    <div className="flex justify-center mt-8">
      <p className="text-lg text-orange-700 font-semibold">Loading...</p>
    </div>
  );

  const renderError = () => (
    <div className="flex justify-center mt-8">
      <p className="text-lg text-red-700 font-semibold">Error: {error}</p>
    </div>
  );

  const renderNoResults = () => (
    <div className="flex justify-center mt-8">
      <p className="text-lg text-orange-700">
        No recipes found. Try a different search term.
      </p>
    </div>
  );

  const renderWelcomeMessage = () => (
    <div className="flex flex-col items-center mt-8">
      <p className="text-lg text-center text-orange-800 max-w-xl mb-4">
        Welcome to Recipe Realm! Explore a world of culinary delights with
        options for every diet, from vegan and gluten-free to keto and beyond.
      </p>
      <img
        src="/welcome-image.jpg"
        alt="Two friends cooking"
        className="w-full max-w-xl h-auto rounded-lg shadow-md"
      />
    </div>
  );

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-orange-100 to-orange-200">
      <div className="container mx-auto px-4 py-8 flex-grow">
        <header className="text-center mb-12">
          <h1 className="text-6xl font-extrabold text-orange-800 mb-2">
            Recipe Realm
          </h1>
          <p className="text-2xl text-orange-800 max-w-2xl mx-auto">
            Discover delicious recipes from around the world.
          </p>
        </header>

        <Searchbar onSearch={handleSearch} />

        {loading && renderLoading()}
        {error && renderError()}
        {recipes.length === 0 &&
          !loading &&
          query !== "" &&
          hasSearched &&
          renderNoResults()}
        {query === "" && !hasSearched && renderWelcomeMessage()}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {recipes.map((recipe) => (
            <RecipeCard key={recipe.uri} recipe={recipe} />
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default App;
