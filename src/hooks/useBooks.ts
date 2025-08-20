import { useLocation } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { fetchBooks } from "../api/books.api";
import { QUERYSTRING } from "../constants/querystring";
import { LIMIT } from "../constants/pagination";

export const useBooks = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);

  const categoryId = params.get(QUERYSTRING.CATEGORY_ID);
  const news = params.get(QUERYSTRING.NEWS);
  const currentPage = params.get(QUERYSTRING.PAGE);

  const {
    data: booksData,
    isLoading: isBooksLoading,
    isFetching,         
  } = useQuery({
    queryKey: ["books", { q: location.search }], 
    queryFn: () =>
      fetchBooks({
        category_id: categoryId ? Number(categoryId) : undefined,
        news: news ? true : undefined,
        currentPage: currentPage ? Number(currentPage) : 1,
        limit: LIMIT,
      }),
    staleTime: 60_000,     
    gcTime: 5 * 60_000,   
    keepPreviousData: true 
  });

  return {
    books: booksData?.books ?? [],
    pagination: booksData?.pagination,
    isEmpty: (booksData?.books?.length ?? 0) === 0,
    isBooksLoading,
    isFetching,
  };
};
