import React from "react";
import {
  createStyles,
  Image,
  Container,
  Title,
  Text,
  Button,
  SimpleGrid,
} from "@mantine/core";
import { Link } from "react-router-dom";
import PageTitle from "../PageTitle/PageTitle";
// import image from "./image.svg";

const NotFound = () => {
  const useStyles = createStyles((theme) => ({
    root: {
      paddingTop: 80,
      paddingBottom: 80,
    },

    title: {
      fontWeight: 900,
      fontSize: 34,
      marginBottom: theme.spacing.md,
      fontFamily: `Greycliff CF, ${theme.fontFamily}`,

      [theme.fn.smallerThan("sm")]: {
        fontSize: 32,
      },
    },

    control: {
      [theme.fn.smallerThan("sm")]: {
        width: "100%",
      },
    },

    mobileImage: {
      [theme.fn.largerThan("sm")]: {
        display: "none",
      },
    },

    desktopImage: {
      [theme.fn.smallerThan("sm")]: {
        display: "none",
      },
    },
  }));
  const { classes } = useStyles();

  console.log(classes);
  /*  export function NotFoundImage() {
   */

  return (
    <Container className={classes.root}>
      <PageTitle title="Not Found!!!" />
      <SimpleGrid
        spacing={80}
        cols={2}
        breakpoints={[{ maxWidth: "sm", cols: 1, spacing: 40 }]}
      >
        <div className="animate-pulse md:hidden">
          <Image
            src="https://ui.mantine.dev/_next/static/media/image.11cd6c19.svg"
            className={classes.mobileImage}
          />
        </div>
        <div>
          <Title className={classes.title}>Something is not right...</Title>
          <Text color="dimmed" size="lg">
            Page you are trying to open does not exist. You may have mistyped
            the address, or the page has been moved to another URL. If you think
            this is an error contact support.
          </Text>
          <Link to="/">
            <Button
              variant="outline"
              size="md"
              mt="xl"
              className={classes.control}
            >
              Get back to Home
            </Button>
          </Link>
        </div>
        <div className="animate-pulse">
          <Image
            src="https://ui.mantine.dev/_next/static/media/image.11cd6c19.svg"
            className={classes.desktopImage}
          />
        </div>
      </SimpleGrid>
    </Container>
  );
};
export default NotFound;
