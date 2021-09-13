import { FC } from 'react';
import { GetServerSideProps } from 'next';
import { ExchangeRateResponseModel, Quote } from '@src/models/exchange-rates';
import ExchangeRatesService from '@src/services/exchange-rates';

// TODO: use material-ui classes, layout.. not Home.modul.css ...
// https://material-ui.com/components/drawers/#mini-variant-drawer

// TODO: draw graph
// https://devexpress.github.io/devextreme-reactive/react/chart/demos/line/line/

const getValues = (values: Array<Quote>) => {
  return (
    <div>
      {values.map((value: Quote) => (
        <div>{value.close}</div>
      ))}
    </div>
  );
};

const ExchangeRates: FC<ExchangeRateResponseModel> = ({ dollarIndex, exchangeRates }: ExchangeRateResponseModel) => {
  return (
    <div>
      <div>{getValues(dollarIndex)}</div>
      <div>{getValues(exchangeRates)}</div>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const response = await ExchangeRatesService.getExchangeRate();

  return {
    props: response,
  };
};

export default ExchangeRates;
