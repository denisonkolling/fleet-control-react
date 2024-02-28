import { authentication } from "./authentication";
import { dashboard } from "./dashboard";
import { vehicles } from "./vehicles";
import { drivers } from "./drivers";
import { tyres } from "./tyres";
import { trips } from "./trips";
import { expenses } from "./expenses";
import { customers } from "./customers";
import { invoices } from "./invoices";
import { products } from "./products";

export const menuItems = {
  items: [dashboard, vehicles, trips, expenses, drivers,  invoices,  tyres, customers, products, authentication,]
};
