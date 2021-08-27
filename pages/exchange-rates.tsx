import { FC } from 'react';
import { Button } from '@material-ui/core';
import { GetServerSideProps } from 'next';
import ExchangeRatesService from '../src/services/exchange-rates';

interface SupProps {
  message: string;
}

// TODO: use material-ui classes, layout.. not Home.modul.css ...
// https://material-ui.com/components/drawers/#mini-variant-drawer

const onClickHandler = () => {
  try {
    ExchangeRatesService.getExchangeRate();
  } catch (error) {
    console.log(error);
  }
};

const ExchangeRates: FC<SupProps> = ({ message }: SupProps) => {
  return (
    <div>
      <Button color="primary" variant="contained" onClick={onClickHandler}>
        {message}
      </Button>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  // ExchangeRatesService.getExchangeRate();
  return {
    props: {
      message: 'sup',
    },
  };
};

export default ExchangeRates;
