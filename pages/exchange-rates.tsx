import { FC } from 'react';
import { GetServerSideProps } from 'next';
import { Vega } from 'react-vega';
import { Config, TopLevelSpec, compile } from 'vega-lite';
// import { ExchangeRateResponseModel, Quote } from '@src/models/exchange-rates';
// import ExchangeRatesService from '@src/services/exchange-rates';

// TODO: use material-ui classes, layout.. not Home.modul.css ...
// https://material-ui.com/components/drawers/#mini-variant-drawer

// TODO: Draw graph
// https://vizhub.com/curran/7392ee124c8249b884e735abf6da8df4?edit=files&file=index.js

// const getValues = (values: Array<Quote>) => {
//   return (
//     <div>
//       {values.map((value: Quote) => (
//         <div>
//           {value.date}
//           {value.close}
//         </div>
//       ))}
//     </div>
//   );
// };

// const ExchangeRates: FC<ExchangeRateResponseModel> = ({ dollarIndex, exchangeRates }: ExchangeRateResponseModel) => {
//   return (
//     <div>
//       <div>{getValues(dollarIndex)}</div>
//       <div>{getValues(exchangeRates)}</div>
//     </div>
//   );
// };

// const ExchangeRates: FC<ExchangeRateResponseModel> = ({ dollarIndex, exchangeRates }: ExchangeRateResponseModel) => {
// eslint-disable-next-line react/prop-types
const ExchangeRates: FC = (vegaSpec) => {
  return (
    <div>
      <Vega spec={vegaSpec} actions={false} renderer="svg" />
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  // const response = await ExchangeRatesService.getExchangeRate();

  const vegaLiteSpec: TopLevelSpec = {
    $schema: 'https://vega.github.io/schema/vega-lite/v5.json',
    data: {
      values: [
        { a: 'A', b: 28 },
        { a: 'B', b: 55 },
        { a: 'C', b: 43 },
        { a: 'D', b: 91 },
        { a: 'E', b: 81 },
        { a: 'F', b: 53 },
        { a: 'G', b: 19 },
        { a: 'H', b: 87 },
        { a: 'I', b: 52 },
      ],
    },
    mark: 'bar',
    encoding: {
      x: { field: 'a', type: 'nominal', axis: { labelAngle: 0 } },
      y: { field: 'b', type: 'quantitative' },
    },
  };

  const config: Config = {
    bar: {
      color: 'firebrick',
    },
  };

  const vegaSpec = compile(vegaLiteSpec, { config }).spec;

  return {
    props: vegaSpec,
  };
};

export default ExchangeRates;
