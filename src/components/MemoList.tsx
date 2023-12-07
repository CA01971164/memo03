import { FC } from "react";
import { List, ListItem, Button } from "@mui/material";

type MemoListProps = {
  items: string[];
  onDelete: (index: number) => void;
};

export const MemoList: FC<MemoListProps> = ({ items, onDelete }) => {
  return (
    <List>
      {items.map((item, index) => (
        <ListItem key={index}>
          {item}
          <Button onClick={() => onDelete(index)} variant="outlined">
            削除
          </Button>
        </ListItem>
      ))}
    </List>
  );
};
