"use client";

import { DropdownMenuContentProps } from "@radix-ui/react-dropdown-menu";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";

import { api } from "@/convex/_generated/api";
import { useApiMutation } from "@/hooks/useApiMutation";

import { Link2, Pencil, Trash2 } from "lucide-react";
import { toast } from "sonner";
import { Button } from "./ui/button";
import ConfirmModal from "./cofirm-modal";
import { useRenameModal } from "@/store/useRenameModal";

interface ActionProps {
  children: React.ReactNode;
  side: DropdownMenuContentProps["side"];
  sideOffset?: DropdownMenuContentProps["sideOffset"];
  id: string;
  title: string;
}

export const Actions = ({
  children,
  side,
  sideOffset,
  id,
  title,
}: ActionProps) => {
  const { onOpen } = useRenameModal();
  const { mutate, isLoading } = useApiMutation(api.board.remove);

  const onCopyLink = () => {
    navigator.clipboard
      .writeText(`${window.location.origin}/board/${id}`)
      .then(() => {
        toast("copied to clipbaord");
      })
      .catch(() => {
        toast("failed to copy");
      });
  };
  const onDelete = () => {
    mutate({ id })
      .then(() => {
        toast(`Board ${id} has been delelted`);
      })
      .catch(() => {
        toast(`Board ${id} Unable to delete some error`);
      });
  };
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>{children}</DropdownMenuTrigger>
      <DropdownMenuContent
        title={title}
        className="w-60"
        side={side}
        sideOffset={sideOffset}
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <DropdownMenuItem onClick={onCopyLink} className="p-3 cursor-pointer">
          <Link2 className="h-4 w-4 mr-2" />
          Copy to clipboard
        </DropdownMenuItem>
        <DropdownMenuItem
          className="p-3 cursor-pointer"
          onClick={() => onOpen(id, title)}
        >
          <Pencil className="h-4 w-4 mr-2" />
          Rename
        </DropdownMenuItem>

        {/* <DropdownMenuItem className="p-3 cursor-pointer"> */}
          <ConfirmModal
            onConfirm={onDelete}
            disabled={isLoading}
            header={"Are you sure?"}
            description={
              "This action cannot be undone. This will permanently delete your board and remove your data from our servers."
            }
          >
            <Button variant={"ghost"} className="p-3 cursor-pointer text-sm w-full justify-start font-normal">
              Delete
            </Button>
          </ConfirmModal>
        {/* </DropdownMenuItem> */}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
