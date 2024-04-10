import DrinksList from '@/components/DrinksLIst';
import { data } from 'autoprefixer';

const getTickets = async () => {
  const response = await fetch(
    'https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a'
  );

  const data = await response.json();
  console.log(data);
  return data;
};

export default async function TicketList() {
  const tickets = await getTickets();

  return (
    <>
      <DrinksList drinks={tickets.drinks} />
    </>
  );
}
