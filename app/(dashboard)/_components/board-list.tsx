import React from "react";

import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";


import { EmptySearch } from "./empty-search";
import { EmptyFavourites } from "./empty-favorites";
import { EmptyBoards } from "./empty-board";


useQuery
interface BoardListProps {
  orgId: string;
  query: {
    search?: string;
    favorites?: string;
  }  
}
export function BoardList({ orgId, query }: BoardListProps) {
  const data = useQuery(api.boards.get, { orgId, ...query });

  // const data = []

  if (data === undefined) {
    return <div> Loading ...</div>
  }

  if (!data?.length && query.search) {
    return <EmptySearch />
  }

  if (!data?.length && query.favorites) {
    return <EmptyFavourites />;
  }

  if (!data?.length) {
    return <EmptyBoards />;
  }

  return <div>{JSON.stringify(data || "aadad")}</div>;
};

export default BoardList;
