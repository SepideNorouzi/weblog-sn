import { useQuery } from "@apollo/client/react";
import React from "react";
import { GET_POST_COMMENTS } from "../../graphql/queries";
import { Avatar, Box, Grid, Typography } from "@mui/material";

function Comment({ slug }) {
  const { loading, data, errors } = useQuery(GET_POST_COMMENTS, {
    variables: { slug },
  });

  if (loading) return null;

  console.log(data);

  return (
    <Grid
      container
      sx={{
        boxShadow: "rgba(0,0,0,0.1) 0px 4px 12px",
        borderRadius: 4,
        py: 1,
        mt: 8,
      }}
    >
      <Grid item m={2} size={12}>
        <Typography component="p" variant="h6" fontWeight={700} color="primary">
          کامنت ها
        </Typography>
        {data.comments.map((comment) => (
          <Grid
            key={comment.id}
            m={2}
            p={2}
            border="1px silver solid"
            borderRadius={1}
          >
            <Box component="div" display="flex" alignItems="center" mb={3}>
              <Avatar>{comment.name[0]}</Avatar>
              <Typography component="span" variant="p" fontWeight={700} mr={1}>
                {comment.name}
              </Typography>
            </Box>
            <Typography component="p" variant="p">
              {comment.text}
            </Typography>
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
}

export default Comment;
