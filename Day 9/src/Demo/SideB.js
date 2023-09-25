import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
  ListItemSuffix,
  Chip,
} from "@material-tailwind/react";
import {
  PresentationChartBarIcon,
  ShoppingBagIcon,
  UserCircleIcon,
  InboxIcon,
} from "@heroicons/react/solid";
import { Link } from "react-router-dom";
import { UseSelector, useSelector } from "react-redux";

export function DefaultSidebar() {

  const pcount = useSelector((state)=>state.products.products.length);
  const ccount = useSelector((state)=>state.customers.customers.length);

  return (
    <div className="fixed left-0 top-0 h-full w-[20rem] p-4 bg-grey shadow-xl">
    <Card className="w-full max-w-[20rem]">
      <div className="mb-2 p-4">
        <Typography variant="h5" color="blue-gray">
          Sidebar
        </Typography>
      </div>
      <List>
        <ListItem>
          <ListItemPrefix>
            <PresentationChartBarIcon className="h-5 w-5" />
          </ListItemPrefix>
          Dashboard
        </ListItem>
          <Link to={'/addProducts'} >
        <ListItem>
          <ListItemPrefix>
            <ShoppingBagIcon className="h-5 w-5" />
          </ListItemPrefix>
            Add Products
        </ListItem>
            </Link>
        <ListItem>
          <ListItemPrefix>
            <InboxIcon className="h-5 w-5" />
          </ListItemPrefix>
          <Link to={'/ViewProducts'} >
            View Products
            </Link>
          <ListItemSuffix>
            <Chip
              value={pcount}
              size="sm"
              variant="ghost"
              color="blue-gray"
              className="rounded-full"
            />
          </ListItemSuffix>
        </ListItem>
        <Link to={'/users'} >
          <ListItem>
          <ListItemPrefix>
            <UserCircleIcon className="h-5 w-5" />
          </ListItemPrefix>
          users
          <ListItemSuffix>
            <Chip
              value={pcount}
              size="sm"
              variant="ghost"
              color="blue-gray"
              className="rounded-full"
            />
          </ListItemSuffix>
        </ListItem></Link> 
        
       <Link to={'/admin'}>
        <ListItem>
          <ListItemPrefix>
            {/* <Cog6ToothIcon className="h-5 w-5" /> */}
          </ListItemPrefix>
          Log Out
        </ListItem></Link>
      </List>
    </Card>
    </div>
  );
}
