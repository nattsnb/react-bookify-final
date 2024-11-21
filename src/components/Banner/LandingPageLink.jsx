import Typography from "@mui/material/Typography";
import { Link } from "@mui/material";

export function LandingPageLink() {
  return (
    <div>
      <Link href={"/"}>
        <Typography variant="landingPageLink">
          I don't want to be that specific
        </Typography>
      </Link>
    </div>
  );
}
