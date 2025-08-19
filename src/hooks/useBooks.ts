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
    isFetching,           // 필요하면 로딩 스피너 미세제어용
  } = useQuery({
    queryKey: ["books", { q: location.search }], // v5 객체 인자
    queryFn: () =>
      fetchBooks({
        category_id: categoryId ? Number(categoryId) : undefined,
        news: news ? true : undefined,
        currentPage: currentPage ? Number(currentPage) : 1,
        limit: LIMIT,
      }),
    staleTime: 60_000,     // 선택: 1분 동안 fresh
    gcTime: 5 * 60_000,    // 선택: 5분 동안 캐시 유지 (v4의 cacheTime)
    keepPreviousData: true // 페이지 이동 시 이전 데이터 유지(선택)
  });

  return {
    books: booksData?.books ?? [],
    pagination: booksData?.pagination,
    isEmpty: (booksData?.books?.length ?? 0) === 0,
    isBooksLoading,
    isFetching,
  };
};
