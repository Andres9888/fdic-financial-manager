/* eslint-disable */
// @ts-nocheck

import { List, Layout } from 'antd';

import { ListingCard } from '../components';
import { Datum, Data } from '../../../types';
const { Content } = Layout;

interface Props {
  favorites: Datum[] | [];
  setFavorites: () => void;
}
export const ListingFavorite = ({ favorites, setFavorites }: Props) => {
  return (
    <Content className="home">
      <div className="home-listings">
        <List
          dataSource={favorites}
          grid={{
            gutter: 16,
            column: 4,
            xs: 1,
            sm: 2,
            lg: 4,
          }}
          renderItem={(bank: Data) => (
            <List.Item
              key={bank.ID}
              actions={[
                <a
                  key={`a-${bank.ID}`}
                  onClick={() =>
                    setDrawer({
                      visible: true,
                      user: bank,
                    })
                  }
                >
                  View Profile
                </a>,
              ]}
            >
              <ListingCard bank={bank} favorites={favorites} setFavorites={setFavorites} />
            </List.Item>
          )}
        />
      </div>
    </Content>
  );
};
