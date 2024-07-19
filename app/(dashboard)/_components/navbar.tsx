"use client";
import { OrganizationSwitcher, UserButton, useOrganization } from "@clerk/clerk-react";
import React from "react";
import SearchInput from "./search-input";
import InviteButton from "./invite-button";

const Navbar = () => {
  const { organization } = useOrganization()
  return (
    <div className="flex items-center gap-x-5 p-5 bg-green-500">
      <div className="hidden lg:flex lg:flex-1">
        <SearchInput />
      </div>
      <div className="block lg:hidden flex-1">
        <OrganizationSwitcher
          appearance={{
            elements: {
              rootBox: {
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
                maxWidth:"370px"
              },
              organizationSwitcherTrigger: {
                padding: "6px",
                width: "100%",
                borderRadius: "8px",
                border: "1px solid #e5e7eb",
                justifyContent: "space-between",
                backgroundColor: "white",
              },
            },
          }}
          hidePersonal
        ></OrganizationSwitcher>
      </div>
      {organization && <InviteButton />}
      <UserButton></UserButton>
    </div>
  );
};

export default Navbar;
