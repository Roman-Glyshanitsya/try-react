import { PageTitle } from 'components/PageTitle/PageTitle';
import { EventBoard } from 'components/EventBoard/EventBoard';
import { Reader } from 'components/Reader/Reader';
import ProductCatalog from './ProductCatalog';
import upcomingEvents from '../data/upcoming-events.json';
import publications from '../data/publications.json';
import 'bootstrap/dist/css/bootstrap.min.css';

export const App = () => {
  return (
    <>
      <PageTitle text="24th Core Worlds Coalition Conference" />
      <EventBoard events={upcomingEvents} />
      <Reader items={publications} />
      <ProductCatalog />
    </>
  )
};
