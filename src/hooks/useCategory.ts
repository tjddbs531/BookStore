import { useEffect, useState } from "react";
import type { Category } from "../models/category.model";
import { fetchCategory } from "../api/category.api";
import { useLocation } from "react-router-dom";

export const useCategory = () => {
  const location = useLocation();
  const [category, setCategory] = useState<Category[]>([]);

  const setActive = () => {
    const params = new URLSearchParams(location.search);
    const categoryParam = params.get("category_id");

    setCategory((prev) =>
      prev.map((item) => {
        if (categoryParam) {
          return {
            ...item,
            isActive: item.category_id === Number(categoryParam),
          };
        } else {
          // 쿼리에 category_id 없으면 전체 버튼 활성화
          return {
            ...item,
            isActive: item.category_id === null,
          };
        }
      })
    );
  };

  useEffect(() => {
    fetchCategory().then((category) => {
      if (!category) return;

      const categoryWithAll: Category[] = [
        {
          category_id: null,
          category_name: "전체",
        },
        ...category,
      ];

      setCategory(categoryWithAll);
      setActive();
    });
  }, []);

  useEffect(() => {
    setActive();
  }, [location.search]);

  return { category };
};
