import {
  Box,
  Container,
  Grid,
  Typography,
  Link,
  IconButton,
} from "@mui/material";
import { Facebook, Instagram, X } from "@mui/icons-material";

function Footer() {
  return (
    <div className="mt-auto">
      <Box
        sx={{
          backgroundColor: (theme) => theme.palette.grey[200],
          p: 3,
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={5}>
            <Grid item xs={12} sm={4}>
              <Typography variant="h6" color="text.primary" gutterBottom>
                About Us
              </Typography>
              <Typography variant="body2" color="text.secondary">
                We are iBook Library, dedicated to spreading knowledge and the
                joy of reading to our community.
              </Typography>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Typography variant="h6" color="text.primary" gutterBottom>
                Contact Us
              </Typography>
              <Typography variant="body2" color="text.secondary">
                123 Library Street, Booktown, BT 12345
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Email: info@iBooklibrary.com
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Phone: +1 234 567 8901
              </Typography>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Typography variant="h6" color="text.primary" gutterBottom>
                Follow Us
              </Typography>
              <IconButton
                aria-label="Facebook"
                color="primary"
                href="https://facebook.com/"
                target="_blank"
              >
                <Facebook />
              </IconButton>
              <IconButton
                aria-label="X"
                color="primary"
                href="https://X.com/"
                target="_blank"
              >
                <X />
              </IconButton>
              <IconButton
                aria-label="Instagram"
                color="primary"
                href="https://instagram.com/"
                target="_blank"
              >
                <Instagram />
              </IconButton>
            </Grid>
          </Grid>
          <Box mt={5}>
            <Typography variant="body2" color="text.secondary" align="center">
              {"Copyright © "}
              <Link color="inherit" href="/">
                iBook Library
              </Link>{" "}
              {new Date().getFullYear()}
              {"."}
            </Typography>
          </Box>
        </Container>
      </Box>
    </div>
  );
}

export default Footer;
