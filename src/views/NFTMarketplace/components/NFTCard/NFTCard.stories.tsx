import React from "react";
import styled from "styled-components";
/* eslint-disable import/no-unresolved */
import { Meta } from "@storybook/react/types-6-0";
//import { useFarms } from '../../../../state/hooks';
import NFTCard from './NFTCard';

const Row = styled.div`
  display: flex;
  margin-bottom: 32px;

  & > input + input {
    margin-left: 16px;
  }
`;

const token = {
  name: 'Tadhana',
  symbol: 'TT',
  tokenURI: 'https://img.cryptokitties.co/0x06012c8cf97bead5deae237070f9587f8e7a266d/tutorial-sire.svg',
  /*  should be pulled on per address basis */
  price: 24.5,
  isNewToken: true,
}

export default {
    title: "View/NFTCard",
    component: NFTCard,
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
              <NFTCard removed token={token}/>  
          </>
      </div>
    );
  };
