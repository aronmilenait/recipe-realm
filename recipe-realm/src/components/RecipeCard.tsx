interface RecipeCardProps {
  recipe: {
    uri: string;
    label: string;
    image: string;
    source: string;
    url: string;
  };
}

const RecipeCard = ({ recipe }: RecipeCardProps) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white hover:shadow-xl transition-shadow duration-300">
      <div className="relative">
        <img
          src={recipe.image}
          alt={recipe.label}
          className="w-full h-64 object-cover rounded-t"
        />
        <div className="absolute bottom-0 left-0 right-0 p-4 bg-black bg-opacity-70 text-white">
          <h3 className="text-xl font-semibold">{recipe.label}</h3>
          <p className="text-gray-300 text-sm">{recipe.source}</p>
        </div>
      </div>
      <div className="p-4">
        <a
          href={recipe.url}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-4 rounded block text-center transition duration-300 ease-in-out"
        >
          View Recipe
        </a>
      </div>
    </div>
  );
};

export default RecipeCard;
