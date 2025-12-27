import tailwindcss from "@tailwindcss/postcss";
import autoprefixer from "autoprefixer";
import tailwindConfig from "./tailwind.config.cjs";

export default {
  plugins: [
    tailwindcss({ config: tailwindConfig }),
    autoprefixer(),
  ],
};
