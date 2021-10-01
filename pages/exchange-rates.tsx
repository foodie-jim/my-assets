import { FC } from 'react';
import { GetServerSideProps } from 'next';
// import vega from 'vega';
// import vegaLite from 'vega-lite';
// import vl from 'vega-lite-api';
import { ExchangeRateResponseModel, Quote } from '@src/models/exchange-rates';
import ExchangeRatesService from '@src/services/exchange-rates';

// TODO: use material-ui classes, layout.. not Home.modul.css ...
// https://material-ui.com/components/drawers/#mini-variant-drawer

// TODO: Draw graph
// https://vizhub.com/curran/7392ee124c8249b884e735abf6da8df4?edit=files&file=index.js

// vl.register(vega, vegaLite, {
//   view: { renderer: 'svg' },
//   init: view => { view.tooltip(new Handler().call); }
// });

const getValues = (values: Array<Quote>) => {
  return (
    <div>
      {values.map((value: Quote) => (
        <div>
          {value.date}
          {value.close}
        </div>
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
