import { useLocation } from "react-router-dom";
import { useInfiniteQuery } from "@tanstack/react-query";
import { fetchBooks } from "../api/books.api";
import { QUERYSTRING } from "../constants/querystring";
import { LIMIT } from "../constants/pagination";

export const useBooksInfinite = () => {
  const location = useLocation();

  const getBooks = ({ pageParam }: { pageParam: number }) => {
    const params = new URLSearchParams(location.search);

    const category_id = params.get(QUERYSTRING.CATEGORY_ID)
      ? Number(params.get(QUERYSTRING.CATEGORY_ID))
      : undefined;

    const news = params.get(QUERYSTRING.NEWS) ? true : undefined;

    return fetchBooks({
      category_id,
      news,
      limit: LIMIT,
      currentPage: pageParam,
    });
  };

  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetching: isBooksLoading,
  } = useInfiniteQuery({
    queryKey: ["books", location.search],
    queryFn: ({ pageParam = 1 }) => getBooks({ pageParam }),
    getNextPageParam: (lastPage) => {
      const totalCount = lastPage.pagination.totalCount;
      const currentPage = lastPage.pagination.currentPage;
      const totalPages = Math.ceil(totalCount / LIMIT);

      return currentPage < totalPages ? currentPage + 1 : undefined;
    },
  });

  const books = data ? data.pages.flatMap((page) => page.books) : [];
  const pagination = data ? data.pages[data.pages.length - 1].pagination : undefined;
  const isEmpty = books.length === 0;

  return {
    books,
    pagination,
    isEmpty,
    isBooksLoading,
    fetchNextPage,
    hasNextPage,
  };
};
