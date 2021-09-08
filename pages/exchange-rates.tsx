import { FC } from 'react';
import { GetServerSideProps } from 'next';
import ExchangeRatesService from '../src/services/exchange-rates';

// TODO: use material-ui classes, layout.. not Home.modul.css ...
// https://material-ui.com/components/drawers/#mini-variant-drawer

// TODO: draw graph
// https://devexpress.github.io/devextreme-reactive/react/chart/demos/line/line/

const ExchangeRates: FC = () => {
  return <div />;
};

export const getServerSideProps: GetServerSideProps = async () => {
  try {
    ExchangeRatesService.getExchangeRate().then((response) => {
      console.log(response);
    });
  } catch (error) {
    console.log(error);
  }

  return {
    props: {
      message: 'sup',
    },
  };
};

export default ExchangeRates;
