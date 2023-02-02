import { GetStaticPropsContext } from 'next';
import { Fragment, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import styles from './index.module.css';
import { gql } from '@apollo/client';
import client from '../apollo-client';

import {
  Logo,
  TopNavLinks,
  TopNavLinksProps,
  HeartIcon,
  UserIcon,
  Modal,
} from '../../../libs/common-ui/src/lib';
import { dataTopNavLinks } from '../mocks';

export interface IndexProps {
  dataTopNavLinks: TopNavLinksProps;
  pokies: any;
}

export function Index({ dataTopNavLinks, pokies }: IndexProps) {
  const [showModal, setShowModal] = useState(false);
  console.log(pokies);
  return (
    <div className={styles.page}>
      <Logo linkTo="/" />
      <div className="wrapper">
        <div className="container">
          <div id="welcome">
            <TopNavLinks links={dataTopNavLinks.links} />
            <div onClick={() => setShowModal(true)}>
              <UserIcon className="w-[32px] hover:stroke-slate-500 hover:fill-black hover:cursor-pointer " />
            </div>
          </div>

          <p id="love">
            Carefully crafted with
            <HeartIcon className="w-[32px]  hover:stroke-red-200 hover:fill-red-800 hover:cursor-pointer" />
          </p>
        </div>
      </div>

      <>
        <Transition
          show={showModal}
          // enter="ease-out duration-300"
          // enterFrom="opacity-0 scale-95"
          // enterTo="opacity-100 scale-100"
          // leave="ease-in duration-200"
          // leaveFrom="opacity-100 scale-100"
          // leaveTo="opacity-0 scale-95"
          enter="transition-opacity duration-75"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity duration-150"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Modal setOpenModal={setShowModal} />
        </Transition>
      </>
      {/* {showModal && <Modal setOpenModal={setShowModal} />} */}
    </div>
  );
}

export default Index;

export async function getStaticProps() {
  const { data } = await client.query({
    query: gql`
      query MyQuery {
        pokemon_v2_pokemon(limit: 10, order_by: { id: asc }) {
          id
          pokemon_species_id
          name
          pokemon_v2_pokemonabilities {
            ability_id
            pokemon_v2_ability {
              name
            }
          }
          pokemon_v2_pokemonmoves {
            move_id
            pokemon_v2_move {
              name
              pokemon_v2_generation {
                name
              }
              pokemon_v2_type {
                id
                name
              }
            }
          }
          pokemon_v2_pokemonsprites {
            sprites
          }
        }
      }
    `,
  });

  return {
    props: {
      dataTopNavLinks,
      pokies: data,
    },
  };
}
