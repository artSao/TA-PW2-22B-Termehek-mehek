import { category } from "@/types";

const URL = `${process.env.PUBLIC_API_URL}/categories`

const getCategories = async (): Promise<category[]> => {

    const res = await fetch(URL);

    

    return res.json()
  } 

export default getCategories;
