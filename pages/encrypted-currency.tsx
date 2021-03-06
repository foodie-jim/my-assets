import { FC } from 'react';
import { Button } from '@material-ui/core';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import { GetServerSideProps } from 'next';

interface SupProps {
  message: string;
}

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      backgroundColor: 'red',
    },
  })
);

const EncryptedCurrency: FC<SupProps> = ({ message }: SupProps) => {
  const classes = useStyles();
  return (
    <div>
      <Button className={classes.root} variant="contained">
        {message}
      </Button>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    props: {
      message: 'sup',
    },
  };
};

export default EncryptedCurrency;
