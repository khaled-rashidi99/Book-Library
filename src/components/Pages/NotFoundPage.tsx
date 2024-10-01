import { Box, Button, Typography } from "@mui/material";

function NotFoundPage() {
  return (
    <div
      style={{
        backgroundImage: "url(/image.jpg)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          minHeight: "100vh",
        }}
      >
        <Typography variant="h1" style={{ color: "white", padding: "2rem" }}>
          404
        </Typography>
        <Typography variant="h6" style={{ color: "white", padding: "2rem" }}>
          The page you're looking for doesn't exist.
        </Typography>
        <Button variant="contained" component="a" href="/">
          Go Back Home
        </Button>
      </Box>
    </div>
  );
}

export default NotFoundPage;
