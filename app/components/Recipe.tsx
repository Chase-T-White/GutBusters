"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

interface RecipeProps {
  publisher: string;
  image_url: string;
  title: string;
  id: string;
  setRecipeId: any;
  setShowRecipes: any;
}

const Recipe = ({
  publisher,
  image_url,
  title,
  id,
  setRecipeId,
  setShowRecipes,
}: RecipeProps) => {
  const [src, setSrc] = useState(image_url);
  return (
    <motion.li
      initial={{ y: 0 }}
      whileHover={{ y: "-2px", backgroundColor: "#6decd6" }}
      transition={{
        duration: 0.2,
        type: "linear",
        backgroundColor: { duration: 0 },
      }}
      className="flex content-center gap-4 px-8 py-4 cursor-pointer"
      tabIndex={0}
      title="Click for details"
      onClick={() => {
        setRecipeId(id);
        setShowRecipes(false);
      }}
    >
      <Image
        src={src}
        onError={() => setSrc("/images/default.jpg")}
        alt={`${title}`}
        className="shrink-0 rounded-full object-cover object-center"
        width={60}
        height={60}
      />
      <div className="text-sm">
        <h5 className="text-main-blue mb-2 line-clamp-1">{title}</h5>
        <p className="text-light">{publisher}</p>
      </div>
    </motion.li>
  );
};

export default Recipe;
