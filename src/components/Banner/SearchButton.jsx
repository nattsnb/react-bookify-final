import { Button, Link } from "@mui/material";
import Typography from "@mui/material/Typography";

export function SearchButton() {
  return (
    <div>
      <Link href={"/"}>
        <Button variant="contained">Search for venue</Button>
      </Link>
    </div>
  );
}
