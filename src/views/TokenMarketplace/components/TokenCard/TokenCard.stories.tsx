import React from "react";
import styled from "styled-components";
/* eslint-disable import/no-unresolved */
import { Meta } from "@storybook/react/types-6-0";
//import { useFarms } from '../../../../state/hooks';
import TokenCard from './TokenCard';

const Row = styled.div`
  display: flex;
  margin-bottom: 32px;

  & > input + input {
    margin-left: 16px;
  }
`;

const token = {
    name: "Tadhana",
    symbol: "TT",
/*  should be pulled on per address basis */
    price: "2.564",
    owned: "77",
    value: "197.428",
    isNewToken: true,
    bondedSupply: 131,
    marketCap: 360000
}

export default {
    title: "View/TokenCard",
    component: TokenCard,
    argTypes: {
      isConnected: {
        type: 'radio',
        options: ['true', 'false']
      }
    },
  } as Meta;

  export const Default: React.FC = () => {
    return (
      <div>
          <>
              <TokenCard removed token={token}/>  
          </>
      </div>
    );
  };
