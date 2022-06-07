import { Box } from "@mui/material";
import CardItem from "./CardItem";

const Feed = () => {
  return (
    <Box flex={4} p={3}>
      <CardItem
        title="Paaz PG"
        img="https://images.unsplash.com/photo-1654471179701-e6dd7544ae5a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
        date="May 23, 2022"
      />
      <CardItem
        title="Ardalan Hamadani"
        img="https://images.unsplash.com/photo-1654615560935-2e8a5c31da94?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
        date="May 24, 2022"
      />
      <CardItem 
      title="Jessica" 
      img="https://images.unsplash.com/photo-1654541451875-db49bf1a0974?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" 
      date="September 14, 2016" />
      <CardItem
        title="Kateryna"
        img="https://images.unsplash.com/photo-1654523500427-8942065865ac?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=678&q=80"
        date="September 14, 2016"
      />
      <CardItem
        title="Corey"
        img="https://images.unsplash.com/photo-1654578559414-fdf189e090ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=627&q=80"
        date="September 14, 2016"
      />
    </Box>
  );
};

export default Feed;
