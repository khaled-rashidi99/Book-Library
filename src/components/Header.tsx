import { ShoppingCart, History } from "@mui/icons-material";
import CollectionsBookmarkIcon from "@mui/icons-material/CollectionsBookmark";
import { AppBar, Badge, Button, Toolbar, Typography } from "@mui/material";

function Header() {
  return (
    <>
      <AppBar position="static" color="primary">
        <Toolbar>
          <Typography variant="h6" component="a" href="/">
            iBook Library
          </Typography>
          <div className="actions ml-auto">
            <Button color="inherit" href="/bookslist">
              <Badge color="secondary">
                <CollectionsBookmarkIcon />
              </Badge>
            </Button>
            <Button color="inherit" href="/cart">
              <Badge color="secondary">
                <ShoppingCart />
              </Badge>
            </Button>
            <Button color="inherit" href="/history">
              <Badge color="secondary">
                <History />
              </Badge>
            </Button>
          </div>
        </Toolbar>
      </AppBar>
    </>
  );
}

export default Header;
