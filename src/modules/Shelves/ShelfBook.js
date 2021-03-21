import React from "react";
import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  makeStyles
} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles({
  root: {
    maxWidth: "200px",
    border: "none"
  },
  media: {
    height: 0,
    paddingTop: "56.25%" // 16:9
  }
});

function ShelfBook({ book }) {
  const classes = useStyles();

  return (
    <Box m={2}>
      <Grid container>
        <Grid item>
          <Card className={classes.root} variant="outlined">
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image={book.thumbnail}
                title="Contemplative Reptile"
              />
              <CardContent>
                <Typography gutterBottom variant="body2" component="h2">
                  {book.title}
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                Remove
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}

export default ShelfBook;
