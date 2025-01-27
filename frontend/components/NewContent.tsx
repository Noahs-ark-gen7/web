import React from "react";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import { addContent } from "../firebase/firestore/contents";

export default () => {
    const [content, setContent] = React.useState<string>("");
    const handleSubmit = async () => {
        await addContent()
    }

    return (
        <div>
            <form>
                <TextField
                    id="standard-basic"
                    label="Standard"
                    variant="standard"
                    value={content}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                        setContent(event.target.value);
                    }}
                    onSubmit={handleSubmit}
                />
                <Button variant="contained" type="submit">
                    Enter
                </Button>
            </form>
        </div>
    );
};
