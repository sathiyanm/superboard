"use client";

import { useOrganizationList } from "@clerk/clerk-react";
import React from "react";
import { Item } from "./item";

const JoinedOrganizations = () => {
  const { userMemberships } = useOrganizationList({
    userMemberships: {
      infinite: true,
    },
  });

  return (
    <ul className="space-y-4">
      {userMemberships.data?.map((mem) => (
        <Item
          key={mem.organization.id}
          id={mem.organization.id}
          name={mem.organization.name}
          imageUrl={mem.organization.imageUrl}
        />
      ))}
    </ul>
  );
};

export default JoinedOrganizations;
