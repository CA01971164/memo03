import { ChangeEvent, useState } from "react";
import { MemoList } from "./MemoList";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

function App() {
  const [text, setText] = useState<string>("");

  const [items, setItems] = useState<string[]>([]);

  const handleClick = () => {
    setItems((prevItems: string[]) => [...prevItems, text]);
    setText("");
  };

  const onDelete = (index: number) => {
    const newItems = [...items.slice(0, index), ...items.slice(index + 1)];
    setItems(newItems);
  };

  const changeText = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  return (
    <Container>
      <Box mt={4}>
        <Typography variant="h4" component="h1" gutterBottom>
          メモアプリ
        </Typography>
        <TextField
          type="text"
          label="メモを追加"
          variant="outlined"
          fullWidth
          margin="normal"
          value={text}
          onChange={changeText}
        />
        <Button
          variant="contained"
          color="primary"
          onClick={handleClick}
          fullWidth
        >
          追加
        </Button>
        <MemoList items={items} onDelete={onDelete} />
      </Box>
    </Container>
  );
}

export default App;
