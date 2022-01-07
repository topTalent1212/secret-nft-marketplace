import React from 'react';
import styled from 'styled-components';

import NftsGrid from 'components/base/NftsGrid';
import { Container, Title, Wrapper } from 'components/layout';
import { NftType, UserType } from 'interfaces/index';

export interface ExploreProps {
  NFTS: NftType[];
  user?: UserType;
  loadMore: () => void;
  hasNextPage: boolean;
  loading: boolean;
  totalCount?: number;
}

const Explore: React.FC<ExploreProps> = ({ NFTS, user, loadMore, hasNextPage, loading, totalCount }) => (
  <Container>
    <Wrapper>
      <STitle>{totalCount && totalCount > 10 ? `Explore among ${totalCount} NFTs` : 'Explore'}</STitle>
      <NftsGrid
        NFTs={NFTS}
        isLoading={loading}
        isLoadMore={hasNextPage}
        loadMore={loadMore}
        noNftBody={
          <>
            Come later to discover new NFTs.
            <br />
            <br />
            Thanks !
          </>
        }
        noNftTitle="All NFTs are sold !"
        user={user}
      />
    </Wrapper>
  </Container>
);

const STitle = styled(Title)`
  font-size: 3.2rem;

  ${({ theme }) => theme.mediaQueries.md} {
    font-size: 4.8rem;
    margin: 0 auto;
  }

  ${({ theme }) => theme.mediaQueries.lg} {
    font-size: 4.8rem;
    margin: 0;
  }
`;

export default Explore;
