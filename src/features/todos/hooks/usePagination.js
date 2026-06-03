import { useSearchParams } from "react-router";

export const usePagination = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const page = Number(searchParams.get("page") || 1);

  const handleNextPageList = () => {
    const next = new URLSearchParams(searchParams);

    next.set("page", page + 1);
    setSearchParams(next);
  };

  const handlePrevPageList = () => {
    if (page <= 1) return;
    const prev = new URLSearchParams(searchParams);
    prev.set("page", page - 1);
    setSearchParams(prev);
  };

  return { page, handleNextPageList, handlePrevPageList };
};
