import { Box, Button, Container, Typography } from "@mui/material";

function HomePage() {
  return (
    <div
      style={{
        backgroundImage: "url(/image.jpg)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <Container>
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          minHeight="100vh"
          textAlign="center"
          p={4}
          color="white"
        >
          <Typography variant="h3" gutterBottom>
            Welcome to the iBook Library
          </Typography>
          <Typography variant="h6" paragraph>
            Discover a world of knowledge and adventure with our extensive
            collection of books.
          </Typography>
          <Button
            variant="contained"
            color="primary"
            size="large"
            href="/bookslist"
            sx={{ m: 2 }}
          >
            Browse Books
          </Button>
        </Box>
      </Container>
    </div>
  );
}

export default HomePage;
